import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Trip } from '../../../core/models/trip.model';
import { TRIPS } from '../../../core/data/trips';

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

  // ================= Gallery =================

  isViewerOpen = false;
  selectedImageIndex = 0;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      this.getTripById(id);

    });

  }

  // ================= Get Trip =================

  getTripById(id: number): void {

    this.loading = true;

    this.trip = TRIPS.find(t => t.id === id);

    if (!this.trip) {

      this.loading = false;

      return;

    }

    this.loadRelatedTrips();

    this.loading = false;

    console.log('Trip:', this.trip);
    console.log('Related Trips:', this.relatedTrips);

  }

  // ================= Related Trips =================

  loadRelatedTrips(): void {

    if (!this.trip) {

      this.relatedTrips = [];

      return;

    }

    this.relatedTrips = TRIPS
      .filter(t =>
        t.destination.id === this.trip!.destination.id
      )
      .filter(t =>
        t.id !== this.trip!.id
      )
      .slice(0, 3);

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

    this.selectedImageIndex =
      (this.selectedImageIndex + 1) %
      this.trip.images.length;

  }

  prevImage(): void {

    if (!this.trip?.images?.length) return;

    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.trip.images.length) %
      this.trip.images.length;

  }

}
