import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

import { TripFilter } from '../../../core/models/Search/trip-filter';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css'],
  standalone: false
})
export class FilterSidebarComponent implements OnInit {

  @Output() filterApplied =
    new EventEmitter<TripFilter>();


  // =====================================================
  // MOBILE
  // =====================================================

  showFilter = false;

  isDesktop = false;


  // =====================================================
  // PRICE
  // =====================================================

  minPrice = 0;

  maxPrice = 1000;


  // =====================================================
  // DURATION
  // =====================================================

  durationMin?: number;

  durationMax?: number;

  durationUnit?: 'hours' | 'days';


  // =====================================================
  // RATING
  // =====================================================

  rating?: number;


  // =====================================================
  // SORT
  // =====================================================

  descending = false;


  // =====================================================
  // LOCATION / CITIES
  // =====================================================

  countries = [
    {
      name: 'Egypt',
      value: 'egypt',
      cities: [
        'Cairo',
        'Giza',
        'Luxor',
        'Aswan',
        'Alexandria',
        'Hurghada',
        'Sharm El Sheikh'
      ]
    },

    {
      name: 'Saudi Arabia',
      value: 'saudi',
      cities: [
        'Riyadh',
        'Jeddah',
        'Makkah',
        'Madinah'
      ]
    },

    {
      name: 'UAE',
      value: 'uae',
      cities: [
        'Dubai',
        'Abu Dhabi',
        'Sharjah'
      ]
    }
  ];


  selectedCountry = '';

  cities: string[] = [];

  selectedCities: string[] = [];


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    this.checkScreenWidth();

  }


  // =====================================================
  // COUNTRY
  // =====================================================

  onCountryChange(): void {

    const country = this.countries.find(
      x => x.value === this.selectedCountry
    );

    this.cities =
      country?.cities || [];

    this.selectedCities = [];

  }


  // =====================================================
  // CITY
  // =====================================================

  toggleCity(
    city: string,
    event: Event
  ): void {

    const checked =
      (event.target as HTMLInputElement).checked;


    if (checked) {

      if (!this.selectedCities.includes(city)) {

        this.selectedCities.push(city);

      }

    } else {

      this.selectedCities =
        this.selectedCities.filter(
          x => x !== city
        );

    }

  }


  // =====================================================
  // SCREEN
  // =====================================================

  checkScreenWidth(): void {

    if (typeof window !== 'undefined') {

      this.isDesktop =
        window.innerWidth >= 768;

    } else {

      this.isDesktop = true;

    }

  }


  // =====================================================
  // MOBILE FILTER
  // =====================================================

  toggleFilter(): void {

    this.showFilter =
      !this.showFilter;

  }


  // =====================================================
  // PRICE
  // =====================================================

  minPriceChanged(): void {

    if (this.minPrice > this.maxPrice) {

      this.minPrice =
        this.maxPrice;

    }

  }


  maxPriceChanged(): void {

    if (this.maxPrice < this.minPrice) {

      this.maxPrice =
        this.minPrice;

    }

  }


  // =====================================================
  // DURATION
  // =====================================================

  selectDuration(
    min: number | undefined,
    max: number | undefined,
    unit: 'hours' | 'days'
  ): void {

    this.durationMin = min;

    this.durationMax = max;

    this.durationUnit = unit;

  }


  // =====================================================
  // RATING
  // =====================================================

  selectRating(
    rating: number
  ): void {

    if (this.rating === rating) {

      this.rating = undefined;

    } else {

      this.rating = rating;

    }

  }


  // =====================================================
  // APPLY
  // =====================================================

  applyFilter(): void {

    const filter: TripFilter = {

      city:
        this.selectedCities.length
          ? [...this.selectedCities]
          : undefined,

      minPrice:
        this.minPrice,

      maxPrice:
        this.maxPrice,

      durationMin:
        this.durationMin,

      durationMax:
        this.durationMax,

      durationUnit:
        this.durationUnit,

      rating:
        this.rating,

      descending:
        this.descending,

      pageIndex: 1

    };


    this.filterApplied.emit(filter);


    if (!this.isDesktop) {

      this.showFilter = false;

    }

  }


  // =====================================================
  // RESET
  // =====================================================

  resetFilters(): void {

    this.selectedCountry = '';

    this.cities = [];

    this.selectedCities = [];

    this.minPrice = 0;

    this.maxPrice = 1000;

    this.durationMin = undefined;

    this.durationMax = undefined;

    this.durationUnit = undefined;

    this.rating = undefined;

    this.descending = false;


    this.applyFilter();

  }

}
