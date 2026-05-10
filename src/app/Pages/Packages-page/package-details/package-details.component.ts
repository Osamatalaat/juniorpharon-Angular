import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
  standalone: false
})
export class PackageDetailsComponent implements OnInit {

  // 🖼️ Image Viewer
  isViewerOpen = false;
  selectedImageIndex = 0;

  // 📦 Package Details
  packageDetails: any = {
    id: 1,

    name: 'Cairo & Luxor Adventure',

    description:
      'Discover the wonders of ancient Egypt with an unforgettable journey through Cairo, Luxor, temples, museums, Nile cruises, and historical landmarks.',

    durationInDays: 7,

    maxPeople: 20,

    rating: 4.8,

    pricePerPerson: 12500,

    oldPricePerPerson: 15000,

    discountPercentage: 15,

    images: [
      'https://images.unsplash.com/photo-1572252009286-268acec5ca0a',
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020',
      'https://images.unsplash.com/photo-1587135941948-670b381f08ce',
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
    ],

    // 🧳 Included Trips
    trips: [

      {
        id: 1,
        dayOrder: 1,
        title: 'Cairo Pyramids Adventure',
        city: 'Cairo',
        location: 'Giza Pyramids & Egyptian Museum',
        durationInDays: 2,
        rating: 4.8,
        coverImage:
          'https://images.unsplash.com/photo-1568322445389-f64ac2515020'
      },

      {
        id: 2,
        dayOrder: 3,
        title: 'Luxor Historical Tour',
        city: 'Luxor',
        location: 'Karnak & Valley of the Kings',
        durationInDays: 3,
        rating: 4.7,
        coverImage:
          'https://images.unsplash.com/photo-1587135941948-670b381f08ce'
      },

      {
        id: 3,
        dayOrder: 6,
        title: 'Nile Cruise Experience',
        city: 'Aswan',
        location: 'Philae Temple & Nile Cruise',
        durationInDays: 2,
        rating: 4.9,
        coverImage:
          'https://images.unsplash.com/photo-1526772662000-3f88f10405ff'
      }

    ]
  };

  // ⭐ Reviews
  reviews = [
    {
      user: 'Ahmed Ali',
      rating: 5,
      comment:
        'Amazing experience! Everything was perfectly organized.'
    },

    {
      user: 'Sarah Johnson',
      rating: 4.5,
      comment:
        'The Nile cruise and Luxor temples were unforgettable.'
    },

    {
      user: 'Mohamed Hassan',
      rating: 5,
      comment:
        'Highly recommended package for anyone visiting Egypt.'
    }
  ];

  // 📦 Related Packages
  relatedPackages = [

    {
      id: 2,
      name: 'Red Sea Relax Package',
      description:
        'Luxury beaches and diving adventures in Hurghada.',
      durationInDays: 5,
      pricePerPerson: 8900,
      rating: 4.6,
      coverImage:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    },

    {
      id: 3,
      name: 'Siwa Desert Escape',
      description:
        'Desert safari and magical oasis adventure.',
      durationInDays: 4,
      pricePerPerson: 6400,
      rating: 4.9,
      coverImage:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
    },

    {
      id: 4,
      name: 'Aswan & Abu Simbel Tour',
      description:
        'Explore the beauty of Upper Egypt.',
      durationInDays: 6,
      pricePerPerson: 11200,
      rating: 4.7,
      coverImage:
        'https://images.unsplash.com/photo-1526772662000-3f88f10405ff'
    }

  ];

  constructor() {}

  ngOnInit(): void {}

  // ===============================
  // 🖼️ Image Viewer Functions
  // ===============================

  openViewer(index: number) {
    this.selectedImageIndex = index;
    this.isViewerOpen = true;
  }

  closeViewer() {
    this.isViewerOpen = false;
  }

  nextImage() {

    if (
      this.selectedImageIndex <
      this.packageDetails.images.length - 1
    ) {

      this.selectedImageIndex++;

    } else {

      this.selectedImageIndex = 0;

    }
  }

  prevImage() {

    if (this.selectedImageIndex > 0) {

      this.selectedImageIndex--;

    } else {

      this.selectedImageIndex =
        this.packageDetails.images.length - 1;

    }
  }

}
