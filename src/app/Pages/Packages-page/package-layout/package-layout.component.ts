import { Component, OnInit } from '@angular/core';
import { PackageFilter } from '../../../core/models/Search/package-filter';
import { PackagesService } from '../../../core/Services/Packages.service';

@Component({
  selector: 'app-package-layout',
  templateUrl: './package-layout.component.html',
  styleUrls: ['./package-layout.component.css'],
  standalone: false
})
export class PackageLayoutComponent implements OnInit {




  packages = [
  {
    id: 1,
    name: 'Cairo & Luxor Adventure',
    description:
      'Discover ancient Egypt with an unforgettable journey through Cairo, Luxor, and the Nile.',

    durationInDays: 7,
    tripsCount: 4,

    pricePerPerson: 12500,
    oldPricePerPerson: 15000,
    discountPercentage: 15,

    rating: 4.8,

    startDate: new Date('2026-06-10'),
    endDate: new Date('2026-06-17'),

    isActive: true,

    coverImage:
      'https://images.unsplash.com/photo-1572252009286-268acec5ca0a'
  },

  {
    id: 2,
    name: 'Red Sea Relax Package',
    description:
      'Enjoy luxury beaches, diving activities, and stunning sunsets in Hurghada.',

    durationInDays: 5,
    tripsCount: 3,

    pricePerPerson: 8900,
    oldPricePerPerson: 10500,
    discountPercentage: 10,

    rating: 4.6,

    startDate: new Date('2026-07-05'),
    endDate: new Date('2026-07-10'),

    isActive: true,

    coverImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
  },

  {
    id: 3,
    name: 'Siwa Desert Escape',
    description:
      'Experience desert safari, camping, salt lakes, and the magical beauty of Siwa Oasis.',

    durationInDays: 4,
    tripsCount: 2,

    pricePerPerson: 6400,
    oldPricePerPerson: 7800,
    discountPercentage: 18,

    rating: 4.9,

    startDate: new Date('2026-08-01'),
    endDate: new Date('2026-08-05'),

    isActive: true,

    coverImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
  },

  {
    id: 4,
    name: 'Aswan & Abu Simbel Tour',
    description:
      'Explore the beauty of Upper Egypt and visit the iconic Abu Simbel temples.',

    durationInDays: 6,
    tripsCount: 5,

    pricePerPerson: 11200,
    oldPricePerPerson: 13200,
    discountPercentage: 12,

    rating: 4.7,

    startDate: new Date('2026-09-12'),
    endDate: new Date('2026-09-18'),

    isActive: true,

    coverImage:
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff'
  }
];


  loading = false;

  constructor(private packagesService: PackagesService) {}

  ngOnInit(): void {
    this.loadPackages({}); // load all packages initially
  }


 loadPackages(filter: PackageFilter) {
    this.loading = true;
    this.packagesService.searchPackages(filter).subscribe({
      next: (res: any) => {
        this.packages = res.data.data; // assuming backend returns { data: [...] }
        this.loading = false;
        console.log("Packages:", this.packages);
      },
      error: () => this.loading = false
    });
  }


}
