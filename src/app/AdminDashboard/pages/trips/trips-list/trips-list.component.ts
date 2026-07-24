import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../../core/models/Details/Trip';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css'],
  standalone: false
})
export class TripsListComponent implements OnInit {

  page = 1;
  pageSize = 1;

  trips: Trip[] = [];
  filteredTrips: Trip[] = [];

  ngOnInit(): void {

    this.trips = [
      {
        id: 1,
        title: 'Philae Temple Tour',
        description: 'Amazing trip',
        location: 'Philae Temple',
        city: 'Aswan',
        durationInDays: 2,
        createdBy: 'Admin',
        createdAt: '2026-07-10',
        price: 1500,
        oldPrice: 1800,
        rating: 4.8,
        coverImage: 'https://picsum.photos/100/100?1'
      },
      {
        id: 2,
        title: 'Abu Simbel',
        description: 'Amazing trip',
        location: 'Abu Simbel',
        city: 'Aswan',
        durationInDays: 1,
        createdBy: 'Admin',
        createdAt: '2026-07-11',
        price: 2500,
        oldPrice: 3000,
        rating: 5,
        coverImage: 'https://picsum.photos/100/100?2'
      },
      {
        id: 3,
        title: 'Cairo City Tour',
        description: 'Amazing trip',
        location: 'Cairo City Tour',
        city: 'Cairo',
        durationInDays: 3,
        createdBy: 'Admin',
        createdAt: '2026-07-12',
        price: 2000,
        oldPrice: 2500,
        rating: 4.5,
        coverImage: 'https://picsum.photos/100/100?3'
      },
      {
        id: 4,
        title: 'Luxor Temple Tour',
        description: 'Amazing trip',
        location: 'Luxor Temple',
        city: 'Luxor',
        durationInDays: 2,
        createdBy: 'Admin',
        createdAt: '2026-07-13',
        price: 1800,
        oldPrice: 2200,
        rating: 4.7,
        coverImage: 'https://picsum.photos/100/100?4'
      }
    ];

    this.filteredTrips = [...this.trips];
  }

  onFilterChanged(filter: any): void {

    this.page = 1;

    this.filteredTrips = this.trips.filter(t => {

      const search =
        !filter.search ||
        t.location.toLowerCase().includes(filter.search.toLowerCase()) ||
        t.city.toLowerCase().includes(filter.search.toLowerCase());

      const city =
        filter.cities.length === 0 ||
        filter.cities.includes(t.city);

      const rating =
        filter.ratings.length === 0 ||
        filter.ratings.some((r: number) => (t.rating ?? 0) >= r);

      const duration =
        filter.durations.length === 0 ||
        filter.durations.some((d: string) => {

          if (d === '1-3')
            return t.durationInDays <= 3;

          if (d === '4-7')
            return t.durationInDays >= 4 && t.durationInDays <= 7;

          return t.durationInDays >= 8;

        });

      return search && city && rating && duration;

    });

  }

  get pagedTrips(): Trip[] {

    const start = (this.page - 1) * this.pageSize;

    return this.filteredTrips.slice(start, start + this.pageSize);

  }

  get totalPages(): number {

    return Math.ceil(this.filteredTrips.length / this.pageSize);

  }
  get endItem(): number {
  return Math.min(this.page * this.pageSize, this.filteredTrips.length);
}

  nextPage(): void {

    if (this.page < this.totalPages) {
      this.page++;
    }

  }

  previousPage(): void {

    if (this.page > 1) {
      this.page--;
    }

  }

  get pages(): number[] {
  const total = this.totalPages;
  const current = this.page;
  const delta = 1; // how many pages to show around current
  const range: number[] = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    } else if (range[range.length - 1] !== -1) {
      range.push(-1); // ellipsis marker
    }
  }
  return range;
}

goToPage(page: number): void {

  if (page < 1 || page > this.totalPages) {
    return;
  }

  this.page = page;

}

delete(id: number): void {

  if (!confirm('Delete this trip?')) return;

  this.trips = this.trips.filter(x => x.id !== id);
  this.filteredTrips = this.filteredTrips.filter(x => x.id !== id);

  if (this.page > this.totalPages) {
    this.page = this.totalPages || 1;
  }

}

}
