import { Package } from "../../models/package.model";

export const CHRISTMAS_PACKAGES: Package[] = [

  // =====================================================
  // 1. Christmas in Cairo
  // =====================================================

  {

    id: 5001,

    category: 'christmas',

    title: 'Christmas in Cairo',

    slug: 'christmas-in-cairo',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Christmas',

      'Cultural',

      'Historical',

      'Private Tour'

    ],


    duration: {

      value: 4,

      unit: 'days',

      text: '4 Days / 3 Nights'

    },


    price: 499,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],


    shortDescription:

      'Experience the magic of Christmas in Cairo with an unforgettable holiday exploring the Great Pyramids, Egyptian Museum, and historic Cairo.',


    description:

      'Celebrate Christmas in Cairo and discover the timeless wonders of Ancient Egypt through private guided tours, comfortable accommodation, and authentic cultural experiences.',


    highlights: [

      'Explore the Great Pyramids of Giza',

      'Visit the Great Sphinx and Valley Temple',

      'Discover Egyptian Museum treasures',

      'Explore Khan El Khalili Bazaar',

      'Private Egyptologist Guide throughout the tour'

    ],

    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet & assist upon arrival at Cairo International Airport. Transfer to your hotel and enjoy the remainder of the day at leisure.',

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

          'Visit the Egyptian Museum and Khan El Khalili Bazaar.',

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

      'Christmas Gala Dinner unless specified',

      'Meals not mentioned in the itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in any of our tour packages. Guests can choose the sites they would like to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Christmas holiday in Cairo',

      'Private Egyptologist Guide',

      '5-Star hotel accommodation',

      'Suitable for couples, families, and friends'

    ],



    relatedPackagesIds: [

      5002,

      5003,

      5004,

      5005

    ]

  },


  // =====================================================
  // 2. Christmas Cairo & Luxor
  // =====================================================

  {

    id: 5002,

    category: 'christmas',

    title: 'Christmas Cairo & Luxor',

    slug: 'christmas-cairo-and-luxor',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Christmas',

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

      'Celebrate Christmas in Egypt with a 6 Days / 5 Nights journey combining the ancient wonders of Cairo and Luxor.',



    description:

      'Discover Egypt’s most iconic landmarks during the Christmas season. Explore Cairo’s pyramids and museums before flying to Luxor to experience magnificent temples and ancient royal tombs.',



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

          'Meet & assist upon arrival at Cairo International Airport. Transfer to your hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids Tour',

        description:

          'Visit the Great Pyramid of Khufu, Pyramid of Khafre, Pyramid of Menkaure, Great Sphinx and Valley Temple.',

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

          'Visit the Egyptian Museum and Khan El Khalili Bazaar, then transfer to Cairo Airport for your flight to Luxor.',

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

          'Explore the ancient treasures of Luxor including temples and royal tombs.',

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

        title: 'Leisure Day in Luxor',

        description:

          'Enjoy a relaxing Christmas holiday day or choose from optional tours.',

        overnight: 'Luxor'

      },


      {

        day: 6,

        title: 'Departure',

        description:

          'Transfer to Luxor International Airport for your departure flight.'

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

          'Sound & Light Show at Karnak Temple'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a 5-Star hotel in Cairo',

      '2 Nights accommodation in a 5-Star hotel in Luxor',

      'Domestic flight Cairo – Luxor',

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

      'Entrance fees',

      'Christmas Gala Dinner unless specified',

      'Meals not mentioned',

      'Optional tours',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included. Guests can choose the sites they would like to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Perfect Christmas cultural experience',

      'Private Egyptologist Guide',

      '5-Star accommodation',

      'Suitable for couples and families'

    ],



    relatedPackagesIds: [

      5001,

      5003,

      5004,

      5005

    ]

  },


  // =====================================================
  // 3. Christmas Nile Cruise
  // =====================================================

  {

    id: 5003,

    category: 'christmas',

    title: 'Christmas Nile Cruise',

    slug: 'christmas-nile-cruise',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Christmas',

      'Nile Cruise',

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

      'Celebrate Christmas aboard a luxury Nile Cruise sailing between Luxor and Aswan while discovering the ancient wonders of Egypt.',



    description:

      'Enjoy a magical Christmas holiday on the legendary Nile River. Explore ancient temples, royal tombs, and unforgettable landscapes while relaxing aboard a luxury Nile Cruise.',



    highlights: [

      'Luxury 5-Star Nile Cruise',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Temple of Queen Hatshepsut',

      'Edfu Temple',

      'Kom Ombo Temple',

      'Philae Temple',

      'Aswan High Dam',

      'Christmas celebration onboard'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Luxor',

        description:

          'Meet and assist upon arrival at Luxor International Airport and transfer to your Nile Cruise.',

        overnight: 'Nile Cruise'

      },


      {

        day: 2,

        title: 'Luxor East & West Bank',

        description:

          'Explore the historical treasures of Luxor before sailing.',

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

        day: 3,

        title: 'Sailing to Edfu',

        description:

          'Enjoy sailing along the Nile and visit the Temple of Horus.',

        activities: [

          'Edfu Temple'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 4,

        title: 'Kom Ombo Temple',

        description:

          'Visit the unique double temple of Kom Ombo while continuing your Nile journey.',

        activities: [

          'Kom Ombo Temple'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 5,

        title: 'Aswan Highlights',

        description:

          'Discover the beauty of Aswan and its famous landmarks.',

        activities: [

          'Philae Temple',

          'Aswan High Dam',

          'Unfinished Obelisk'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 6,

        title: 'Christmas Celebration',

        description:

          'Enjoy Christmas celebrations onboard the luxury Nile Cruise with entertainment and special activities.',

        overnight: 'Nile Cruise'

      },


      {

        day: 7,

        title: 'Leisure Day',

        description:

          'Relax onboard and enjoy the beautiful Nile views.',

        overnight: 'Nile Cruise'

      },


      {

        day: 8,

        title: 'Departure',

        description:

          'Disembark and transfer to Aswan International Airport for departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Luxor',

        activities: [

          'Hot Air Balloon Ride',

          'Valley of the Queens',

          'Sound & Light Show at Karnak'

        ]

      },


      {

        destination: 'Aswan',

        activities: [

          'Abu Simbel Temples',

          'Nubian Village',

          'Felucca Ride'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '7 Nights accommodation aboard a 5-Star Nile Cruise',

      'Full Board meals during Nile Cruise',

      'Christmas celebration onboard',

      'Private guided sightseeing tours',

      'Professional English-speaking Egyptologist Guide',

      'Airport transfers',

      'Bottled mineral water',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees',

      'Drinks during Nile Cruise',

      'Optional tours',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included. Guests can select additional attractions and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Unique Christmas Nile Cruise experience',

      'Luxury floating hotel',

      'Perfect for couples and families',

      'Relaxing holiday atmosphere'

    ],



    relatedPackagesIds: [

      5001,

      5002,

      5004,

      5005

    ]

  },
    // =====================================================
  // 4. Christmas Luxury Egypt
  // =====================================================

  {

    id: 5004,

    category: 'christmas',

    title: 'Christmas Luxury Egypt',

    slug: 'christmas-luxury-egypt',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Christmas',

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

      'Celebrate Christmas in luxury with an unforgettable Egyptian journey combining Cairo, Luxor, ancient wonders, and premium accommodation.',



    description:

      'Enjoy a luxury Christmas holiday in Egypt with private guided tours, 5-Star hotels, magnificent ancient sites, and unforgettable cultural experiences across Cairo and Luxor.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Grand Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Temple of Queen Hatshepsut',

      'Luxury 5-Star Hotels',

      'Christmas celebration experience'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet and assist upon arrival at Cairo International Airport. Transfer to your luxury hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids & Cairo Highlights',

        description:

          'Discover the legendary pyramids and Cairo’s most famous attractions.',

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

          'Explore Egyptian history and enjoy the atmosphere of historic Cairo.',

        activities: [

          'Grand Egyptian Museum',

          'Egyptian Museum',

          'Khan El Khalili Bazaar',

          'Old Cairo'

        ],

        overnight: 'Cairo'

      },


      {

        day: 4,

        title: 'Fly to Luxor',

        description:

          'Transfer to Cairo Airport and fly to Luxor.',

        overnight: 'Luxor'

      },


      {

        day: 5,

        title: 'Luxor East Bank',

        description:

          'Explore the magnificent temples of ancient Luxor.',

        activities: [

          'Karnak Temple',

          'Luxor Temple'

        ],

        overnight: 'Luxor'

      },


      {

        day: 6,

        title: 'Luxor West Bank',

        description:

          'Discover the royal tombs and monuments of ancient Egypt.',

        activities: [

          'Valley of the Kings',

          'Temple of Queen Hatshepsut',

          'Colossi of Memnon'

        ],

        overnight: 'Luxor'

      },


      {

        day: 7,

        title: 'Christmas Celebration Day',

        description:

          'Enjoy a relaxing Christmas holiday day with optional activities.',

        overnight: 'Luxor'

      },


      {

        day: 8,

        title: 'Departure',

        description:

          'Transfer to Luxor International Airport for your departure flight.'

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

        destination: 'Luxor',

        activities: [

          'Hot Air Balloon Ride',

          'Valley of the Queens',

          'Sound & Light Show at Karnak'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a 5-Star hotel in Cairo',

      '4 Nights accommodation in a 5-Star hotel in Luxor',

      'Domestic flight Cairo – Luxor',

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

      'Entrance fees',

      'Christmas Gala Dinner unless specified',

      'Meals not mentioned',

      'Optional tours',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included. Guests can choose the attractions they wish to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Luxury Christmas holiday',

      'Premium accommodation',

      'Private Egyptologist Guide',

      'Perfect for couples and families',

      'Relaxed festive atmosphere'

    ],



    relatedPackagesIds: [

      5001,

      5002,

      5003,

      5005

    ]

  },
    // =====================================================
  // 5. New Year Egypt Celebration
  // =====================================================

  {

    id: 5005,

    category: 'christmas',

    title: 'New Year Egypt Celebration',

    slug: 'new-year-egypt-celebration',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Christmas',

      'New Year',

      'Luxury',

      'Cultural',

      'Private Tour'

    ],


    duration: {

      value: 7,

      unit: 'days',

      text: '7 Days / 6 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'Celebrate the New Year in Egypt with a luxury holiday combining Cairo attractions, ancient wonders, festive celebrations, and unforgettable experiences.',



    description:

      'Welcome the New Year in the heart of Egypt with a special holiday package featuring Cairo’s iconic landmarks, private guided tours, luxury accommodation, and festive activities.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Grand Egyptian Museum',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Nile Dinner Cruise',

      'New Year Celebration Experience',

      'Private Egyptologist Guide',

      'Luxury Hotel Accommodation'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet and assist upon arrival at Cairo International Airport. Transfer to your hotel and enjoy the rest of the day.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids Experience',

        description:

          'Discover the legendary pyramids and ancient wonders of Giza.',

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

        title: 'Cairo Historical Tour',

        description:

          'Explore museums and historic areas of Cairo.',

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

        title: 'New Year Celebration Day',

        description:

          'Enjoy a special New Year celebration experience with optional festive activities.',

        activities: [

          'Nile Dinner Cruise',

          'New Year Celebration Event'

        ],

        overnight: 'Cairo'

      },


      {

        day: 5,

        title: 'Cairo Leisure Day',

        description:

          'Enjoy free time for shopping, relaxation, or optional tours.',

        overnight: 'Cairo'

      },


      {

        day: 6,

        title: 'Cultural Experience',

        description:

          'Discover more of Cairo through optional sightseeing and cultural activities.',

        overnight: 'Cairo'

      },


      {

        day: 7,

        title: 'Departure',

        description:

          'Transfer to Cairo International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Nile Dinner Cruise',

          'Sound & Light Show',

          'Cairo Tower',

          'Memphis & Saqqara Tour',

          'Felucca Ride',

          'Desert Safari'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '6 Nights accommodation in a 5-Star hotel in Cairo',

      'Daily breakfast',

      'New Year celebration arrangements as specified',

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

      'New Year Gala Dinner unless specified',

      'Meals not mentioned',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included unless specified. Guests can select additional attractions and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Perfect New Year holiday in Egypt',

      'Luxury Cairo experience',

      'Private guided tours',

      'Suitable for couples and families',

      'Festive atmosphere'

    ],



    relatedPackagesIds: [

      5001,

      5002,

      5003,

      5004

    ]

  }

];
