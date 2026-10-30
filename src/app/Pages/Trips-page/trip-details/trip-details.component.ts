import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Trip } from '../../../core/models/trip.model';
import { TRIPS } from '../../../core/data/trips/index';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
  standalone: false,
})
export class TripDetailsComponent implements OnInit {

  // ================= Trip =================
  trip?: Trip;

  // ================= Related Trips =================
  relatedTrips: Trip[] = [];

  // ================= Loading =================
  loading = false;

  // ================= Gallery / Viewer =================
  isViewerOpen = false;
  selectedImageIndex = 0;

  // ================= Booking Modal =================
  showBookingModal = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slugOrId = params.get('slug') || params.get('id');

      if (!slugOrId) {
        this.trip = undefined;
        return;
      }

      this.getTripData(slugOrId);
    });
  }

  // ================= Get Trip (By Slug or ID) =================
  private getTripData(param: string): void {
    this.loading = true;

    // بحث بالـ id لو كان رقم، أو بالـ slug لو كان نص
    const numericId = Number(param);
    if (!isNaN(numericId) && numericId > 0) {
      this.trip = TRIPS.find(t => t.id === numericId);
    } else {
      this.trip = TRIPS.find(t => t.slug === param);
    }

    if (!this.trip) {
      this.loading = false;
      this.relatedTrips = [];
      return;
    }

    this.loadRelatedTrips();
    this.loading = false;

    // رجوع لأعلى الصفحة عند فتح أي رحلة
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // ================= Related Trips =================
  private loadRelatedTrips(): void {
    if (!this.trip) {
      this.relatedTrips = [];
      return;
    }

    this.relatedTrips = TRIPS
      .filter(t => t.id !== this.trip!.id)
      .filter(t =>
        t.destination.id === this.trip!.destination.id ||
        t.type.some(typeName => this.trip!.type.includes(typeName))
      )
      .slice(0, 4);
  }

  // ================= Booking Actions =================
  openBooking(): void {
    this.showBookingModal = true;
  }

  closeBooking(): void {
    this.showBookingModal = false;
  }

  // ================= Image Viewer =================
  openViewer(index: number): void {
    this.selectedImageIndex = index;
    this.isViewerOpen = true;
  }

  closeViewer(): void {
    this.isViewerOpen = false;
  }

  nextImage(): void {
    if (!this.trip?.images?.length) return;
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.trip.images.length;
  }

  prevImage(): void {
    if (!this.trip?.images?.length) return;
    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.trip.images.length) % this.trip.images.length;
  }

  // دعم التنقل والإغلاق بالكيبورد
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      if (this.isViewerOpen) this.closeViewer();
      if (this.showBookingModal) this.closeBooking();
      return;
    }

    if (!this.isViewerOpen) return;

    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }
}
