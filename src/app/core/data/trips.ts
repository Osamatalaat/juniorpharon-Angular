import { Trip } from '../models/trip.model';

export const TRIPS: Trip[] = [

  // =====================================================
  // 1. Philae Temple, High Dam & Unfinished Obelisk
  // =====================================================

  {
    id: 1,

    title: 'Philae Temple, High Dam & Unfinished Obelisk Tour',

    slug: 'philae-high-dam-unfinished-obelisk-tour',

    destination: {
      id: 1,
      name: 'Aswan',
      slug: 'aswan'
    },

    type: [
      'sightseeing',
      'historical',
      'philae-temple'
    ],

    duration: {
      value: 5,
      unit: 'hours',
      text: 'Approximately 4–5 Hours'
    },

    // السعر غير موجود في البيانات الأصلية
    price: 90,
    oldPrice : 55,

    rating: 0,

    coverImage: 'assets/images/trips/philae-main.jpg',

images: [
  'assets/images/trips/philae-main.jpg',
  'assets/images/trips/philae-1.jpg',
  'assets/images/trips/philae-2.jpg',
  'assets/images/trips/philae-3.jpg',
  'assets/images/trips/philae-4.jpg'
],

    shortDescription:
      'Explore the highlights of Aswan on an unforgettable day tour to the magnificent Philae Temple, the impressive High Dam, and the ancient Unfinished Obelisk.',

    highlights: [
      'Visit the spectacular Philae Temple on Agilkia Island',
      'Enjoy a scenic motorboat ride across the Nile River',
      'Discover the remarkable story of the High Dam',
      'Explore the ancient granite quarries',
      'Stand beside the enormous Unfinished Obelisk',
      'Professional Egyptologist guide',
      'Comfortable air-conditioned transportation',
      'Hotel pickup and drop-off'
    ],

    itinerary: [

      {
        title: 'Hotel Pickup',
        description:
          'Your guide will meet you at your hotel, Nile cruise, airport, or any preferred location in Aswan before beginning your sightseeing adventure.'
      },

      {
        title: 'Visit Aswan High Dam',
        description:
          'Visit the iconic Aswan High Dam and enjoy panoramic views of Lake Nasser while learning how this engineering masterpiece transformed modern Egypt.'
      },

      {
        title: 'Explore the Unfinished Obelisk',
        description:
          'Visit the ancient granite quarries and discover the story behind the largest obelisk ever attempted by the ancient Egyptians.'
      },

      {
        title: 'Discover Philae Temple',
        description:
          'Board a motorboat to Agilkia Island and explore the magnificent Temple of Isis with its halls, columns, sanctuary and detailed carvings.'
      },

      {
        title: 'Return to Your Hotel',
        description:
          'Enjoy another relaxing boat ride back to the mainland before returning comfortably to your hotel or Nile cruise in Aswan.'
      }

    ],

    includes: [
      'Hotel pickup and drop-off in Aswan',
      'Air-conditioned private vehicle',
      'Professional Egyptologist tour guide',
      'Motorboat to Philae Temple',
      'Bottled mineral water',
      'All service charges and taxes'
    ],

    excludes: [
      'Entrance fees',
      'Personal expenses',
      'Tipping'
    ],

    whatToBring: [
      'Passport or ID',
      'Comfortable walking shoes',
      'Sunglasses',
      'Hat',
      'Sunscreen',
      'Camera',
      'Cash for entrance fees and personal purchases'
    ],

    goodToKnow: [
      'Duration: Approximately 4–5 hours',
      'Available daily',
      'Suitable for families, couples, solo travelers and seniors',
      'Wheelchair accessibility may be limited at some archaeological sites',
      'Early morning departure is recommended during summer'
    ],

    faqs: [
      {
        question: 'Is this tour suitable for children?',
        answer:
          'Yes. The tour is family-friendly and suitable for visitors of all ages.'
      },

      {
        question: 'How long is the boat ride to Philae Temple?',
        answer:
          'The motorboat ride takes approximately 10 minutes each way.'
      },

      {
        question: 'Are entrance tickets included?',
        answer:
          'No. Entrance fees are paid separately unless you choose a package that includes them.'
      },

      {
        question: 'Can I customize this tour?',
        answer:
          'Absolutely. Private tours can be tailored to your schedule and interests.'
      }
    ]
  },


  // =====================================================
  // 2. Abu Simbel Tour by Road
  // =====================================================

  {
    id: 2,

    title: 'Abu Simbel Day Trip from Aswan',

    slug: 'abu-simbel-day-trip-from-aswan',

    destination: {
      id: 2,
      name: 'Abu Simbel',
      slug: 'abu-simbel'
    },

    type: [
      'sightseeing',
      'historical',
      'abu-simbel'
    ],

    duration: {
      value: 9,
      unit: 'hours',
      text: 'Approximately 9 Hours'
    },

    // السعر غير موجود في البيانات الأصلية
    price: 0,
    oldPrice : 55,

    rating: 0,

    coverImage: 'assets/images/trips/philae-main.jpg',

images: [
  'assets/images/trips/philae-main.jpg',
  'assets/images/trips/philae-1.jpg',
  'assets/images/trips/philae-2.jpg',
  'assets/images/trips/philae-3.jpg',
  'assets/images/trips/philae-4.jpg'
],

    shortDescription:
      'Travel from Aswan to Abu Simbel and discover the magnificent temples of Ramses II and Queen Nefertari with a professional Egyptologist guide.',

    highlights: [
      'Visit the Abu Simbel Temples',
      'Explore the Great Temple of Ramses II',
      'Discover the Temple of Queen Nefertari',
      'Learn about the UNESCO relocation project',
      'Private Egyptologist guide',
      'Comfortable transportation',
      'Family-friendly experience',
      'Outstanding photography opportunities'
    ],

    itinerary: [

      {
        title: 'Early Morning Departure',
        description:
          'Leave Aswan early in the morning and travel comfortably through the Nubian Desert toward Abu Simbel.'
      },

      {
        title: 'Explore Abu Simbel',
        description:
          'Explore the magnificent temples of Ramses II and Queen Nefertari and learn about their historical and architectural significance.'
      },

      {
        title: 'Free Time',
        description:
          'Enjoy time to photograph the temples, visit the visitor center and admire the breathtaking views overlooking Lake Nasser.'
      },

      {
        title: 'Return to Aswan',
        description:
          'After completing your visit, travel back to Aswan and transfer to your hotel or Nile cruise.'
      }

    ],

    includes: [
      'Hotel or Nile Cruise pickup and drop-off',
      'Private air-conditioned transportation',
      'Professional Egyptologist guide',
      'Bottled mineral water',
      'All taxes and service charges'
    ],

    excludes: [
      'Entrance fees',
      'Lunch',
      'Personal expenses',
      'Optional gratuities'
    ],

    whatToBring: [
      'Passport',
      'Comfortable walking shoes',
      'Sunglasses',
      'Hat',
      'Sunscreen',
      'Camera',
      'Cash for entrance fees and souvenirs'
    ],

    goodToKnow: [
      'Duration: Approximately 9 Hours',
      'Departure time: Early morning',
      'Tour Type: Private',
      'Daily availability',
      'Family-friendly experience',
      'Moderate walking required',
      'Photography is allowed throughout most of the site'
    ]
  },


  // =====================================================
  // 3. Nubian Village Tour
  // =====================================================

  {
    id: 3,

    title: 'Nubian Village Tour in Aswan by Boat',

    slug: 'nubian-village-tour-aswan',

    destination: {
      id: 1,
      name: 'Aswan',
      slug: 'aswan'
    },

    type: [
      'nile-cruises',
      'nubian-village',
      'cultural',
      'boat-trip'
    ],

    duration: {
      value: 1,
      unit: 'days',
      text: 'Nubian Village Experience'
    },

    // السعر غير موجود في البيانات الأصلية
    price: 0,
    oldPrice : 555,

    rating: 4.5,

    coverImage: 'assets/images/trips/philae-main.jpg',

images: [
  'assets/images/trips/philae-main.jpg',
  'assets/images/trips/philae-1.jpg',
  'assets/images/trips/philae-2.jpg',
  'assets/images/trips/philae-3.jpg',
  'assets/images/trips/philae-4.jpg'
],

    shortDescription:
      'Experience the colorful culture of Aswan on a private tour to a traditional Nubian Village by motorboat.',

    highlights: [
      'Scenic motorboat ride on the Nile River',
      'Visit an authentic Nubian Village',
      'Meet local Nubian families',
      'Explore colorful traditional houses',
      'Learn about Nubian history and culture',
      'Enjoy traditional Nubian hospitality',
      'Excellent photography opportunities',
      'Hotel or Nile Cruise pickup and drop-off'
    ],

    itinerary: [

      {
        title: 'Hotel Pickup',
        description:
          'Your guide will meet you at your hotel or Nile cruise in Aswan before transferring you to the marina.'
      },

      {
        title: 'Nile Boat Ride',
        description:
          'Cruise along the Nile and admire Aswan islands, palm groves, granite boulders and traditional feluccas.'
      },

      {
        title: 'Arrival at the Nubian Village',
        description:
          'Explore the colorful streets of the village, local handicrafts, spices, handmade jewelry and traditional souvenirs.'
      },

      {
        title: 'Visit a Traditional Nubian Home',
        description:
          'Meet a local Nubian family, learn about their traditions and enjoy traditional Nubian hospitality.'
      }

    ],

    includes: [
      'Hotel or Nile Cruise pickup and drop-off',
      'Motorboat transportation',
      'Professional guide',
      'Nubian Village visit'
    ],

    excludes: [
      'Personal expenses',
      'Optional gratuities'
    ],

    whatToBring: [
      'Comfortable walking shoes',
      'Sunglasses',
      'Hat',
      'Sunscreen',
      'Camera'
    ],

    goodToKnow: [
      'Cultural experience',
      'Suitable for families and couples',
      'Private tour available',
      'Relaxing boat ride',
      'Excellent photography opportunities'
    ]
  }

];
