import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TripsService } from '../../../core/Services/Trips.service';
import { TripDetails } from '../../../core/models/Details/TripDetails';
import { Trip } from '../../../core/models/Details/Trip';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
  standalone: false
})
export class TripDetailsComponent implements OnInit {

  trip?: TripDetails;

  relatedTrips: Trip[] = [];

  loading = false;

  // gallery
  isViewerOpen = false;
  selectedImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private tripsService: TripsService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      this.getTripById(id);
    });
  }

  getTripById(id: number) {

    this.loading = true;

    this.tripsService.getTripDetails().subscribe({

      next: (res: TripDetails[]) => {

        // current trip
        this.trip = res.find(t => t.id === id);

       this.loadRelatedTrips();

        // this.loading = false;

        console.log('Trip Details:', this.trip);

        console.log('Related Trips:', this.relatedTrips);
      },

      error: (err) => {

        console.error('Error fetching trip details:', err);

        // this.loading = false;
      }
    });
  }

  loadRelatedTrips() {

  if (!this.trip?.relatedTripsIds?.length){
      this.loading = false;
      return;
  }

    

  this.tripsService.getTrips().subscribe({

    next: (res: Trip[]) => {

      this.relatedTrips = res.filter(t =>
        this.trip?.relatedTripsIds?.includes(t.id)
      );
              this.loading = false;

    },

    error: (err) => {

      console.error('Error fetching related trips:', err);
              this.loading = false;

    }

  });
}

  // ===== Image Viewer =====

  openViewer(index: number) {

    this.selectedImageIndex = index;

    this.isViewerOpen = true;
  }

  closeViewer() {

    this.isViewerOpen = false;
  }

  nextImage() {

    if (!this.trip || !this.trip.images?.length) return;

    this.selectedImageIndex =
      (this.selectedImageIndex + 1) %
      this.trip.images.length;
  }

  prevImage() {

    if (!this.trip || !this.trip.images?.length) return;

    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.trip.images.length) %
      this.trip.images.length;
  }
}
