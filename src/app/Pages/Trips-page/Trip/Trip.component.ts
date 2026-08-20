import { Component, OnInit } from '@angular/core';

import { Trip } from '../../../core/models/trip.model';
import { TripFilter } from '../../../core/models/Search/trip-filter';

import { TRIPS } from '../../../core/data/trips';

@Component({
  selector: 'app-Trip',
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
  // SEARCH
  // =====================================================

  searchText = '';


  // =====================================================
  // SORT
  // =====================================================

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


  // =====================================================
  // INIT
  // =====================================================

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


  // =====================================================
  // SEARCH
  // =====================================================

  onSearchChange(): void {

    this.currentPage = 1;

    this.updateTrips();
  }


  // =====================================================
  // SORT
  // =====================================================

  onSortChange(): void {

    this.currentPage = 1;

    this.updateTrips();
  }


  // =====================================================
  // FILTER
  // =====================================================

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


    // ===================================================
    // FILTER
    // ===================================================

    result = result.filter(trip => {

      // -------------------------------------------------
      // CITY
      // -------------------------------------------------

      const matchesCity =
        !this.currentFilter.city?.length ||
        this.currentFilter.city.includes(
          trip.destination.name
        );


      // -------------------------------------------------
      // MIN PRICE
      // -------------------------------------------------

      const matchesMinPrice =
        this.currentFilter.minPrice == null ||
        trip.price >= this.currentFilter.minPrice;


      // -------------------------------------------------
      // MAX PRICE
      // -------------------------------------------------

      const matchesMaxPrice =
        this.currentFilter.maxPrice == null ||
        trip.price <= this.currentFilter.maxPrice;


      // -------------------------------------------------
      // DURATION
      // -------------------------------------------------

      const matchesDurationMin =
        this.currentFilter.durationMin == null ||
        this.currentFilter.durationUnit !== trip.duration.unit ||
        trip.duration.value >= this.currentFilter.durationMin;


      const matchesDurationMax =
        this.currentFilter.durationMax == null ||
        this.currentFilter.durationUnit !== trip.duration.unit ||
        trip.duration.value <= this.currentFilter.durationMax;


      const matchesDurationUnit =
        !this.currentFilter.durationUnit ||
        trip.duration.unit === this.currentFilter.durationUnit;


      // -------------------------------------------------
      // RATING
      // -------------------------------------------------

      const matchesRating =
        this.currentFilter.rating == null ||
        trip.rating >= this.currentFilter.rating;


      return (

        matchesCity &&

        matchesMinPrice &&

        matchesMaxPrice &&

        matchesDurationMin &&

        matchesDurationMax &&

        matchesDurationUnit &&

        matchesRating

      );

    });


    // ===================================================
    // SEARCH
    // ===================================================

    if (this.searchText.trim()) {

      const keyword =
        this.searchText
          .toLowerCase()
          .trim();


      result = result.filter(trip =>

        trip.title
          .toLowerCase()
          .includes(keyword)

        ||

        trip.destination.name
          .toLowerCase()
          .includes(keyword)

        ||

        trip.destination.slug
          .toLowerCase()
          .includes(keyword)

        ||

        trip.shortDescription
          .toLowerCase()
          .includes(keyword)

      );
    }


    // ===================================================
    // SORT
    // ===================================================

    switch (this.sortBy) {

      case 'lowPrice':

        result.sort(
          (a, b) => a.price - b.price
        );

        break;


      case 'highPrice':

        result.sort(
          (a, b) => b.price - a.price
        );

        break;


      case 'rating':

        result.sort(
          (a, b) => b.rating - a.rating
        );

        break;


      case 'popular':

      default:

        // Keep original order

        break;
    }


    // ===================================================
    // DESCENDING
    // ===================================================

    if (this.currentFilter.descending) {

      result.reverse();

    }


    // ===================================================
    // SAVE RESULT
    // =====================================================

    this.trips = result;


    // =====================================================
    // PAGINATION
    // =====================================================

    this.updatePagination();

  }


  // =====================================================
  // PAGINATION
  // =====================================================

  updatePagination(): void {

    this.totalPages = Math.max(
      1,
      Math.ceil(
        this.trips.length / this.pageSize
      )
    );


    // حماية لو الصفحة الحالية أصبحت أكبر من عدد الصفحات

    if (this.currentPage > this.totalPages) {

      this.currentPage = this.totalPages;

    }


    const start =
      (this.currentPage - 1) *
      this.pageSize;


    const end =
      start +
      this.pageSize;


    this.paginatedTrips =
      this.trips.slice(
        start,
        end
      );

  }


  // =====================================================
  // PAGE CHANGE
  // =====================================================

  onPageChanged(page: number): void {

    this.currentPage = page;

    this.updatePagination();

  }

}
