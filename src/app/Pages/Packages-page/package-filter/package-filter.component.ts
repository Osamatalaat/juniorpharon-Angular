import {
  Component,
  EventEmitter,
  Output,
  HostListener
} from '@angular/core';

import { PackageFilter } from '../../../core/models/Search/package-filter';


@Component({
  selector: 'app-package-filter',
  templateUrl: './package-filter.component.html',
  styleUrls: ['./package-filter.component.css'],
  standalone: false
})
export class PackageFilterComponent {

  // =====================================================
  // OUTPUT
  // =====================================================

  @Output() filterChanged =
    new EventEmitter<PackageFilter>();


  // =====================================================
  // FILTERS
  // =====================================================

  filters: PackageFilter = {

    pageIndex: 1,

    pageSize: 10

  };


  // =====================================================
  // MOBILE FILTER
  // =====================================================

  showFilter = false;

  isDesktop = true;


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor() {

    this.checkScreenSize();

  }


  // =====================================================
  // SCREEN SIZE
  // =====================================================

  @HostListener('window:resize')
  onResize(): void {

    this.checkScreenSize();

  }


  private checkScreenSize(): void {

    this.isDesktop =
      window.innerWidth >= 768;

  }


  // =====================================================
  // TOGGLE MOBILE FILTER
  // =====================================================

  toggleFilter(): void {

    this.showFilter =
      !this.showFilter;

  }


  // =====================================================
  // PRICE RANGES
  // =====================================================

  priceOptions = [

    {
      label: 'Under 5,000 EGP',
      min: 0,
      max: 5000
    },

    {
      label: '5,000 - 10,000 EGP',
      min: 5000,
      max: 10000
    },

    {
      label: '10,000 - 15,000 EGP',
      min: 10000,
      max: 15000
    },

    {
      label: '15,000 - 20,000 EGP',
      min: 15000,
      max: 20000
    },

    {
      label: '20,000+ EGP',
      min: 20000,
      max: undefined
    }

  ];


  // =====================================================
  // SELECTED PRICE RANGE
  // =====================================================

  selectedPriceRange: {

    min: number;

    max?: number;

  } | null = null;


  // =====================================================
  // SELECT DURATION
  // =====================================================

  selectDuration(

    min: number | undefined,

    max: number | undefined,

    unit: 'hours' | 'days'

  ): void {

    /*
     * If the same duration is clicked again,
     * remove the selection.
     */

    if (

      this.filters.durationMin === min &&

      this.filters.durationMax === max

    ) {

      this.filters.durationMin =
        undefined;

      this.filters.durationMax =
        undefined;

      this.filters.durationUnit =
        undefined;

      return;

    }


    /*
     * Set duration filter
     */

    this.filters.durationMin =
      min;

    this.filters.durationMax =
      max;

    this.filters.durationUnit =
      unit;

  }


  // =====================================================
  // SELECT RATING
  // =====================================================

  selectRating(rating: number): void {

    /*
     * Clicking the selected rating again
     * removes the filter.
     */

    if (this.filters.rating === rating) {

      this.filters.rating =
        undefined;

      return;

    }


    this.filters.rating =
      rating;

  }


  // =====================================================
  // APPLY FILTERS
  // =====================================================

  applyFilters(): void {

    // ---------------------------------------------------
    // PRICE
    // ---------------------------------------------------

    if (this.selectedPriceRange) {

      this.filters.minPrice =
        this.selectedPriceRange.min;

      this.filters.maxPrice =
        this.selectedPriceRange.max;

    } else {

      this.filters.minPrice =
        undefined;

      this.filters.maxPrice =
        undefined;

    }


    // ---------------------------------------------------
    // PAGE
    // ---------------------------------------------------

    this.filters.pageIndex = 1;


    // ---------------------------------------------------
    // EMIT FILTER
    // ---------------------------------------------------

    this.filterChanged.emit({

      ...this.filters

    });


    // ---------------------------------------------------
    // CLOSE MOBILE FILTER
    // ---------------------------------------------------

    if (!this.isDesktop) {

      this.showFilter = false;

    }

  }


  // =====================================================
  // RESET FILTERS
  // =====================================================

  resetFilters(): void {

    this.filters = {

      pageIndex: 1,

      pageSize: 10

    };


    this.selectedPriceRange = null;


    // ---------------------------------------------------
    // EMIT RESET
    // ---------------------------------------------------

    this.filterChanged.emit({

      ...this.filters

    });


    // ---------------------------------------------------
    // CLOSE MOBILE FILTER
    // ---------------------------------------------------

    if (!this.isDesktop) {

      this.showFilter = false;

    }

  }

}
