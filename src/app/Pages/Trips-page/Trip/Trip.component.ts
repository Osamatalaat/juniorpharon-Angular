import { Component, OnInit } from '@angular/core';

import { Trip } from '../../../core/models/trip.model';
import { TripFilter } from '../../../core/models/Search/trip-filter';
import { TRIPS } from '../../../core/data/trips/index';

@Component({
  selector: 'app-trip',
  templateUrl: './Trip.component.html',
  styleUrls: ['./Trip.component.css'],
  standalone: false
})
export class TripComponent implements OnInit {

  // =====================================================
  // DATA
  // =====================================================
  allTrips: Trip[] = [];
  trips: Trip[] = [];
  paginatedTrips: Trip[] = [];
  loading = false;

  // =====================================================
  // SEARCH & SORT
  // =====================================================
  searchText = '';
  sortBy = 'popular';

  // =====================================================
  // FILTER
  // =====================================================
  currentFilter: TripFilter = {};

  // =====================================================
  // PAGINATION
  // =====================================================
  currentPage = 1;
  pageSize = 6;
  totalPages = 1;

  ngOnInit(): void {
    this.getTrips();
  }

  // =====================================================
  // GET TRIPS
  // =====================================================
  getTrips(): void {
    this.loading = true;
    this.allTrips = [...TRIPS];
    this.updateTrips();
    this.loading = false;
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.updateTrips();
  }

  onSortChange(): void {
    this.currentPage = 1;
    this.updateTrips();
  }

  applyFilter(filter: TripFilter): void {
    this.currentFilter = filter;
    this.currentPage = 1;
    this.updateTrips();
  }

  // =====================================================
  // MAIN FILTER / SEARCH / SORT
  // =====================================================
  updateTrips(): void {
    let result = [...this.allTrips];

    // 1. FILTERING
    result = result.filter(trip => {
      // City / Destination Match
      const matchesCity =
        !this.currentFilter.city?.length ||
        this.currentFilter.city.some(
          c => c.toLowerCase() === trip.destination.name.toLowerCase() ||
               c.toLowerCase() === trip.destination.slug.toLowerCase()
        );

      // Price Range
      const matchesMinPrice =
        this.currentFilter.minPrice == null || trip.price >= this.currentFilter.minPrice;

      const matchesMaxPrice =
        this.currentFilter.maxPrice == null || trip.price <= this.currentFilter.maxPrice;

      // Duration Range & Unit
      let matchesDuration = true;
      if (this.currentFilter.durationUnit) {
        matchesDuration = trip.duration.unit === this.currentFilter.durationUnit;
      }
      if (matchesDuration && this.currentFilter.durationMin != null) {
        matchesDuration = trip.duration.value >= this.currentFilter.durationMin;
      }
      if (matchesDuration && this.currentFilter.durationMax != null) {
        matchesDuration = trip.duration.value <= this.currentFilter.durationMax;
      }

      // Rating
      const matchesRating =
        this.currentFilter.rating == null || trip.rating >= this.currentFilter.rating;

      return (
        matchesCity &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesDuration &&
        matchesRating
      );
    });

    // 2. SEARCH
    if (this.searchText.trim()) {
      const keyword = this.searchText.toLowerCase().trim();

      result = result.filter(trip =>
        trip.title.toLowerCase().includes(keyword) ||
        trip.destination.name.toLowerCase().includes(keyword) ||
        trip.shortDescription.toLowerCase().includes(keyword) ||
        trip.type.some(t => t.toLowerCase().includes(keyword)) ||
        (trip.highlights && trip.highlights.some(h => h.toLowerCase().includes(keyword)))
      );
    }

    // 3. SORT
    switch (this.sortBy) {
      case 'lowPrice':
        result.sort((a, b) => a.price - b.price);
        break;

      case 'highPrice':
        result.sort((a, b) => b.price - a.price);
        break;

      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;

      case 'popular':
      default:
        // الترتيب الافتراضي بالمعرّف أو الشعبية
        result.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
        break;
    }

    if (this.currentFilter.descending) {
      result.reverse();
    }

    this.trips = result;
    this.updatePagination();
  }

  // =====================================================
  // PAGINATION
  // =====================================================
  updatePagination(): void {
    this.totalPages = Math.max(1, Math.ceil(this.trips.length / this.pageSize));

    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.paginatedTrips = this.trips.slice(start, end);
  }

  onPageChanged(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.updatePagination();

    window.scrollTo({
      top: 350,
      behavior: 'smooth'
    });
  }
}
