import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../../core/Services/Trips.service';
import { Trip } from '../../../core/models/Details/Trip';
import { TripFilter } from '../../../core/models/Search/trip-filter';

@Component({
  selector: 'app-Trip',
  templateUrl: './Trip.component.html',
  styleUrls: ['./Trip.component.css'],
  standalone: false
})
export class TripComponent implements OnInit {

  trips: Trip[] = [];
  allTrips: Trip[] = [];

  loading = false;

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.getTrips();
    console.log(this.trips)
  }

  getTrips() {

    this.loading = true;

    this.tripsService.getTrips().subscribe({

      next: (res: Trip[]) => {

        this.trips = res;

        this.allTrips = res;

        this.loading = false;

        console.log('Trips:', this.trips);
      },

      error: (err) => {

        console.error(err);
        console.log('trips' , this.trips)

        this.loading = false;
      }
    });
  }

  applyFilter(filter: TripFilter) {

    this.trips = this.allTrips.filter((trip) => {

      const matchesCity =
        !filter.city ||
        trip.city.toLowerCase().includes(filter.city.toLowerCase());

      const matchesLocation =
        !filter.location ||
        trip.location.toLowerCase().includes(filter.location.toLowerCase());

      const matchesMinPrice =
        filter.minPrice == null ||
        (trip.price ?? 0) >= filter.minPrice;

      const matchesMaxPrice =
        filter.maxPrice == null ||
        (trip.price ?? 0) <= filter.maxPrice;

      const matchesDuration =
        !filter.durationInDays ||
        trip.durationInDays === filter.durationInDays;

      const matchesRating =
        !filter.rating ||
        (trip.rating ?? 0) >= filter.rating;

      return (
        matchesCity &&
        matchesLocation &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesDuration &&
        matchesRating
      );
    });

    if (filter.descending) {

      this.trips.sort(
        (a, b) => (b.price ?? 0) - (a.price ?? 0)
      );

    } else {

      this.trips.sort(
        (a, b) => (a.price ?? 0) - (b.price ?? 0)
      );
    }
  }
}
