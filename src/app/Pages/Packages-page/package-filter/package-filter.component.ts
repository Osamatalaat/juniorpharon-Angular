import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { PackageFilter } from '../../../core/models/Search/package-filter';

@Component({
  selector: 'app-package-filter',
  templateUrl: './package-filter.component.html',
  styleUrls: ['./package-filter.component.css'],
  standalone: false
})
export class PackageFilterComponent {

@Output() filterChanged  = new EventEmitter<PackageFilter>();

  filters: PackageFilter = {
    peopleCount: 1,
    pageIndex: 1,
    pageSize: 10
  };

  // ⏳ Duration Options
  durationOptions = [3, 5, 7, 10, 14];

  // 🗺 Trips Count Options
  tripsOptions = [1, 3, 5, 7, 10];

  // 👥 People Count
  peopleOptions = [1, 2, 3, 4, 5, 10];

  // ⭐ Rating
  ratingOptions = [5, 4, 3];

  // 💰 Price Ranges
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

  selectedPriceRange: any;

  // 🔎 Apply Filter
  applyFilters(): void {

    if (this.selectedPriceRange) {

      this.filters.minPrice =
        this.selectedPriceRange.min;

      this.filters.maxPrice =
        this.selectedPriceRange.max;
    }

    this.filters.pageIndex = 1;

    this.filterChanged.emit(this.filters);
  }

  // ♻ Reset
  resetFilters(): void {

    this.filters = {
      peopleCount: 1,
      pageIndex: 1,
      pageSize: 10
    };

    this.selectedPriceRange = null;

    this.filterChanged.emit(this.filters);
  }
}
