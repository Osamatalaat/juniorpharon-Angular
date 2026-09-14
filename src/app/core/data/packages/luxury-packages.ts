import { Package } from "../../models/package.model";

export const LUXURY_PACKAGES: Package[] = [

  // =====================================================
  // 1. Royal Egypt
  // =====================================================

  {

    id: 3001,

    category: 'luxury',

    title: 'Royal Egypt',

    slug: 'royal-egypt',


    destination: {
      id: 1,
      name: 'Cairo',
      slug: 'cairo'
    },


    type: [

      'Luxury',

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

      'Discover Egypt’s most iconic landmarks on a 6 Days / 5 Nights luxury journey combining Cairo and Luxor with premium accommodation, private guided tours, and exceptional service.',



    description:

      'Experience Egypt in luxury and style. Explore the legendary monuments of Cairo before flying to Luxor to discover magnificent temples and ancient royal tombs with your private Egyptologist guide.',



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

      'Colossi of Memnon'

    ],

    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet & assist upon arrival at Cairo International Airport. Transfer to your luxury hotel. Enjoy the remainder of the day at leisure.',

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

          'Visit the Egyptian Museum and Khan El Khalili Bazaar. Transfer to Cairo Airport for your flight to Luxor and transfer to your luxury hotel.',

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

          'Enjoy a relaxing day at your luxury hotel or join one of the optional excursions.',

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

      '3 Nights accommodation in a Luxury 5-Star hotel in Cairo',

      '2 Nights accommodation in a Luxury 5-Star hotel in Luxor',

      'Domestic flight (Cairo – Luxor)',

      'Daily breakfast',

      'Private air-conditioned luxury transportation',

      'Professional English-speaking Egyptologist Guide',

      'Private guided sightseeing tours as mentioned in the itinerary',

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

      'Entrance fees are not included in any of our tour packages. Guests can choose the sites they wish to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Luxury 5-Star accommodation',

      'Private Egyptologist guide',

      'Domestic flight included',

      'Suitable for travelers seeking comfort and exclusivity',

      'Flexible optional experiences'

    ],



    relatedPackagesIds: [

      3002,

      3003,

      3004

    ]

  },



  // =====================================================
  // 2. Golden Pharaohs
  // =====================================================

  {
  id: 3002,

  category: 'luxury',

  title: 'Golden Pharaohs',

  slug: 'golden-pharaohs',


  destination: {

    id: 1,

    name: 'Cairo',

    slug: 'cairo'

  },


  type: [

    'Luxury',

    'Cultural',

    'Historical',

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

    'Explore Egypt’s timeless wonders on an 8 Days / 7 Nights luxury journey covering Cairo, Luxor, and Aswan with premium accommodation, private guided tours, and first-class service.',



  description:

    'Experience Egypt in elegance as you travel between its most famous destinations. Discover Cairo’s ancient wonders, explore Luxor’s spectacular temples and royal tombs, and enjoy the peaceful beauty of Aswan.',



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

        'Meet & assist upon arrival at Cairo International Airport. Transfer to your luxury hotel.',

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

        'Visit the Egyptian Museum and Khan El Khalili Bazaar. Transfer to Cairo Airport for your flight to Luxor.',

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

      title: 'Transfer to Aswan',

      description:

        'Travel to Aswan by private air-conditioned vehicle and enjoy the remainder of the day at leisure.',

      overnight: 'Aswan'

    },


    {

      day: 6,

      title: 'Aswan Highlights',

      description:

        'Visit Philae Temple, Aswan High Dam, and Unfinished Obelisk.',

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

    '3 Nights accommodation in a Luxury 5-Star hotel in Cairo',

    '2 Nights accommodation in a Luxury 5-Star hotel in Luxor',

    '2 Nights accommodation in a Luxury 5-Star hotel in Aswan',

    'Domestic flight (Cairo – Luxor)',

    'Private transfer (Luxor – Aswan)',

    'Daily breakfast',

    'Private air-conditioned luxury transportation',

    'Professional English-speaking Egyptologist Guide',

    'Private guided sightseeing tours',

    'Airport transfers',

    'Bottled mineral water during sightseeing',

    'All Taxes & Service Charges'

  ],


  excludes: [

    'International flights',

    'Domestic flights not mentioned in the itinerary',

    'Egypt entry visa',

    'Entrance fees to monuments, temples, museums, and archaeological sites',

    'Meals not mentioned in the itinerary',

    'Optional tours and activities',

    'Personal expenses',

    'Tipping'

  ],


  entranceFeePolicy:

    'Entrance fees are not included in any of our tour packages. Guests can choose the attractions they wish to visit and pay entrance fees directly during the tour.',


  goodToKnow: [

    'Luxury 5-Star accommodation',

    'Private Egyptologist guide',

    'Domestic flight included',

    'Comfortable private transportation',

    'Flexible optional experiences'

  ],


  relatedPackagesIds: [

    3001,

    3003,

    3004

  ]

},



  // =====================================================
  // 3. Luxury Nile & Pyramids
  // =====================================================

  {

    id: 3003,

    category: 'luxury',

    title: 'Luxury Nile & Pyramids',

    slug: 'luxury-nile-and-pyramids',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Luxury',

      'Nile Cruise',

      'Historical',

      'Cultural',

      'Private Tour'

    ],


    duration: {

      value: 10,

      unit: 'days',

      text: '10 Days / 9 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'Indulge in a premium 10 Days / 9 Nights luxury journey combining the legendary Pyramids of Giza, a deluxe Nile Cruise, Upper Egypt temples, and the magnificent Abu Simbel Temples.',



    description:

      'Discover Egypt’s greatest treasures while enjoying luxury accommodations, private guided tours, and exceptional hospitality. Travel from Cairo’s ancient monuments to the timeless beauty of the Nile and the breathtaking Abu Simbel Temples.',



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

      'Temple of Horus at Edfu',

      'Kom Ombo Temple',

      'Philae Temple',

      'Aswan High Dam',

      'Unfinished Obelisk',

      'Abu Simbel Temples'

    ],
        itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet & assist upon arrival at Cairo International Airport. Transfer to your luxury hotel.',

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

          'Visit the Egyptian Museum and Khan El Khalili Bazaar. Transfer to Cairo Airport for your flight to Luxor and board your luxury Nile Cruise.',

        activities: [

          'Egyptian Museum',

          'Khan El Khalili Bazaar'

        ],

        overnight: 'Nile Cruise'

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

        overnight: 'Nile Cruise'

      },


      {

        day: 5,

        title: 'Edfu & Kom Ombo',

        description:

          'Visit the Temple of Horus at Edfu and Kom Ombo Temple while sailing the Nile.',

        activities: [

          'Temple of Horus at Edfu',

          'Kom Ombo Temple'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 6,

        title: 'Aswan Highlights',

        description:

          'Visit Philae Temple, Aswan High Dam, and Unfinished Obelisk.',

        activities: [

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

          'Early morning visit to the magnificent Abu Simbel Temples then return to your Nile Cruise.',

        activities: [

          'Abu Simbel Temples'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 8,

        title: 'Leisure in Aswan',

        description:

          'Enjoy a relaxing day aboard your luxury Nile Cruise or choose an optional excursion.',

        overnight: 'Nile Cruise'

      },


      {

        day: 9,

        title: 'Fly to Cairo',

        description:

          'Disembark after breakfast. Transfer to Aswan Airport for your flight to Cairo.',

        overnight: 'Cairo'

      },


      {

        day: 10,

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

          'Nubian Village',

          'Felucca Ride',

          'Kalabsha Temple',

          'Sound & Light Show at Philae'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a Luxury 5-Star hotel in Cairo',

      '6 Nights accommodation aboard a Luxury 5-Star Nile Cruise',

      'Domestic flights (Cairo – Luxor & Aswan – Cairo)',

      'Daily breakfast in Cairo',

      'Full Board aboard the Nile Cruise',

      'Private air-conditioned luxury transportation',

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

      'Drinks during the Nile Cruise',

      'Meals not mentioned in itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in any of our tour packages. Guests can choose the attractions they wish to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Luxury 5-Star accommodation',

      'Deluxe Nile Cruise experience',

      'Private Egyptologist guide',

      'Domestic flights included',

      'Premium private transportation'

    ],



    relatedPackagesIds: [

      3001,

      3002,

      3004

    ]

  },



  // =====================================================
  // 4. Ultimate Luxury Egypt
  // =====================================================

  {

    id: 3004,

    category: 'luxury',

    title: 'Ultimate Luxury Egypt',

    slug: 'ultimate-luxury-egypt',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Luxury',

      'Cultural',

      'Historical',

      'Nile Cruise',

      'Beach Holiday',

      'Private Tour'

    ],


    duration: {

      value: 15,

      unit: 'days',

      text: '15 Days / 14 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'Discover Egypt in unmatched luxury on this 15 Days / 14 Nights journey covering Cairo, Alexandria, Luxor, Nile Cruise, Aswan, Abu Simbel and Hurghada.',



    description:

      'Experience the ultimate luxury journey across Egypt with premium accommodations, private guided tours, a deluxe Nile Cruise, Abu Simbel exploration, and relaxation at a luxury Red Sea beach resort.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Valley Temple',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Alexandria Highlights',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Abu Simbel Temples',

      'Hurghada Red Sea Experience'

    ],
        itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet & assist upon arrival at Cairo International Airport. Transfer to your luxury hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids & Sphinx',

        description:

          'Explore the legendary wonders of Giza Plateau with your private Egyptologist Guide.',

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

        title: 'Cairo Museum & Old Cairo',

        description:

          'Discover ancient Egyptian treasures and explore historic Cairo.',

        activities: [

          'Grand Egyptian Museum',

          'Egyptian Museum',

          'Old Cairo',

          'Khan El Khalili Bazaar'

        ],

        overnight: 'Cairo'

      },


      {

        day: 4,

        title: 'Alexandria Day Tour',

        description:

          'Enjoy a private luxury day trip to Alexandria and discover its famous landmarks.',

        activities: [

          'Catacombs of Kom El Shoqafa',

          'Qaitbay Citadel',

          'Bibliotheca Alexandrina',

          'Mediterranean Sea View'

        ],

        overnight: 'Cairo'

      },


      {

        day: 5,

        title: 'Fly to Luxor & Nile Cruise',

        description:

          'Transfer to Cairo Airport, fly to Luxor and board your luxury Nile Cruise.',

        overnight: 'Nile Cruise'

      },


      {

        day: 6,

        title: 'Luxor East & West Bank',

        description:

          'Explore the greatest ancient Egyptian monuments in Luxor.',

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

        day: 7,

        title: 'Edfu Temple',

        description:

          'Sail along the Nile and visit the magnificent Temple of Horus.',

        activities: [

          'Edfu Temple'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 8,

        title: 'Kom Ombo & Aswan',

        description:

          'Visit Kom Ombo Temple and continue sailing towards Aswan.',

        activities: [

          'Kom Ombo Temple',

          'Philae Temple',

          'Aswan High Dam',

          'Unfinished Obelisk'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 9,

        title: 'Abu Simbel Excursion',

        description:

          'Discover the magnificent Abu Simbel Temples.',

        activities: [

          'Abu Simbel Temples'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 10,

        title: 'Return to Cairo',

        description:

          'Disembark from Nile Cruise and fly back to Cairo.',

        overnight: 'Cairo'

      },


      {

        day: 11,

        title: 'Transfer to Hurghada',

        description:

          'Private transfer to Hurghada for luxury Red Sea relaxation.',

        overnight: 'Hurghada'

      },


      {

        day: 12,

        title: 'Red Sea Luxury Experience',

        description:

          'Enjoy the beach, resort facilities, and optional marine activities.',

        overnight: 'Hurghada'

      },


      {

        day: 13,

        title: 'Hurghada Adventure',

        description:

          'Choose from a variety of optional sea and desert experiences.',

        overnight: 'Hurghada'

      },


      {

        day: 14,

        title: 'Relaxation Day',

        description:

          'Enjoy your final luxury holiday moments at the Red Sea resort.',

        overnight: 'Hurghada'

      },


      {

        day: 15,

        title: 'Departure',

        description:

          'Transfer to Hurghada International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Nile Dinner Cruise',

          'Sound & Light Show',

          'Cairo Tower',

          'Memphis & Saqqara Tour'

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

      'Luxury 5-Star hotel accommodation',

      'Luxury Nile Cruise accommodation',

      'Domestic flights as mentioned',

      'Daily breakfast',

      'Full board meals during Nile Cruise',

      'Private air-conditioned luxury transportation',

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

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included unless specified. Guests can choose additional attractions and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Ultimate luxury Egypt experience',

      'Luxury hotels and Nile Cruise',

      'Private VIP-style journey',

      'Perfect combination of history and relaxation',

      'Suitable for travelers seeking premium experiences'

    ],



    relatedPackagesIds: [

      3001,

      3002,

      3003

    ]

  }

];
