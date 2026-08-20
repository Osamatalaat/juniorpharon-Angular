import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-activity',
  templateUrl: './trip-activity.component.html',
  styleUrls: ['./trip-activity.component.css'],
  standalone: false
})
export class TripActivityComponent implements OnInit {

  // =====================================================
  // All Trips
  // =====================================================

  allTrips: any[] = [

    {
      id: 1,
      name: 'Nile Cruise Aswan to Luxor',

      description:
        'Enjoy an unforgettable Nile cruise between Aswan and Luxor and discover the ancient temples of Upper Egypt.',

      destination: 'aswan',

      activities: [
        'nile-cruises',
        'sightseeing'
      ],

      durationInDays: 4,

      pricePerPerson: 8500,

      rating: 4.9,

      coverImage:
        'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e'
    },

    {
      id: 2,
      name: 'Luxury Nile Cruise Experience',

      description:
        'Experience the Nile in luxury with beautiful views, comfortable accommodation and guided sightseeing.',

      destination: 'luxor',

      activities: [
        'nile-cruises'
      ],

      durationInDays: 5,

      pricePerPerson: 12000,

      rating: 4.8,

      coverImage:
        'https://images.unsplash.com/photo-1568322445389-f64ac2515020'
    },

    {
      id: 3,
      name: 'Luxor Hot Air Balloon',

      description:
        'Watch the sunrise over the ancient temples and monuments of Luxor from a hot air balloon.',

      destination: 'luxor',

      activities: [
        'hot-air-balloon'
      ],

      durationInDays: 1,

      pricePerPerson: 3500,

      rating: 4.9,

      coverImage:
        'https://images.unsplash.com/photo-1528181304800-259b08848526'
    },

    {
      id: 4,
      name: 'Desert Safari & Camel Riding',

      description:
        'Explore the Egyptian desert, enjoy an exciting safari and experience traditional camel riding.',

      destination: 'hurghada',

      activities: [
        'desert-safari',
        'camel-riding'
      ],

      durationInDays: 1,

      pricePerPerson: 1800,

      rating: 4.7,

      coverImage:
        'https://images.unsplash.com/photo-1548013146-72479768bada'
    },

    {
      id: 5,
      name: 'Red Sea Snorkeling Adventure',

      description:
        'Discover the amazing underwater world of the Red Sea with a full-day snorkeling adventure.',

      destination: 'hurghada',

      activities: [
        'snorkeling'
      ],

      durationInDays: 1,

      pricePerPerson: 2200,

      rating: 4.8,

      coverImage:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5'
    },

    {
      id: 6,
      name: 'Cairo Dinner Cruise',

      description:
        'Enjoy an elegant evening on the Nile with dinner, entertainment and spectacular views of Cairo.',

      destination: 'cairo',

      activities: [
        'dinner-cruise'
      ],

      durationInDays: 1,

      pricePerPerson: 2500,

      rating: 4.6,

      coverImage:
        'https://images.unsplash.com/photo-1531058020387-3be344556be6'
    },

    {
      id: 7,
      name: 'Philae Sound & Light Show',

      description:
        'Experience the magical Sound and Light Show at Philae Temple in Aswan.',

      destination: 'aswan',

      activities: [
        'sound-light-show'
      ],

      durationInDays: 1,

      pricePerPerson: 1600,

      rating: 4.7,

      coverImage:
        'https://images.unsplash.com/photo-1553913861-c0fddf2619ee'
    }

  ];


  // =====================================================
  // Filtered Trips
  // =====================================================

  trips: any[] = [];


  // =====================================================
  // Activity Information
  // =====================================================

  activitySlug = '';

  activityTitle = '';

  activityDescription = '';


  // =====================================================
  // Loading
  // =====================================================

  loading = false;


  constructor(
    private route: ActivatedRoute
  ) {}


  // =====================================================
  // On Init
  // =====================================================

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('slug');

      if (!slug) {
        return;
      }

      this.activitySlug = slug.toLowerCase();

      this.loadTripsByActivity(this.activitySlug);

    });

  }


  // =====================================================
  // Filter Trips By Activity
  // =====================================================

  private loadTripsByActivity(slug: string): void {

    this.loading = true;


    this.trips = this.allTrips.filter(trip =>
      trip.activities?.includes(slug)
    );


    this.setActivityInformation(slug);


    this.loading = false;

  }


  // =====================================================
  // Activity Information
  // =====================================================

  private setActivityInformation(slug: string): void {

    const activities: any = {

      'nile-cruises': {
        title: 'Nile Cruises',
        description:
          'Experience the beauty of Egypt from the Nile and discover ancient temples, breathtaking landscapes and unforgettable moments.'
      },

      'hot-air-balloon': {
        title: 'Hot Air Balloon',
        description:
          'Enjoy breathtaking sunrise views over the ancient monuments and landscapes of Luxor from above.'
      },

      'camel-riding': {
        title: 'Camel Riding',
        description:
          'Experience the Egyptian desert on a traditional camel ride and discover the beauty of the desert.'
      },

      'desert-safari': {
        title: 'Desert Safari',
        description:
          'Explore the Egyptian desert through exciting safari adventures, beautiful landscapes and unforgettable experiences.'
      },

      'snorkeling': {
        title: 'Snorkeling',
        description:
          'Discover the colorful marine life and crystal-clear waters of the Red Sea.'
      },

      'scuba-diving': {
        title: 'Scuba Diving',
        description:
          'Explore the amazing underwater world of the Red Sea and discover its beautiful coral reefs.'
      },

      'dinner-cruise': {
        title: 'Dinner Cruise',
        description:
          'Enjoy a memorable evening on the Nile with delicious dinner, entertainment and beautiful views.'
      },

      'sound-light-show': {
        title: 'Sound & Light Show',
        description:
          'Experience the history of ancient Egypt through spectacular sound and light shows at Egypt’s iconic landmarks.'
      }

    };


    const activity = activities[slug];


    if (activity) {

      this.activityTitle = activity.title;

      this.activityDescription = activity.description;

    }

    else {

      this.activityTitle = this.formatTitle(slug);

      this.activityDescription =
        `Discover our available trips and experiences for ${this.activityTitle}.`;

    }

  }


  // =====================================================
  // Format Slug
  // =====================================================

  private formatTitle(value: string): string {

    return value
      .split('-')
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(' ');

  }

}
