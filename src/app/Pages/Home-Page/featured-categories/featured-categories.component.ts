import { Component } from '@angular/core';
import { PACKAGES } from '../../../core/data/packages';

@Component({
  selector: 'app-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.css'],
  standalone: false
})
export class FeaturedCategoriesComponent {


  // =====================================================
  // PACKAGES
  // =====================================================
  // Single source of truth
  // All package data comes from packages.ts
  // =====================================================

  packages = PACKAGES;


  // =====================================================
  // PACKAGE CATEGORIES
  // =====================================================
  // These are only display/configuration data.
  // The actual packages come from PACKAGES.
  // =====================================================

  categories = [

    {
      title: 'Classic Egypt Tours',

      type: 'Classic',

      image: 'assets/images/packages/1.jpg',

      link: '/packages/category/classic'
    },


    {
      title: 'Luxury Egypt Tours',

      type: 'Luxury',

      image: 'assets/images/packages/2.jpg',

      link: '/packages/category/luxury'
    },


    {
      title: 'Family Holidays',

      type: 'Family',

      image: 'assets/images/packages/3.jpg',

      link: '/packages/category/family'
    },


    {
      title: 'Solo Traveller Packages',

      type: 'Solo',

      image: 'assets/images/packages/4.jpg',

      link: '/packages/category/solo'
    },


    {
      title: 'Honeymoon Packages',

      type: 'Honeymoon',

      image: 'assets/images/packages/2.jpg',

      link: '/packages/category/honeymoon'
    },


    {
      title: 'Seasonal Tours',

      type: 'Seasonal',

      image: 'assets/images/packages/3.jpg',

      link: '/packages/category/seasonal'
    }

  ];


  // =====================================================
  // GET PACKAGES BY TYPE
  // =====================================================
  // Example:
  //
  // getPackagesByType('Family')
  //
  // returns all packages that contain:
  //
  // type: ['Family', ...]
  //
  // =====================================================

  getPackagesByType(type: string) {

    return this.packages.filter(pkg =>

      pkg.type.some(

        packageType =>

          packageType.toLowerCase() ===
          type.toLowerCase()

      )

    );

  }


  // =====================================================
  // GET PACKAGE COUNT BY TYPE
  // =====================================================
  // Useful if you want to show:
  //
  // Family Holidays
  // 5 Packages
  //
  // =====================================================

  getPackageCount(type: string): number {

    return this.getPackagesByType(type).length;

  }


  // =====================================================
  // HIGHLIGHTS
  // =====================================================
  // These are NOT Packages.
  //
  // They are promotional sections:
  // - Nile Cruises
  // - Day Tours
  // - Destinations
  //
  // So we keep them separate from PACKAGES.
  // =====================================================

  highlights = [

    {
      title: 'Luxury Nile Cruises',

      image: 'assets/images/highlights/3.jpg',

      description:
        'Sail the legendary Nile River aboard luxury cruises with unforgettable experiences.',

      button: 'Explore Nile Cruises',

      link: 'trips/category/nile-cruises'
    },


    {
      title: 'Egypt Day Tours',

      image: 'assets/images/highlights/1.jpg',

      description:
        'Private day tours across Cairo, Luxor, Aswan, Alexandria and the Red Sea.',

      button: 'Explore Day Tours',

      link: '/day-tours'
    },


    {
      title: 'Top Destinations',

      image: 'assets/images/highlights/2.jpg',

      description:
        'Explore Egypt’s most beautiful destinations with our expert local guides.',

      button: 'Explore Destinations',

      link: '/map'
    }

  ];

}
