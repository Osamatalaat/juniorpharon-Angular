import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { TRIPS } from '../../../core/data/trips';

import { PACKAGES } from '../../../core/data/packages';

import { Trip } from '../../../core/models/trip.model';

import { Package } from '../../../core/models/package.model';

@Component({
  selector: 'app-day-tours-layout',

  templateUrl: './day-tours-layout.component.html',

  styleUrls: ['./day-tours-layout.component.css'],

  standalone: false,
})
export class DayToursLayoutComponent implements OnInit {
  // ============================
  // ORIGINAL DATA
  // ============================

  readonly trips: Trip[] = TRIPS;

  readonly packages: Package[] = PACKAGES;

  // ============================
  // FILTERED DATA
  // ============================

  filteredTrips: Trip[] = [];

  filteredPackages: Package[] = [];

  // ============================
  // ACTIVE DESTINATION
  // ============================

  selectedDestination = 'all';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const destination = params.get('destination');

      this.applyFilter(destination ?? 'all');
    });
  }

  // ============================
  // FROM DESTINATION FILTER
  // ============================

  onDestinationChange(slug: string) {
    this.applyFilter(slug);
  }

  // ============================
  // FILTER LOGIC
  // ============================

  private applyFilter(slug: string) {
    this.selectedDestination = slug;

    // ============================
    // ALL
    // ============================

    if (slug === 'all') {
      this.filteredTrips = this.trips;

      this.filteredPackages = this.packages;

      return;
    }

    // ============================
    // TRIPS
    // ============================

    this.filteredTrips = this.trips.filter(
      (trip) => trip.destination.slug === slug,
    );

    // ============================
    // PACKAGES
    // ============================

    this.filteredPackages = this.packages.filter(
      (pack) => pack.destination.slug === slug,
    );
  }

  // ============================
  // TRACK BY
  // ============================

  trackById(
    index: number,

    item: Trip | Package,
  ) {
    return item.id;
  }
}
