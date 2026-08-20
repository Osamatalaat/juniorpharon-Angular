import { Package } from '../models/package.model';

export const PACKAGES: Package[] = [

  {
    // =====================================================
    // BASIC INFO
    // =====================================================

    id: 1,

    title: 'Cairo Family Holiday',

    slug: 'cairo-family-holiday',

    destination: {
      id: 1,
      name: 'Cairo',
      slug: 'cairo'
    },

    type: [
      'Family',
      'Holiday',
      'Cultural',
      'Private Tour'
    ],


    // =====================================================
    // DURATION
    // =====================================================

    duration: {
      value: 4,
      unit: 'days',
      text: '4 Days / 3 Nights'
    },


    // =====================================================
    // PRICING
    // =====================================================

    // Price is not provided in the source data.
    price: 0,

    // No original/old price was provided.
    oldPrice: undefined,


    // =====================================================
    // RATING
    // =====================================================

    // No rating was provided in the source data.
    rating: 0,

    reviews: 0,


    // =====================================================
    // IMAGES
    // =====================================================

    // Images will be added later.
    coverImage: '',

    images: [],


    // =====================================================
    // DESCRIPTIONS
    // =====================================================

    shortDescription:
      'Enjoy an exciting 4 Days / 3 Nights family holiday in Cairo, where ancient history meets modern comfort. Discover the legendary Pyramids of Giza, fascinating museums, colorful bazaars, and family-friendly attractions while enjoying a relaxed itinerary designed for travelers of all ages.',

    description:
      'Discover Cairo’s world-famous attractions on a comfortable family vacation designed to balance sightseeing and leisure. Explore the legendary pyramids, learn about Ancient Egypt through engaging guided tours, and enjoy plenty of free time to relax with your family.',


    // =====================================================
    // WHY YOU'LL LOVE THIS JOURNEY
    // =====================================================

    highlights: [

      'Perfect family-friendly itinerary with a relaxed pace',

      'Visit Egypt\'s most famous landmarks',

      'Private family tours with an experienced Egyptologist Guide',

      'Comfortable accommodation in a 5-Star hotel',

      'Flexible sightseeing with optional family activities',

      'Ideal for families with children'

    ],


    // =====================================================
    // ITINERARY
    // =====================================================

    itinerary: [

      {
        day: 1,

        title: 'Arrival in Cairo',

        description:
          'Meet & assist upon arrival at Cairo International Airport. Transfer to your hotel. Enjoy the remainder of the day at leisure.',

        overnight: 'Cairo'
      },

      {
        day: 2,

        title: 'Giza Pyramids Tour',

        description:
          'Visit the Great Pyramid of Khufu, Pyramid of Khafre, Pyramid of Menkaure, Great Sphinx, and Valley Temple.',

        activities: [
          'Great Pyramid of Khufu',
          'Pyramid of Khafre',
          'Pyramid of Menkaure',
          'Great Sphinx',
          'Valley Temple'
        ],

        overnight: 'Cairo'
      },

      {
        day: 3,

        title: 'Cairo City Tour',

        description:
          'Visit the Egyptian Museum and Khan El Khalili Bazaar. Enjoy the remainder of the day at leisure.',

        activities: [
          'Egyptian Museum',
          'Khan El Khalili Bazaar'
        ],

        overnight: 'Cairo'
      },

      {
        day: 4,

        title: 'Departure',

        description:
          'After breakfast, transfer to Cairo International Airport for your departure flight.'
      }

    ],


    // =====================================================
    // OPTIONAL TOURS
    // =====================================================

    optionalTours: [

      {
        destination: 'Cairo',

        activities: [
          'Grand Egyptian Museum (GEM)',
          'Old Cairo',
          'Nile Dinner Cruise'
        ]
      }

    ],


    // =====================================================
    // PACKAGE INCLUDES
    // =====================================================

    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a 5-Star hotel in Cairo',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Professional English-speaking Egyptologist Guide',

      'Private guided sightseeing tours as mentioned in the itinerary',

      'Airport transfers',

      'Bottled mineral water during sightseeing',

      'All Taxes & Service Charges'

    ],


    // =====================================================
    // PACKAGE EXCLUDES
    // =====================================================

    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees to all monuments, temples, museums, and archaeological sites',

      'Meals not mentioned in the itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],


    // =====================================================
    // ENTRANCE FEE POLICY
    // =====================================================

    entranceFeePolicy:
      'Entrance fees are not included in any of our tour packages. We do not charge site entrance fees in advance, giving you the flexibility to customize your experience according to your interests. You can choose the sites you would like to visit and pay the entrance fees directly during your tour.',


    // =====================================================
    // GOOD TO KNOW
    // =====================================================

    goodToKnow: [

      'Family-friendly itinerary with a relaxed pace',

      'Private transportation throughout the tour',

      'Professional English-speaking Egyptologist Guide',

      'Accommodation in a 5-Star hotel in Cairo',

      'Optional tours are available',

      'Entrance fees are paid directly during the tour'

    ],


    // =====================================================
    // RELATED PACKAGES
    // =====================================================

    relatedPackagesIds: []

  }

];
