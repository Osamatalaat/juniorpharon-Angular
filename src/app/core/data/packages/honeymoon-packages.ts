import { Package } from "../../models/package.model";

export const HONEYMOON_PACKAGES: Package[] = [

  // =====================================================
  // 1. Cairo Romance
  // =====================================================

  {
    id: 2001,

    category: 'honeymoon',

    title: 'Cairo Romance',

    slug: 'cairo-romance',


    destination: {
      id: 1,
      name: 'Cairo',
      slug: 'cairo'
    },


    type: [

      'Honeymoon',

      'Romantic',

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

      'Create unforgettable honeymoon memories in Cairo by exploring the Great Pyramids, Egyptian Museum, Khan El Khalili Bazaar, and enjoying luxury accommodation designed for couples.',



    description:

      'Celebrate the beginning of your new life together with a romantic Cairo honeymoon experience combining ancient Egyptian wonders, private guided tours, comfortable accommodation, and personalized service.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Valley Temple',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Private Egyptologist Guide',

      'Luxury 5-Star Accommodation'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Upon arrival at Cairo International Airport, meet and assist service will welcome you before transferring you to your luxury hotel by private air-conditioned vehicle.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids Tour',

        description:

          'Explore the legendary Giza Plateau including the Great Pyramid of Khufu, Pyramid of Khafre, Pyramid of Menkaure, Great Sphinx, and Valley Temple.',

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

        title: 'Egyptian Museum & Khan El Khalili',

        description:

          'Visit the Egyptian Museum and discover the treasures of King Tutankhamun before exploring the historic Khan El Khalili Bazaar.',

        activities: [

          'Egyptian Museum',

          'King Tutankhamun Treasures',

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

          'Salah El-Din Citadel & Mohamed Ali Mosque',

          'Nile Dinner Cruise',

          'Private Felucca Ride at Sunset',

          'Cairo Tower',

          'Sound & Light Show at the Pyramids'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a carefully selected 5-Star hotel in Cairo',

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

      'Entrance fees are not included in any of our tour packages. Guests can choose the sites they would like to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Perfect honeymoon getaway for newlyweds',

      'Private Egyptologist Guide',

      'Luxury 5-Star accommodation',

      'Romantic cultural experience',

      'Suitable for couples'

    ],



    relatedPackagesIds: [

      2002,

      2003,

      2005

    ]

  },


  // =====================================================
  // 2. Hurghada Honeymoon Escape
  // =====================================================

  {
    id: 2002,

    category: 'honeymoon',

    title: 'Hurghada Honeymoon Escape',

    slug: 'hurghada-honeymoon-escape',


    destination: {
      id: 2,
      name: 'Hurghada',
      slug: 'hurghada'
    },


    type: [

      'Honeymoon',

      'Romantic',

      'Beach Holiday',

      'Red Sea',

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

      'Escape to the crystal-clear waters of the Red Sea on a romantic 6 Days / 5 Nights honeymoon in Hurghada with luxury beachfront accommodation and unforgettable seaside experiences.',

    description:

      'Celebrate your honeymoon in one of Egypt’s most beautiful coastal destinations. Relax on golden beaches, enjoy romantic sunsets, explore colorful coral reefs, and experience the perfect combination of luxury and relaxation.',



    highlights: [

      'Hurghada Marina',

      'Red Sea Beaches',

      'Luxury Beachfront Resort',

      'Snorkeling in the Red Sea',

      'Beautiful Coral Reefs',

      'Romantic Sunset by the Sea',

      'Private Airport Transfers'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Hurghada',

        description:

          'Upon arrival at Hurghada International Airport, meet and assist service before transferring you to your luxury beachfront resort. Enjoy the remainder of the day relaxing.',

        overnight: 'Hurghada'

      },


      {

        day: 2,

        title: 'Relax on the Red Sea',

        description:

          'Enjoy a full leisure day at your resort. Relax on the sandy beaches, swim in the warm Red Sea waters, or enjoy the swimming pool and sea views.',

        overnight: 'Hurghada'

      },


      {

        day: 3,

        title: 'Red Sea Leisure',

        description:

          'Spend another romantic day enjoying your resort or choose one of the optional sea experiences. Explore Hurghada Marina and enjoy the beautiful sunset atmosphere.',

        overnight: 'Hurghada'

      },


      {

        day: 4,

        title: 'Free Day',

        description:

          'Enjoy your day at your own pace. Relax at the private beach, enjoy spa facilities, or take a peaceful sunset walk along the shoreline.',

        overnight: 'Hurghada'

      },


      {

        day: 5,

        title: 'Romantic Leisure Day',

        description:

          'Enjoy your final full day in Hurghada. Relax by the sea, choose an optional yacht excursion, or celebrate your honeymoon with a romantic dinner overlooking the Red Sea.',

        overnight: 'Hurghada'

      },


      {

        day: 6,

        title: 'Departure',

        description:

          'After breakfast, check out from your resort and transfer to Hurghada International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Hurghada',

        activities: [

          'Orange Bay Island',

          'Paradise Island',

          'Mahmya Island',

          'Dolphin House Snorkeling Trip',

          'Scuba Diving',

          'Intro Diving Experience',

          'Private Yacht Charter',

          'Semi-Submarine Tour',

          'Glass Bottom Boat',

          'Desert Safari',

          'Quad Bike Adventure',

          'Buggy Safari',

          'Camel Ride',

          'Hurghada City Tour',

          'Romantic Sunset Cruise'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '5 Nights accommodation in a carefully selected 5-Star beachfront resort',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Airport transfers',

      'Bottled mineral water during transfers',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees to attractions and protected areas',

      'Meals not mentioned in the itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Spa treatments and resort activities not included in the package',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in the package. Guests can choose the attractions and activities they wish to enjoy and pay any applicable fees directly during their tour.',



    goodToKnow: [

      'Perfect Red Sea honeymoon',

      '5-Star beachfront resort',

      'Romantic seaside experience',

      'Ideal for couples seeking relaxation',

      'Optional sea and desert adventures available'

    ],



    relatedPackagesIds: [

      2006,

      2007,

      2004

    ]

  },


  // =====================================================
  // 3. Luxor & Aswan Honeymoon
  // =====================================================

  {

    id: 2003,

    category: 'honeymoon',

    title: 'Luxor & Aswan Honeymoon',

    slug: 'luxor-and-aswan-honeymoon',


    destination: {

      id: 3,

      name: 'Luxor',

      slug: 'luxor'

    },


    type: [

      'Honeymoon',

      'Romantic',

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

      'Discover the romantic side of Ancient Egypt with a 6 Days / 5 Nights honeymoon journey through Luxor and Aswan, exploring magnificent temples, royal tombs, and timeless Nile landscapes.',



    description:

      'Begin your honeymoon surrounded by the wonders of Upper Egypt. Explore the legendary temples of Luxor, discover the treasures of the Pharaohs, and enjoy the peaceful beauty of Aswan with private guided experiences.',



    highlights: [

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Temple of Queen Hatshepsut',

      'Colossi of Memnon',

      'Philae Temple',

      'Aswan High Dam',

      'Unfinished Obelisk',

      'Romantic Nile Views',

      'Private Egyptologist Guide'

    ],
        itinerary: [

      {

        day: 1,

        title: 'Arrival in Luxor',

        description:

          'Upon arrival at Luxor International Airport, meet and assist service before transferring you to your hotel.',

        overnight: 'Luxor'

      },


      {

        day: 2,

        title: 'Luxor East Bank',

        description:

          'Discover the magnificent temples of Luxor including the largest religious complex ever built and the beautifully preserved Luxor Temple.',

        activities: [

          'Karnak Temple',

          'Luxor Temple'

        ],

        overnight: 'Luxor'

      },


      {

        day: 3,

        title: 'Luxor West Bank',

        description:

          'Explore the Valley of the Kings, the magnificent Temple of Queen Hatshepsut, and the giant Colossi of Memnon.',

        activities: [

          'Valley of the Kings',

          'Temple of Queen Hatshepsut',

          'Colossi of Memnon'

        ],

        overnight: 'Luxor'

      },


      {

        day: 4,

        title: 'Transfer to Aswan',

        description:

          'Travel to Aswan and enjoy the beautiful Nile scenery along the way.',

        overnight: 'Aswan'

      },


      {

        day: 5,

        title: 'Aswan Highlights',

        description:

          'Discover Aswan’s most famous attractions including Philae Temple, the High Dam, and the Unfinished Obelisk.',

        activities: [

          'Philae Temple',

          'Aswan High Dam',

          'Unfinished Obelisk'

        ],

        overnight: 'Aswan'

      },


      {

        day: 6,

        title: 'Departure',

        description:

          'After breakfast, transfer to Aswan International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Luxor',

        activities: [

          'Hot Air Balloon Ride',

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

          'Felucca Ride at Sunset',

          'Botanical Garden',

          'Kalabsha Temple',

          'Sound & Light Show at Philae'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a 5-Star hotel in Luxor',

      '2 Nights accommodation in a 5-Star hotel in Aswan',

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

      'Entrance fees to monuments, temples, museums, and archaeological sites',

      'Meals not mentioned in the itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in the package. Guests can choose the attractions they wish to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Perfect romantic Upper Egypt experience',

      'Private Egyptologist Guide',

      'Ideal for couples interested in history and culture',

      'Beautiful Nile scenery',

      'Flexible optional excursions'

    ],



    relatedPackagesIds: [

      2004,

      2005,

      2008

    ]

  },


  // =====================================================
  // 4. Luxury Honeymoon Egypt
  // =====================================================

  {

    id: 2004,

    category: 'honeymoon',

    title: 'Luxury Honeymoon Egypt',

    slug: 'luxury-honeymoon-egypt',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Honeymoon',

      'Luxury',

      'Romantic',

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

      'Experience a luxurious 8 Days / 7 Nights honeymoon journey through Cairo and Luxor, combining ancient wonders, premium hotels, and romantic experiences.',



    description:

      'Celebrate your honeymoon in style with a luxury Egyptian escape. Discover Cairo’s iconic landmarks and explore Luxor’s magnificent temples and royal tombs with private guided tours and personalized service.',



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

      'Luxury 5-Star Hotels'

    ],
        itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet and assist upon arrival at Cairo International Airport. Transfer to your luxury hotel and enjoy the rest of the day at leisure.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids & Egyptian Museum',

        description:

          'Explore the Great Pyramids, Great Sphinx, Valley Temple, Egyptian Museum, and Khan El Khalili Bazaar.',

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

        title: 'Fly to Luxor',

        description:

          'Transfer to Cairo Airport for your flight to Luxor. Upon arrival, transfer to your luxury hotel.',

        overnight: 'Luxor'

      },


      {

        day: 4,

        title: 'Luxor East Bank',

        description:

          'Discover the impressive temples of Luxor including Karnak Temple and Luxor Temple.',

        activities: [

          'Karnak Temple',

          'Luxor Temple'

        ],

        overnight: 'Luxor'

      },


      {

        day: 5,

        title: 'Luxor West Bank',

        description:

          'Explore the Valley of the Kings, Temple of Queen Hatshepsut, and Colossi of Memnon.',

        activities: [

          'Valley of the Kings',

          'Temple of Queen Hatshepsut',

          'Colossi of Memnon'

        ],

        overnight: 'Luxor'

      },


      {

        day: 6,

        title: 'Romantic Leisure Day',

        description:

          'Enjoy a relaxing day at your luxury hotel or choose one of the optional romantic experiences.',

        overnight: 'Luxor'

      },


      {

        day: 7,

        title: 'Return to Cairo',

        description:

          'Transfer to Luxor Airport for your flight back to Cairo.',

        overnight: 'Cairo'

      },


      {

        day: 8,

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

          'Nile Dinner Cruise',

          'Private Felucca Ride at Sunset',

          'Cairo Tower',

          'Sound & Light Show at the Pyramids'

        ]

      },


      {

        destination: 'Luxor',

        activities: [

          'Hot Air Balloon Ride',

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

      '4 Nights accommodation in a 5-Star hotel in Cairo',

      '3 Nights accommodation in a 5-Star hotel in Luxor',

      'Domestic flight Cairo – Luxor',

      'Domestic flight Luxor – Cairo',

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

      'Entrance fees are not included in the package. Guests can choose the attractions they wish to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Luxury honeymoon experience',

      '5-Star accommodation',

      'Private Egyptologist Guide',

      'Romantic and relaxing itinerary',

      'Perfect for newlyweds'

    ],



    relatedPackagesIds: [

      2001,

      2003,

      2005,

      2008

    ]

  },


  // =====================================================
  // 5. Nile Romance
  // =====================================================

  {

    id: 2005,

    category: 'honeymoon',

    title: 'Nile Romance',

    slug: 'nile-romance',


    destination: {

      id: 3,

      name: 'Luxor',

      slug: 'luxor'

    },


    type: [

      'Honeymoon',

      'Romantic',

      'Nile Cruise',

      'Luxury',

      'Historical'

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

      'Enjoy a romantic Nile Cruise honeymoon through Luxor, Edfu, Kom Ombo, and Aswan with luxury accommodation and unforgettable views of the Nile.',



    description:

      'Experience the magic of Egypt from the legendary Nile River. Sail between ancient cities, discover magnificent temples, and enjoy a romantic journey surrounded by timeless landscapes.',



    highlights: [

      'Luxury Nile Cruise',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Temple of Queen Hatshepsut',

      'Colossi of Memnon',

      'Edfu Temple',

      'Kom Ombo Temple',

      'Philae Temple',

      'Aswan High Dam',

      'Romantic Nile Views'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Luxor',

        description:

          'Upon arrival at Luxor International Airport, meet and assist before transferring to your luxury Nile Cruise.',

        overnight: 'Nile Cruise'

      },


      {

        day: 2,

        title: 'Luxor East & West Bank',

        description:

          'Explore the magnificent temples and royal tombs of ancient Luxor.',

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

        title: 'Leisure Day',

        description:

          'Enjoy a relaxing day onboard your luxury Nile Cruise or select an optional excursion.',

        overnight: 'Nile Cruise'

      },


      {

        day: 7,

        title: 'Romantic Nile Experience',

        description:

          'Enjoy your final moments sailing the Nile surrounded by breathtaking views.',

        overnight: 'Nile Cruise'

      },


      {

        day: 8,

        title: 'Departure',

        description:

          'After breakfast, disembark and transfer to Aswan International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Luxor',

        activities: [

          'Hot Air Balloon Ride',

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

          'Felucca Ride at Sunset',

          'Botanical Garden',

          'Kalabsha Temple',

          'Sound & Light Show at Philae'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '7 Nights accommodation aboard a 5-Star Nile Cruise',

      'Daily breakfast',

      'Full Board meals during the Nile Cruise',

      'Private air-conditioned transportation',

      'Professional English-speaking Egyptologist Guide',

      'Private guided sightseeing tours',

      'Airport transfers',

      'Bottled mineral water during transfers',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees to monuments, temples, museums, and archaeological sites',

      'Drinks during the Nile Cruise',

      'Meals not mentioned',

      'Optional tours and activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in the package. Guests can select the attractions they wish to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Romantic Nile Cruise honeymoon',

      'Luxury 5-Star cruise experience',

      'Perfect for couples',

      'Private Egyptologist Guide',

      'Relaxing and unforgettable journey'

    ],



    relatedPackagesIds: [

      2003,

      2004,

      2006,

      2008

    ]

  },


  // =====================================================
  // 6. Red Sea Romance
  // =====================================================

  {

    id: 2006,

    category: 'honeymoon',

    title: 'Red Sea Romance',

    slug: 'red-sea-romance',


    destination: {

      id: 2,

      name: 'Hurghada',

      slug: 'hurghada'

    },


    type: [

      'Honeymoon',

      'Romantic',

      'Beach Holiday',

      'Red Sea',

      'Luxury'

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

      'Enjoy an unforgettable 8 Days / 7 Nights honeymoon on Egypt’s spectacular Red Sea coast combining Hurghada and Sharm El Sheikh with luxury resorts and romantic seaside experiences.',



    description:

      'Escape to the crystal-clear waters of the Red Sea and celebrate your honeymoon with luxury beachfront resorts, colorful coral reefs, romantic sunsets, and unforgettable moments in Hurghada and Sharm El Sheikh.',



    highlights: [

      'Hurghada Marina',

      'Naama Bay',

      'SOHO Square',

      'Red Sea Coral Reefs',

      'White Sandy Beaches',

      'Luxury Beach Resorts',

      'Crystal-Clear Waters',

      'Romantic Red Sea Sunsets'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Hurghada',

        description:

          'Upon arrival at Hurghada International Airport, meet and assist before transferring you to your luxury beachfront resort.',

        overnight: 'Hurghada'

      },


      {

        day: 2,

        title: 'Leisure Day in Hurghada',

        description:

          'Enjoy a relaxing day at your resort. Swim in the Red Sea, relax on the beach, or enjoy the resort facilities.',

        overnight: 'Hurghada'

      },


      {

        day: 3,

        title: 'Free Day in Hurghada',

        description:

          'Spend a romantic day at leisure or enjoy optional sea adventures. Visit Hurghada Marina and enjoy the sunset atmosphere.',

        overnight: 'Hurghada'

      },


      {

        day: 4,

        title: 'Transfer to Sharm El Sheikh',

        description:

          'Transfer to Hurghada Airport for your domestic flight to Sharm El Sheikh. Upon arrival, transfer to your beachfront resort.',

        overnight: 'Sharm El Sheikh'

      },


      {

        day: 5,

        title: 'Explore Sharm El Sheikh',

        description:

          'Visit Naama Bay and SOHO Square, enjoying shopping, restaurants, cafés, and evening entertainment.',

        activities: [

          'Naama Bay',

          'SOHO Square'

        ],

        overnight: 'Sharm El Sheikh'

      },


      {

        day: 6,

        title: 'Leisure Day',

        description:

          'Relax on the beach, enjoy the Red Sea views, or experience a luxury spa treatment.',

        overnight: 'Sharm El Sheikh'

      },


      {

        day: 7,

        title: 'Romantic Day at Leisure',

        description:

          'Enjoy your final full honeymoon day with optional yacht excursions, snorkeling, or a romantic candlelit dinner by the sea.',

        overnight: 'Sharm El Sheikh'

      },


      {

        day: 8,

        title: 'Departure',

        description:

          'After breakfast, transfer to Sharm El Sheikh International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Hurghada',

        activities: [

          'Orange Bay Island',

          'Paradise Island',

          'Mahmya Island',

          'Dolphin House Snorkeling Trip',

          'Scuba Diving',

          'Intro Diving',

          'Private Yacht Charter',

          'Semi-Submarine',

          'Glass Bottom Boat',

          'Desert Safari',

          'Quad Bike Adventure',

          'Romantic Sunset Cruise'

        ]

      },


      {

        destination: 'Sharm El Sheikh',

        activities: [

          'Ras Mohamed National Park',

          'White Island Boat Trip',

          'Tiran Island Snorkeling',

          'Blue Hole & Dahab',

          'St. Catherine’s Monastery',

          'Colored Canyon',

          'Private Yacht Charter',

          'Parasailing',

          'Camel Ride',

          'Desert Safari',

          'Swimming with Dolphins'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '3 Nights accommodation in a 5-Star beachfront resort in Hurghada',

      '4 Nights accommodation in a 5-Star beachfront resort in Sharm El Sheikh',

      'Domestic flight Hurghada – Sharm El Sheikh',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Airport transfers',

      'Bottled mineral water during transfers',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees to attractions, national parks, and protected areas',

      'Meals not mentioned in the itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Spa treatments and resort activities not included in the package',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in the package. Guests can choose the attractions and activities they wish to enjoy and pay any applicable fees directly during their tour.',



    goodToKnow: [

      'Perfect Red Sea honeymoon experience',

      'Two amazing coastal destinations',

      'Luxury beachfront resorts',

      'Romantic seaside atmosphere',

      'Ideal for newlyweds'

    ],



    relatedPackagesIds: [

      2002,

      2007,

      2008

    ]

  },


  // =====================================================
  // 7. Sharm El Sheikh Honeymoon
  // =====================================================

  {

    id: 2007,

    category: 'honeymoon',

    title: 'Sharm El Sheikh Honeymoon',

    slug: 'sharm-el-sheikh-honeymoon',


    destination: {

      id: 4,

      name: 'Sharm El Sheikh',

      slug: 'sharm-el-sheikh'

    },


    type: [

      'Honeymoon',

      'Romantic',

      'Beach Holiday',

      'Red Sea',

      'Luxury'

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

      'Celebrate your love on the beautiful shores of Sharm El Sheikh with a romantic 6 Days / 5 Nights honeymoon surrounded by luxury resorts, beaches, and the Red Sea.',



    description:

      'Escape to one of Egypt’s most romantic destinations. Relax at a luxury beachfront resort, explore the colorful underwater world of the Red Sea, and enjoy unforgettable moments together in Sharm El Sheikh.',



    highlights: [

      'Naama Bay',

      'SOHO Square',

      'Ras Mohamed National Park',

      'White Island',

      'Tiran Island',

      'Luxury Beach Resort',

      'Red Sea Coral Reefs',

      'Romantic Sunset by the Sea'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Sharm El Sheikh',

        description:

          'Upon arrival at Sharm El Sheikh International Airport, meet and assist before transferring you to your luxury beachfront resort.',

        overnight: 'Sharm El Sheikh'

      },


      {

        day: 2,

        title: 'Leisure Day',

        description:

          'Enjoy a relaxing day at your resort. Swim in the crystal-clear waters, relax on the private beach, or enjoy the resort facilities.',

        overnight: 'Sharm El Sheikh'

      },


      {

        day: 3,

        title: 'Explore Sharm El Sheikh',

        description:

          'Visit the vibrant Naama Bay and continue to SOHO Square, enjoying restaurants, cafés, shopping, and evening entertainment.',

        activities: [

          'Naama Bay',

          'SOHO Square'

        ],

        overnight: 'Sharm El Sheikh'

      },


      {

        day: 4,

        title: 'Free Day',

        description:

          'Enjoy a full day at leisure. Relax by the beach, enjoy a spa experience, or spend quality time together at the resort.',

        overnight: 'Sharm El Sheikh'

      },


      {

        day: 5,

        title: 'Romantic Leisure Day',

        description:

          'Enjoy your final full honeymoon day or choose one of the optional Red Sea excursions.',

        overnight: 'Sharm El Sheikh'

      },


      {

        day: 6,

        title: 'Departure',

        description:

          'After breakfast, transfer to Sharm El Sheikh International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Sharm El Sheikh',

        activities: [

          'Ras Mohamed National Park',

          'White Island Boat Trip',

          'Tiran Island Snorkeling',

          'Blue Hole & Dahab',

          'St. Catherine’s Monastery',

          'Colored Canyon',

          'Desert Safari',

          'Quad Bike Adventure',

          'Camel Ride',

          'Glass Bottom Boat',

          'Parasailing',

          'Private Yacht Charter',

          'Dolphin Show',

          'Swimming with Dolphins'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      '5 Nights accommodation in a carefully selected 5-Star beachfront resort',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Airport transfers',

      'Bottled mineral water during transfers',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees to attractions, national parks, and protected areas',

      'Meals not mentioned in the itinerary',

      'Optional tours and activities',

      'Personal expenses',

      'Spa treatments and resort activities not included in the package',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included in the package. Guests can choose the attractions they wish to enjoy and pay any applicable fees directly during their tour.',



    goodToKnow: [

      'Perfect honeymoon destination',

      'Luxury beachfront resort',

      'Romantic Red Sea experience',

      'Ideal for newlyweds',

      'Relaxing and private atmosphere'

    ],



    relatedPackagesIds: [

      2002,

      2006,

      2008

    ]

  },


  // =====================================================
  // 8. Ultimate Honeymoon Egypt
  // =====================================================

  {

    id: 2008,

    category: 'honeymoon',

    title: 'Ultimate Honeymoon Egypt',

    slug: 'ultimate-honeymoon-egypt',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Honeymoon',

      'Luxury',

      'Romantic',

      'Cultural',

      'Historical',

      'Nile Cruise',

      'Beach Holiday'

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

      'The ultimate honeymoon experience in Egypt combining Cairo, Luxor, Aswan, a luxury Nile Cruise, Abu Simbel, and Red Sea relaxation.',



    description:

      'Start your new life together with an unforgettable luxury honeymoon across Egypt. Explore ancient wonders, sail the legendary Nile, discover magnificent temples, and relax on the beautiful Red Sea coast.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Luxury Nile Cruise',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Temple of Queen Hatshepsut',

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

          'Meet and assist upon arrival at Cairo International Airport. Transfer to your luxury hotel.',

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

          'Explore Luxor’s greatest historical sites.',

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

          'Enjoy sailing along the Nile and visit Edfu Temple.',

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

          'Visit the magnificent Abu Simbel Temples and return to your cruise.',

        activities: [

          'Abu Simbel Temples'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 8,

        title: 'Transfer to Hurghada',

        description:

          'Transfer from Aswan to Hurghada for a relaxing Red Sea honeymoon.',

        overnight: 'Hurghada'

      },


      {

        day: 9,

        title: 'Red Sea Relaxation',

        description:

          'Enjoy your luxury beachfront resort and beautiful Red Sea views.',

        overnight: 'Hurghada'

      },


      {

        day: 10,

        title: 'Red Sea Activities',

        description:

          'Enjoy optional snorkeling, diving, or romantic sea experiences.',

        overnight: 'Hurghada'

      },


      {

        day: 11,

        title: 'Final Romantic Day',

        description:

          'Spend your final honeymoon day relaxing at the resort.',

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

          'Private Felucca Ride'

        ]

      },


      {

        destination: 'Luxor',

        activities: [

          'Hot Air Balloon',

          'Valley of the Queens',

          'Tomb of Nefertari',

          'Sound & Light Show'

        ]

      },


      {

        destination: 'Aswan',

        activities: [

          'Nubian Village',

          'Felucca Ride',

          'Kalabsha Temple'

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

          'Quad Bike Adventure',

          'Romantic Sunset Cruise'

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

      'Entrance fees are not included in the package. Guests can choose the attractions they wish to visit and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Ultimate honeymoon experience',

      'Luxury hotels and Nile Cruise',

      'Perfect combination of culture and relaxation',

      'Private romantic journey',

      'Ideal for newlyweds'

    ],



    relatedPackagesIds: [

      2003,

      2004,

      2005,

      2006,

      2007

    ]

  }

];
