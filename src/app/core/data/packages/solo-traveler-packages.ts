import { Package } from "../../models/package.model";

export const SOLO_TRAVELER_PACKAGES: Package[] = [

  // =====================================================
  // 1. Solo Cairo Discovery
  // =====================================================

  {

    id: 4001,

    category: 'solo',

    title: 'Solo Cairo Discovery',

    slug: 'solo-cairo-discovery',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Solo Traveler',

      'Cultural',

      'Historical',

      'Private Tour'

    ],


    duration: {

      value: 4,

      unit: 'days',

      text: '4 Days / 3 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'Experience Cairo at your own pace on a 4 Days / 3 Nights solo adventure exploring the legendary Pyramids of Giza, Egyptian Museum, and historic Cairo.',



    description:

      'Discover the vibrant capital of Egypt through a solo journey designed for comfort and flexibility. Enjoy private transportation, expert guidance, and carefully planned sightseeing while having the freedom to explore Cairo at your own pace.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Valley Temple',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Private Egyptologist Guide',

      '5-Star Hotel Accommodation'

    ],
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



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees to all monuments, temples, museums, and archaeological sites',

      'Meals not mentioned in the itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in any of our tour packages. Guests can choose the sites they would like to visit and pay the entrance fees directly during their tour.',



    goodToKnow: [

      'Perfect itinerary for solo travelers',

      'Private Egyptologist Guide',

      'Flexible schedule with free time',

      'Safe and comfortable travel experience',

      'Ideal for first-time visitors to Egypt'

    ],



    relatedPackagesIds: [

      4002,

      4004,

      4005,

      4006

    ]

  },



  // =====================================================
  // 2. Solo Egypt Explorer
  // =====================================================

  {

    id: 4002,

    category: 'solo',

    title: 'Solo Egypt Explorer',

    slug: 'solo-egypt-explorer',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Solo Traveler',

      'Cultural',

      'Historical',

      'Private Tour'

    ],


    duration: {

      value: 6,

      unit: 'days',

      text: '6 Days / 5 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'Experience Egypt on your own terms with a 6 Days / 5 Nights solo journey combining Cairo’s iconic landmarks with the magnificent temples and royal tombs of Luxor.',



    description:

      'Travel through the heart of Ancient Egypt on a carefully designed solo itinerary. Discover Cairo’s legendary monuments before flying to Luxor, the world’s greatest open-air museum, with private guided tours and comfortable transportation.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Valley Temple',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Temple of Queen Hatshepsut',

      'Colossi of Memnon',

      'Private Egyptologist Guide'

    ],

    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet & assist upon arrival at Cairo International Airport. Transfer to your hotel.',

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

        title: 'Cairo City Tour & Fly to Luxor',

        description:

          'Visit the Egyptian Museum and Khan El Khalili Bazaar. Transfer to Cairo International Airport for your flight to Luxor.',

        activities: [

          'Egyptian Museum',

          'Khan El Khalili Bazaar'

        ],

        overnight: 'Luxor'

      },


      {

        day: 4,

        title: 'Luxor East & West Bank',

        description:

          'Visit the Valley of the Kings, Temple of Queen Hatshepsut, Colossi of Memnon, Karnak Temple, and Luxor Temple.',

        activities: [

          'Valley of the Kings',

          'Temple of Queen Hatshepsut',

          'Colossi of Memnon',

          'Karnak Temple',

          'Luxor Temple'

        ],

        overnight: 'Luxor'

      },


      {

        day: 5,

        title: 'Leisure Day',

        description:

          'Enjoy a free day or choose one of the optional excursions.',

        overnight: 'Luxor'

      },


      {

        day: 6,

        title: 'Departure',

        description:

          'After breakfast, transfer to Luxor International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Grand Egyptian Museum (GEM)',

          'Old Cairo',

          'Nile Dinner Cruise'

        ]

      },


      {

        destination: 'Luxor',

        activities: [

          'Hot Air Balloon',

          'Valley of the Queens',

          'Medinet Habu Temple',

          'Ramesseum',

          'Tomb of Nefertari',

          'Sound & Light Show at Karnak Temple'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a 5-Star hotel in Cairo',

      '2 Nights accommodation in a 5-Star hotel in Luxor',

      'Domestic flight (Cairo – Luxor)',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Professional English-speaking Egyptologist Guide',

      'Private guided sightseeing tours as mentioned in the itinerary',

      'Airport transfers',

      'Bottled mineral water during sightseeing',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees to all monuments, temples, museums, and archaeological sites',

      'Meals not mentioned in the itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in any of our tour packages. Guests can choose the sites they would like to visit and pay the entrance fees directly during their tour.',



    goodToKnow: [

      'Perfect itinerary for solo travelers',

      'Explore Cairo and Luxor in one journey',

      'Private Egyptologist Guide throughout your trip',

      'Domestic flight included',

      'Flexible itinerary with optional experiences'

    ],



    relatedPackagesIds: [

      4001,

      4003,

      4006

    ]

  },



  // =====================================================
  // 3. Solo Nile Experience
  // =====================================================

  {

    id: 4003,

    category: 'solo',

    title: 'Solo Nile Experience',

    slug: 'solo-nile-experience',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Solo Traveler',

      'Cultural',

      'Historical',

      'Nile Valley',

      'Private Tour'

    ],


    duration: {

      value: 8,

      unit: 'days',

      text: '8 Days / 7 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'Experience Egypt’s greatest treasures on an 8 Days / 7 Nights solo journey covering Cairo, Luxor, and Aswan with private guided tours and comfortable transportation.',



    description:

      'Travel through the heart of Ancient Egypt on a carefully designed solo itinerary combining Cairo’s legendary monuments with Luxor’s magnificent temples and Aswan’s peaceful Nile atmosphere.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Valley Temple',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Temple of Queen Hatshepsut',

      'Colossi of Memnon',

      'Philae Temple',

      'Aswan High Dam',

      'Unfinished Obelisk'

    ],
        itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet & assist upon arrival at Cairo International Airport. Transfer to your hotel.',

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

        title: 'Cairo City Tour & Fly to Luxor',

        description:

          'Visit the Egyptian Museum and Khan El Khalili Bazaar. Transfer to Cairo International Airport for your flight to Luxor.',

        activities: [

          'Egyptian Museum',

          'Khan El Khalili Bazaar'

        ],

        overnight: 'Luxor'

      },


      {

        day: 4,

        title: 'Luxor East & West Bank',

        description:

          'Explore the greatest ancient sites of Luxor including temples and royal tombs.',

        activities: [

          'Valley of the Kings',

          'Temple of Queen Hatshepsut',

          'Colossi of Memnon',

          'Karnak Temple',

          'Luxor Temple'

        ],

        overnight: 'Luxor'

      },


      {

        day: 5,

        title: 'Transfer to Aswan',

        description:

          'Travel to Aswan by private air-conditioned vehicle and enjoy the Nile scenery.',

        overnight: 'Aswan'

      },


      {

        day: 6,

        title: 'Aswan Highlights',

        description:

          'Visit the famous landmarks of Aswan.',

        activities: [

          'Philae Temple',

          'Aswan High Dam',

          'Unfinished Obelisk'

        ],

        overnight: 'Aswan'

      },


      {

        day: 7,

        title: 'Leisure Day',

        description:

          'Enjoy a relaxing day or choose one of the optional excursions.',

        overnight: 'Aswan'

      },


      {

        day: 8,

        title: 'Departure',

        description:

          'After breakfast, transfer to Aswan International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Grand Egyptian Museum (GEM)',

          'Old Cairo',

          'Nile Dinner Cruise'

        ]

      },


      {

        destination: 'Luxor',

        activities: [

          'Hot Air Balloon',

          'Valley of the Queens',

          'Medinet Habu Temple',

          'Ramesseum',

          'Tomb of Nefertari',

          'Sound & Light Show at Karnak Temple'

        ]

      },


      {

        destination: 'Aswan',

        activities: [

          'Abu Simbel Temples',

          'Nubian Village',

          'Felucca Ride',

          'Kalabsha Temple',

          'Sound & Light Show at Philae'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a 5-Star hotel in Cairo',

      '2 Nights accommodation in a 5-Star hotel in Luxor',

      '2 Nights accommodation in a 5-Star hotel in Aswan',

      'Domestic flight (Cairo – Luxor)',

      'Private transfer (Luxor – Aswan)',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Professional English-speaking Egyptologist Guide',

      'Private guided sightseeing tours',

      'Airport transfers',

      'Bottled mineral water during sightseeing',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees to monuments, temples, museums, and archaeological sites',

      'Meals not mentioned in the itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in any of our tour packages. Guests can choose the sites they would like to visit and pay the entrance fees directly during their tour.',



    goodToKnow: [

      'Designed especially for solo travelers',

      'Explore Cairo, Luxor, and Aswan in one journey',

      'Private Egyptologist Guide',

      'Flexible itinerary with optional experiences',

      'Safe and comfortable travel experience'

    ],



    relatedPackagesIds: [

      4001,

      4002,

      4006

    ]

  },



  // =====================================================
  // 4. Solo Pyramids & Alexandria
  // =====================================================

  {

    id: 4004,

    category: 'solo',

    title: 'Solo Pyramids & Alexandria',

    slug: 'solo-pyramids-and-alexandria',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Solo Traveler',

      'Cultural',

      'Historical',

      'Private Tour'

    ],


    duration: {

      value: 5,

      unit: 'days',

      text: '5 Days / 4 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'Discover the perfect combination of ancient history and Mediterranean charm on this 5 Days / 4 Nights solo adventure covering Cairo and Alexandria.',



    description:

      'Experience two of Egypt’s most fascinating destinations on a solo journey designed for comfort and flexibility. Explore Cairo’s legendary landmarks before discovering Alexandria’s historical treasures and Mediterranean atmosphere.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Valley Temple',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Catacombs of Kom El Shoqafa',

      'Pompey’s Pillar',

      'Citadel of Qaitbay',

      'Bibliotheca Alexandrina',

      'Private Egyptologist Guide'

    ],
        itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet & assist upon arrival at Cairo International Airport. Transfer to your hotel and enjoy the rest of the day at leisure.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids & Cairo Highlights',

        description:

          'Discover the ancient wonders of Cairo including the pyramids and historical landmarks.',

        activities: [

          'Great Pyramid of Khufu',

          'Pyramid of Khafre',

          'Pyramid of Menkaure',

          'Great Sphinx',

          'Valley Temple',

          'Egyptian Museum',

          'Khan El Khalili Bazaar'

        ],

        overnight: 'Cairo'

      },


      {

        day: 3,

        title: 'Alexandria Day Tour',

        description:

          'Enjoy a private day trip to Alexandria and discover the Mediterranean city’s famous attractions.',

        activities: [

          'Catacombs of Kom El Shoqafa',

          'Pompey’s Pillar',

          'Qaitbay Citadel',

          'Bibliotheca Alexandrina',

          'Mediterranean Sea View'

        ],

        overnight: 'Cairo'

      },


      {

        day: 4,

        title: 'Free Day in Cairo',

        description:

          'Enjoy free time for shopping, relaxation, or optional sightseeing.',

        overnight: 'Cairo'

      },


      {

        day: 5,

        title: 'Departure',

        description:

          'Transfer to Cairo International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Grand Egyptian Museum (GEM)',

          'Nile Dinner Cruise',

          'Sound & Light Show',

          'Memphis & Saqqara Tour'

        ]

      },


      {

        destination: 'Alexandria',

        activities: [

          'Montaza Palace',

          'Alexandria Library Tour',

          'Stanley Bridge'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '4 Nights accommodation in a 5-Star hotel in Cairo',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Professional English-speaking Egyptologist Guide',

      'Private guided sightseeing tours',

      'Alexandria private day tour',

      'Airport transfers',

      'Bottled mineral water during sightseeing',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees to monuments, museums, and archaeological sites',

      'Meals not mentioned in itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included. Guests can choose the attractions they wish to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Perfect short solo getaway',

      'Combines ancient history and Mediterranean culture',

      'Private guided tours',

      'Flexible schedule',

      'Suitable for first-time solo travelers'

    ],



    relatedPackagesIds: [

      4001,

      4002,

      4005,

      4006

    ]

  },



  // =====================================================
  // 5. Solo Red Sea Escape
  // =====================================================

  {

    id: 4005,

    category: 'solo',

    title: 'Solo Red Sea Escape',

    slug: 'solo-red-sea-escape',


    destination: {

      id: 2,

      name: 'Hurghada',

      slug: 'hurghada'

    },


    type: [

      'Solo Traveler',

      'Beach Holiday',

      'Red Sea',

      'Relaxation'

    ],


    duration: {

      value: 6,

      unit: 'days',

      text: '6 Days / 5 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'Relax and explore the Red Sea on a 6 Days / 5 Nights solo escape in Hurghada with luxury accommodation and optional sea adventures.',



    description:

      'Enjoy the freedom of solo travel while discovering the beauty of the Red Sea. Relax on sandy beaches, explore colorful coral reefs, and experience exciting optional activities in Hurghada.',



    highlights: [

      'Hurghada Marina',

      'Red Sea Beaches',

      'Luxury Beach Resort',

      'Snorkeling Experience',

      'Coral Reefs',

      'Desert Safari',

      'Private Airport Transfers'

    ],
        itinerary: [

      {

        day: 1,

        title: 'Arrival in Hurghada',

        description:

          'Meet & assist upon arrival at Hurghada International Airport. Transfer to your beachfront resort.',

        overnight: 'Hurghada'

      },


      {

        day: 2,

        title: 'Red Sea Relaxation',

        description:

          'Enjoy a relaxing day at your resort. Swim, relax on the beach, or enjoy resort facilities.',

        overnight: 'Hurghada'

      },


      {

        day: 3,

        title: 'Sea Adventure Day',

        description:

          'Choose from optional Red Sea activities and explore the beauty of the underwater world.',

        activities: [

          'Snorkeling',

          'Coral Reefs',

          'Boat Trips'

        ],

        overnight: 'Hurghada'

      },


      {

        day: 4,

        title: 'Desert Experience',

        description:

          'Enjoy an optional desert adventure including safari activities.',

        activities: [

          'Desert Safari',

          'Quad Bike Adventure'

        ],

        overnight: 'Hurghada'

      },


      {

        day: 5,

        title: 'Free Day',

        description:

          'Enjoy your final full day relaxing by the Red Sea.',

        overnight: 'Hurghada'

      },


      {

        day: 6,

        title: 'Departure',

        description:

          'Transfer to Hurghada International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Hurghada',

        activities: [

          'Orange Bay Island',

          'Paradise Island',

          'Dolphin House',

          'Scuba Diving',

          'Glass Bottom Boat',

          'Desert Safari',

          'Quad Bike Adventure',

          'Camel Ride',

          'Private Yacht Charter'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '5 Nights accommodation in a 5-Star beachfront resort',

      'Daily breakfast',

      'Private airport transfers',

      'Private air-conditioned transportation',

      'Bottled mineral water during transfers',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees',

      'Meals not mentioned',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included. Guests can choose activities and pay any applicable fees directly during the tour.',



    goodToKnow: [

      'Perfect Red Sea solo escape',

      'Relaxing beach holiday',

      'Optional adventure activities',

      'Ideal for independent travelers'

    ],



    relatedPackagesIds: [

      4001,

      4004,

      4006

    ]

  },



  // =====================================================
  // 6. Solo Ultimate Egypt
  // =====================================================

  {

    id: 4006,

    category: 'solo',

    title: 'Solo Ultimate Egypt',

    slug: 'solo-ultimate-egypt',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Solo Traveler',

      'Cultural',

      'Historical',

      'Nile Cruise',

      'Beach Holiday',

      'Private Tour'

    ],


    duration: {

      value: 12,

      unit: 'days',

      text: '12 Days / 11 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'The ultimate solo Egypt adventure combining Cairo, Luxor, Aswan, Nile Cruise, Abu Simbel, and Red Sea relaxation.',



    description:

      'Experience Egypt from ancient wonders to the Red Sea coast on a complete solo journey. Discover pyramids, temples, royal tombs, sail the Nile, and relax by the sea with private services and expert guidance.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Luxury Nile Cruise',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Edfu Temple',

      'Kom Ombo Temple',

      'Philae Temple',

      'Abu Simbel Temples',

      'Hurghada Red Sea Experience'

    ],
        itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet & assist upon arrival at Cairo International Airport. Transfer to your hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids & Cairo Tour',

        description:

          'Explore the legendary pyramids and discover Cairo’s ancient treasures.',

        activities: [

          'Great Pyramid of Khufu',

          'Pyramid of Khafre',

          'Pyramid of Menkaure',

          'Great Sphinx',

          'Valley Temple',

          'Egyptian Museum',

          'Khan El Khalili Bazaar'

        ],

        overnight: 'Cairo'

      },


      {

        day: 3,

        title: 'Fly to Luxor & Nile Cruise',

        description:

          'Transfer to Cairo Airport, fly to Luxor, and board your luxury Nile Cruise.',

        overnight: 'Nile Cruise'

      },


      {

        day: 4,

        title: 'Luxor East & West Bank',

        description:

          'Discover the ancient treasures of Luxor.',

        activities: [

          'Valley of the Kings',

          'Temple of Queen Hatshepsut',

          'Colossi of Memnon',

          'Karnak Temple',

          'Luxor Temple'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 5,

        title: 'Sailing to Edfu',

        description:

          'Enjoy sailing on the Nile and visit the Temple of Horus.',

        activities: [

          'Edfu Temple'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 6,

        title: 'Kom Ombo & Aswan',

        description:

          'Visit Kom Ombo Temple and continue sailing to Aswan.',

        activities: [

          'Kom Ombo Temple',

          'Philae Temple',

          'Aswan High Dam',

          'Unfinished Obelisk'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 7,

        title: 'Abu Simbel Excursion',

        description:

          'Visit the impressive Abu Simbel Temples.',

        activities: [

          'Abu Simbel Temples'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 8,

        title: 'Transfer to Hurghada',

        description:

          'Transfer from Aswan to Hurghada for Red Sea relaxation.',

        overnight: 'Hurghada'

      },


      {

        day: 9,

        title: 'Red Sea Relaxation',

        description:

          'Enjoy your beachfront resort and the beautiful Red Sea atmosphere.',

        overnight: 'Hurghada'

      },


      {

        day: 10,

        title: 'Red Sea Activities',

        description:

          'Choose optional snorkeling, diving, or desert adventures.',

        overnight: 'Hurghada'

      },


      {

        day: 11,

        title: 'Free Day',

        description:

          'Enjoy your final full day relaxing at the resort.',

        overnight: 'Hurghada'

      },


      {

        day: 12,

        title: 'Departure',

        description:

          'Transfer to Hurghada International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Grand Egyptian Museum',

          'Old Cairo',

          'Nile Dinner Cruise',

          'Felucca Ride'

        ]

      },


      {

        destination: 'Luxor & Aswan',

        activities: [

          'Hot Air Balloon',

          'Nubian Village',

          'Felucca Ride',

          'Sound & Light Show'

        ]

      },


      {

        destination: 'Hurghada',

        activities: [

          'Orange Bay',

          'Paradise Island',

          'Dolphin House',

          'Snorkeling',

          'Diving',

          'Desert Safari',

          'Quad Bike Adventure'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a 5-Star hotel in Cairo',

      '5 Nights accommodation aboard a Luxury Nile Cruise',

      '3 Nights accommodation in a 5-Star beachfront resort in Hurghada',

      'Domestic flights as mentioned',

      'Daily breakfast',

      'Full Board during Nile Cruise',

      'Private air-conditioned transportation',

      'Professional English-speaking Egyptologist Guide',

      'Private guided sightseeing tours',

      'Airport transfers',

      'Bottled mineral water during sightseeing',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees',

      'Drinks during Nile Cruise',

      'Meals not mentioned',

      'Optional tours',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included. Guests can select attractions and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Complete Egypt experience for solo travelers',

      'Luxury hotels and Nile Cruise',

      'Private guided journey',

      'Perfect combination of culture and relaxation',

      'Suitable for independent travelers'

    ],



    relatedPackagesIds: [

      4001,

      4002,

      4003,

      4005

    ]

  }

];
