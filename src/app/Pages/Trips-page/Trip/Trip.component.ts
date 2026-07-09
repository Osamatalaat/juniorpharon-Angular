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

  // ================= Data =================

  allTrips: Trip[] = [];

  trips: Trip[] = [];

  paginatedTrips: Trip[] = [];

  loading = false;

  // ================= Search =================

  searchText = '';

  // ================= Sort =================

  sortBy = 'popular';

  // ================= Filter =================

  currentFilter: TripFilter = {};

  // ================= Pagination =================

  currentPage = 1;

  pageSize = 6;

  totalPages = 1;

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {

    this.getTrips();

  }

  // ================= Get Trips =================

  getTrips(): void {

    this.loading = true;

    this.tripsService.getTrips().subscribe({

      next: (res: Trip[]) => {

        this.allTrips = res;

        this.updateTrips();

        this.loading = false;

      },

      error: (err) => {

        console.error(err);

        this.loading = false;

      }

    });

  }

  // ================= Search =================

  onSearchChange(): void {

    this.currentPage = 1;

    this.updateTrips();

  }

  // ================= Sort =================

  onSortChange(): void {

    this.currentPage = 1;

    this.updateTrips();

  }

  // ================= Filter =================

  applyFilter(filter: TripFilter): void {

    this.currentFilter = filter;

    this.currentPage = 1;

    this.updateTrips();

  }

  // ================= Main Function =================

  updateTrips(): void {

    let result = [...this.allTrips];

    // -------- Filter --------

    if (this.currentFilter) {

      result = result.filter(trip => {

        const matchesCity =
          !this.currentFilter.city ||
          trip.city.toLowerCase().includes(this.currentFilter.city.toLowerCase());

        const matchesLocation =
          !this.currentFilter.location ||
          trip.location.toLowerCase().includes(this.currentFilter.location.toLowerCase());

        const matchesMinPrice =
          this.currentFilter.minPrice == null ||
          (trip.price ?? 0) >= this.currentFilter.minPrice;

        const matchesMaxPrice =
          this.currentFilter.maxPrice == null ||
          (trip.price ?? 0) <= this.currentFilter.maxPrice;

        const matchesDuration =
          !this.currentFilter.durationInDays ||
          trip.durationInDays === this.currentFilter.durationInDays;

        const matchesRating =
          !this.currentFilter.rating ||
          (trip.rating ?? 0) >= this.currentFilter.rating;

        return (
          matchesCity &&
          matchesLocation &&
          matchesMinPrice &&
          matchesMaxPrice &&
          matchesDuration &&
          matchesRating
        );

      });

    }

    // -------- Search --------

    if (this.searchText.trim()) {

      const keyword = this.searchText.toLowerCase();

      result = result.filter(trip =>

        trip.title.toLowerCase().includes(keyword) ||

        trip.city.toLowerCase().includes(keyword) ||

        trip.location.toLowerCase().includes(keyword)

      );

    }

    // -------- Sort --------

    switch (this.sortBy) {

      case 'lowPrice':

        result.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));

        break;

      case 'highPrice':

        result.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));

        break;

      case 'rating':

        result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

        break;

      case 'popular':

      default:

        break;

    }

    this.trips = result;

    this.updatePagination();

  }

  // ================= Pagination =================

  updatePagination(): void {

    this.totalPages = Math.max(
      1,
      Math.ceil(this.trips.length / this.pageSize)
    );

    const start = (this.currentPage - 1) * this.pageSize;

    const end = start + this.pageSize;

    this.paginatedTrips = this.trips.slice(start, end);

  }

  onPageChanged(page: number): void {

    this.currentPage = page;

    this.updatePagination();

  }

}
