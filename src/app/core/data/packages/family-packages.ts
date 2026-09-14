import { Package } from "../../models/package.model";

export const FAMILY_PACKAGES: Package[] = [

  // =====================================================
  // 1. 3 Days Cairo City Break
  // =====================================================

{
  id: 1001,

  title: '3 Days Cairo City Break',

  slug: '3-days-cairo-city-break',


  destination: {
    id: 1,
    name: 'Cairo',
    slug: 'cairo'
  },


  type: [
    'Family',
    'Cultural',
    'Private Tour',
    'City Break'
  ],


  category: 'family',


  duration: {
    value: 3,
    unit: 'days',
    text: '3 Days / 2 Nights'
  },


  price: 0,

  oldPrice: undefined,


  rating: 0,

  reviews: 0,


  coverImage: '',

  images: [],


  shortDescription:
    'Enjoy the perfect 3 Days Cairo City Break and discover the Great Pyramids of Giza, the Sphinx, the Grand Egyptian Museum, Old Cairo, and Khan El Khalili with a private Egyptologist guide and comfortable hotel accommodation.',


  description:
    'Experience the magic of Egypt’s capital with a short vacation designed for travelers who want to discover Cairo’s most famous landmarks. Explore ancient wonders, museums, historic churches, and traditional markets while enjoying private transportation and expert guidance.',



  highlights: [

    'Visit the Great Pyramids of Giza',

    'Explore the Great Sphinx',

    'Discover the Valley Temple',

    'Visit the Grand Egyptian Museum',

    'Explore Old Cairo',

    'Visit the Hanging Church',

    'Visit Abu Serga Church',

    'Explore Ben Ezra Synagogue',

    'Wander through Khan El Khalili Bazaar',

    'Private Egyptologist guide',

    'Private air-conditioned transportation'

  ],



  itinerary: [

    {
      day: 1,

      title: 'Arrival in Cairo',

      description:
        'Meet and assist upon arrival at Cairo International Airport followed by transfer to your hotel.',

      overnight: 'Cairo'
    },


    {
      day: 2,

      title: 'Giza Pyramids & Cairo Highlights',

      description:
        'Explore the Great Pyramids of Giza, Great Sphinx, Valley Temple, Grand Egyptian Museum, and Old Cairo.',

      activities: [

        'Great Pyramids of Giza',

        'Great Sphinx',

        'Valley Temple',

        'Grand Egyptian Museum',

        'Old Cairo',

        'Khan El Khalili Bazaar'

      ],

      overnight: 'Cairo'
    },


    {
      day: 3,

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

        'Memphis & Saqqara Tour'

      ]

    }

  ],



  includes: [

    'Airport transfers',

    '2 Nights accommodation in Cairo hotel',

    'Daily breakfast',

    'Private air-conditioned transportation',

    'Professional Egyptologist guide',

    'Private sightseeing tours',

    'Bottled mineral water',

    'All taxes and service charges'

  ],



  excludes: [

    'International flights',

    'Egypt entry visa',

    'Entrance fees not mentioned',

    'Meals not mentioned',

    'Optional excursions',

    'Personal expenses',

    'Tipping'

  ],



  entranceFeePolicy:

    'Entrance fees are not included unless specifically mentioned. Guests can choose additional attractions and pay fees directly during the tour.',



  goodToKnow: [

    'Perfect short family getaway',

    'Suitable for families and couples',

    'Private guided experience',

    'Comfortable transportation'

  ],



  relatedPackagesIds: [

    1002,

    1004,

    1005

  ]

},
    // =====================================================
  // 2. 4 Days Cairo & Alexandria Tour by Private Car
  // =====================================================

  {
    id: 1002,

    title: '4 Days Cairo & Alexandria Tour by Private Car',

    slug: '4-days-cairo-alexandria-tour-private-car',


    destination: {
      id: 1,
      name: 'Cairo',
      slug: 'cairo'
    },


    type: [

      'Family',

      'Cultural',

      'Historical',

      'Private Tour'

    ],


    category: 'family',


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

      'Explore Cairo and Alexandria in 4 unforgettable days. Visit the Pyramids of Giza, Grand Egyptian Museum, Catacombs of Kom El Shoqafa, Bibliotheca Alexandrina, Qaitbay Citadel, and more with a private Egyptologist guide.',


    description:

      'Discover two of Egypt’s most iconic cities combining ancient history, cultural heritage and Mediterranean beauty while traveling comfortably by private air-conditioned vehicle.',


    highlights: [

      'Visit the Great Pyramids of Giza',

      'Explore the Great Sphinx',

      'Visit the Valley Temple',

      'Discover the Grand Egyptian Museum',

      'Explore the Catacombs of Kom El Shoqafa',

      'Visit Pompey’s Pillar',

      'Discover Bibliotheca Alexandrina',

      'Explore Citadel of Qaitbay',

      'Walk along Alexandria Corniche'

    ],


    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet and assist at Cairo International Airport and transfer to your hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids & Grand Egyptian Museum',

        description:

          'Explore the Giza Plateau and visit the Great Pyramids, Sphinx, Valley Temple and Grand Egyptian Museum.',

        overnight: 'Cairo'

      },


      {

        day: 3,

        title: 'Alexandria Tour',

        description:

          'Discover Alexandria attractions including Catacombs of Kom El Shoqafa, Pompey’s Pillar, Bibliotheca Alexandrina and Qaitbay Citadel.',

        overnight: 'Cairo'

      },


      {

        day: 4,

        title: 'Departure',

        description:

          'Transfer to Cairo International Airport for departure flight.'

      }

    ],


    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Nile Dinner Cruise',

          'Sound & Light Show',

          'Memphis & Saqqara Tour',

          'Cairo Tower'

        ]

      }

    ],


    includes: [

      'Meet and assist at Cairo Airport',

      'Airport transfers',

      '3 nights hotel accommodation',

      'Daily breakfast',

      'Lunch during sightseeing tours',

      'Private Egyptologist guide',

      'Private air-conditioned vehicle',

      'Entrance fees to mentioned attractions',

      'Bottled water',

      'All taxes and service charges'

    ],


    excludes: [

      'International flights',

      'Egypt entry visa',

      'Optional excursions',

      'Dinner and beverages',

      'Personal expenses',

      'Tipping'

    ],


    entranceFeePolicy:

      'Entrance fees to all mentioned attractions are included according to the package details.',


    goodToKnow: [

      'Private transportation throughout the tour',

      'Suitable for families and couples',

      'Available daily throughout the year',

      'Hotel upgrade options available'

    ],


    relatedPackagesIds: [

      1001,

      1003,

      1005

    ]

  },
    // =====================================================
  // 3. Cairo & Alexandria Tour by Train
  // =====================================================

  {
    id: 1003,

    title: 'Cairo & Alexandria Tour by Train',

    slug: 'cairo-alexandria-tour-by-train',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Family',

      'Cultural',

      'Historical',

      'Train Tour'

    ],


    category: 'family',


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

      'Discover the highlights of Cairo and Alexandria with a comfortable family-friendly tour including ancient Egyptian landmarks, museums, and Mediterranean attractions.',



    description:

      'Enjoy an unforgettable Egyptian adventure combining the historical treasures of Cairo with the coastal beauty of Alexandria. Travel comfortably and explore Egypt’s most famous attractions with a professional guide.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Valley Temple',

      'Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Catacombs of Kom El Shoqafa',

      'Pompey’s Pillar',

      'Bibliotheca Alexandrina',

      'Citadel of Qaitbay',

      'Alexandria Corniche'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Arrival at Cairo International Airport. Meet and assist service followed by transfer to your hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids & Cairo Highlights',

        description:

          'Visit the Great Pyramids of Giza, Great Sphinx, Valley Temple and explore the treasures of Ancient Egypt.',

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

          'Discover the Egyptian Museum treasures and enjoy shopping at the historic Khan El Khalili Bazaar.',

        activities: [

          'Egyptian Museum',

          'Khan El Khalili Bazaar'

        ],

        overnight: 'Cairo'

      },


      {

        day: 4,

        title: 'Alexandria Day Trip',

        description:

          'Travel to Alexandria and explore the ancient and modern attractions of the Mediterranean city.',

        activities: [

          'Catacombs of Kom El Shoqafa',

          'Pompey’s Pillar',

          'Bibliotheca Alexandrina',

          'Qaitbay Citadel',

          'Alexandria Corniche'

        ],

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

          'Grand Egyptian Museum',

          'Nile Dinner Cruise',

          'Sound & Light Show',

          'Memphis & Saqqara Tour'

        ]

      }

    ],



    includes: [

      'Airport pickup and drop-off',

      '4 Nights accommodation in Cairo hotel',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Professional Egyptologist guide',

      'Train tickets to Alexandria',

      'Private sightseeing tours',

      'Bottled mineral water',

      'All taxes and service charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees not mentioned',

      'Meals not mentioned',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees depend on the selected sightseeing program and can be paid directly during the tour.',



    goodToKnow: [

      'Family-friendly experience',

      'Comfortable transportation',

      'Suitable for children and adults',

      'Private guided tours available'

    ],



    relatedPackagesIds: [

      1001,

      1002,

      1004

    ]

  },
    // =====================================================
  // 4. Cairo Family Vacation
  // =====================================================

  {
    id: 1004,

    title: 'Cairo Family Vacation',

    slug: 'cairo-family-vacation',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Family',

      'Holiday',

      'Cultural',

      'Historical',

      'Private Tour'

    ],


    category: 'family',


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

      'Enjoy an unforgettable family holiday in Cairo combining ancient Egyptian wonders, museums, cultural experiences, and exciting activities suitable for all family members.',



    description:

      'Discover Cairo with your family through a relaxed itinerary designed for adults and children. Explore the legendary pyramids, fascinating museums, historic areas, and enjoy comfortable accommodation with private guided tours.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Egyptian Museum',

      'Grand Egyptian Museum',

      'Khan El Khalili Bazaar',

      'Old Cairo',

      'Family-friendly activities',

      'Private Egyptologist Guide',

      'Comfortable hotel accommodation'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet and assist upon arrival at Cairo International Airport followed by transfer to your family hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids Adventure',

        description:

          'Enjoy a family adventure visiting the Great Pyramids, Sphinx and Valley Temple.',

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

        title: 'Egyptian Museum & Old Cairo',

        description:

          'Explore ancient Egyptian treasures and discover the historical streets of Old Cairo.',

        activities: [

          'Egyptian Museum',

          'Old Cairo',

          'Hanging Church',

          'Ben Ezra Synagogue'

        ],

        overnight: 'Cairo'

      },


      {

        day: 4,

        title: 'Family Fun Day',

        description:

          'Enjoy a relaxing day with optional family activities and entertainment.',

        activities: [

          'Cairo attractions',

          'Shopping',

          'Family activities'

        ],

        overnight: 'Cairo'

      },


      {

        day: 5,

        title: 'Khan El Khalili & Cairo Experience',

        description:

          'Visit the famous Khan El Khalili Bazaar and enjoy the traditional atmosphere of Cairo.',

        activities: [

          'Khan El Khalili Bazaar',

          'Local markets'

        ],

        overnight: 'Cairo'

      },


      {

        day: 6,

        title: 'Departure',

        description:

          'Transfer to Cairo International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Grand Egyptian Museum',

          'Nile Dinner Cruise',

          'Cairo Tower',

          'Sound & Light Show',

          'Memphis & Saqqara Tour',

          'Felucca Ride'

        ]

      }

    ],



    includes: [

      'Airport pickup and drop-off',

      '5 Nights accommodation in Cairo hotel',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Professional Egyptologist guide',

      'Private sightseeing tours',

      'Bottled mineral water',

      'All taxes and service charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees not mentioned',

      'Meals not mentioned',

      'Optional activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included unless specifically mentioned. Guests can select additional attractions and pay fees directly during the tour.',



    goodToKnow: [

      'Designed for families with children',

      'Flexible and comfortable itinerary',

      'Private guided experience',

      'Suitable for all ages'

    ],



    relatedPackagesIds: [

      1001,

      1003,

      1005

    ]

  },
    // =====================================================
  // 5. Cairo & Nile Family Package
  // =====================================================

  {
    id: 1005,

    title: 'Cairo & Nile Family Package',

    slug: 'cairo-nile-family-package',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Family',

      'Holiday',

      'Cultural',

      'Nile Cruise',

      'Private Tour'

    ],


    category: 'family',


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

      'Enjoy a wonderful family journey combining the historical treasures of Cairo with a relaxing Nile Cruise experience through Luxor and Aswan.',



    description:

      'Create unforgettable family memories while exploring the ancient wonders of Cairo and sailing along the legendary Nile River. Discover temples, monuments, and breathtaking landscapes with a comfortable private itinerary.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Egyptian Museum',

      'Luxury Nile Cruise',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Philae Temple',

      'Aswan High Dam',

      'Family-friendly experience'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Arrival at Cairo International Airport. Meet and assist service followed by transfer to your hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids Tour',

        description:

          'Enjoy a family tour to the Great Pyramids, Sphinx and Valley Temple.',

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

        title: 'Cairo Sightseeing & Fly to Luxor',

        description:

          'Visit Cairo highlights before transferring to Luxor to start your Nile Cruise.',

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

          'Explore the ancient wonders of Luxor including temples and royal tombs.',

        activities: [

          'Karnak Temple',

          'Luxor Temple',

          'Valley of the Kings',

          'Temple of Queen Hatshepsut'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 5,

        title: 'Edfu & Kom Ombo Temples',

        description:

          'Enjoy sailing on the Nile and visit the famous temples of Edfu and Kom Ombo.',

        activities: [

          'Edfu Temple',

          'Kom Ombo Temple'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 6,

        title: 'Aswan Highlights',

        description:

          'Discover Aswan attractions before enjoying your final cruise experience.',

        activities: [

          'Philae Temple',

          'Aswan High Dam',

          'Unfinished Obelisk'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 7,

        title: 'Departure',

        description:

          'Transfer to Aswan Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Grand Egyptian Museum',

          'Nile Dinner Cruise',

          'Sound & Light Show',

          'Cairo Tower'

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

      'Airport pickup and drop-off',

      'Accommodation in selected hotels',

      'Luxury Nile Cruise accommodation',

      'Daily breakfast',

      'Full board meals during Nile Cruise',

      'Private air-conditioned transportation',

      'Professional Egyptologist guide',

      'Private sightseeing tours',

      'Bottled mineral water',

      'All taxes and service charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees not mentioned',

      'Personal expenses',

      'Optional tours',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included unless mentioned. Guests can choose additional sightseeing options and pay fees directly.',



    goodToKnow: [

      'Perfect for families',

      'Comfortable Nile experience',

      'Suitable for children',

      'Private guided tour',

      'Relaxed family itinerary'

    ],



    relatedPackagesIds: [

      1002,

      1004,

      1006

    ]

  },
    // =====================================================
  // 6. Egypt Family Adventure Package
  // =====================================================

  {
    id: 1006,

    title: 'Egypt Family Adventure Package',

    slug: 'egypt-family-adventure-package',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Family',

      'Adventure',

      'Cultural',

      'Historical',

      'Private Tour'

    ],


    category: 'family',


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

      'An exciting family adventure across Egypt combining Cairo, Luxor, Aswan, ancient monuments, Nile experiences, and unforgettable cultural activities.',



    description:

      'Enjoy a complete Egyptian family adventure designed to create unforgettable memories. Explore ancient wonders, discover Pharaohs history, experience the Nile, and enjoy comfortable private tours suitable for all ages.',



    highlights: [

      'Great Pyramids of Giza',

      'Grand Egyptian Museum',

      'Luxor Temples',

      'Valley of the Kings',

      'Nile Cruise Experience',

      'Philae Temple',

      'Aswan High Dam',

      'Nubian Village',

      'Family-friendly activities',

      'Private Egyptologist Guide'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Arrival at Cairo International Airport. Meet and assist service followed by transfer to your hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Giza Pyramids & Museum',

        description:

          'Discover the wonders of Ancient Egypt including the pyramids and the Egyptian Museum.',

        activities: [

          'Great Pyramids of Giza',

          'Great Sphinx',

          'Egyptian Museum'

        ],

        overnight: 'Cairo'

      },


      {

        day: 3,

        title: 'Fly to Luxor',

        description:

          'Transfer to Cairo Airport and fly to Luxor to begin your Upper Egypt adventure.',

        overnight: 'Luxor'

      },


      {

        day: 4,

        title: 'Luxor Historical Tour',

        description:

          'Explore the legendary temples and tombs of ancient Luxor.',

        activities: [

          'Karnak Temple',

          'Luxor Temple',

          'Valley of the Kings',

          'Temple of Queen Hatshepsut'

        ],

        overnight: 'Luxor'

      },


      {

        day: 5,

        title: 'Transfer to Aswan',

        description:

          'Travel to Aswan and enjoy the beautiful Nile landscapes.',

        overnight: 'Aswan'

      },


      {

        day: 6,

        title: 'Aswan Highlights',

        description:

          'Discover Aswan’s most famous attractions and enjoy a family-friendly cultural experience.',

        activities: [

          'Philae Temple',

          'Aswan High Dam',

          'Unfinished Obelisk',

          'Nubian Village'

        ],

        overnight: 'Aswan'

      },


      {

        day: 7,

        title: 'Family Leisure Day',

        description:

          'Enjoy free time with optional activities and relaxing family experiences.',

        overnight: 'Aswan'

      },


      {

        day: 8,

        title: 'Departure',

        description:

          'Transfer to Aswan International Airport for your departure flight.'

      }

    ],



    optionalTours: [

      {

        destination: 'Cairo',

        activities: [

          'Grand Egyptian Museum',

          'Nile Dinner Cruise',

          'Sound & Light Show',

          'Cairo Tower'

        ]

      },


      {

        destination: 'Aswan',

        activities: [

          'Abu Simbel Temples',

          'Nubian Village',

          'Felucca Ride',

          'Botanical Garden'

        ]

      }

    ],



    includes: [

      'Airport transfers',

      'Accommodation in selected hotels',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Professional Egyptologist guide',

      'Private sightseeing tours',

      'Domestic transportation as mentioned',

      'Bottled mineral water',

      'All taxes and service charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees not mentioned',

      'Meals not mentioned',

      'Optional activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included unless specified. Guests can select additional attractions and pay fees directly during the tour.',



    goodToKnow: [

      'Perfect family adventure',

      'Suitable for children and adults',

      'Private and flexible itinerary',

      'Cultural and educational experience',

      'Comfortable transportation'

    ],



    relatedPackagesIds: [

      1005,

      1007,

      1008

    ]

  },
    // =====================================================
  // 7. Egypt Family Discovery Package
  // =====================================================

  {
    id: 1007,

    title: 'Egypt Family Discovery Package',

    slug: 'egypt-family-discovery-package',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Family',

      'Discovery',

      'Cultural',

      'Historical',

      'Private Tour'

    ],


    category: 'family',


    duration: {

      value: 9,

      unit: 'days',

      text: '9 Days / 8 Nights'

    },


    price: 0,

    oldPrice: undefined,


    rating: 0,

    reviews: 0,


    coverImage: '',

    images: [],



    shortDescription:

      'Discover Egypt with your family through an amazing journey covering Cairo, Luxor, Aswan, ancient monuments, museums, and unforgettable cultural experiences.',



    description:

      'Experience the best of Egypt with a family-friendly itinerary combining history, adventure, and relaxation. Explore the ancient civilization, visit iconic landmarks, and enjoy private guided tours designed for all ages.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Grand Egyptian Museum',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Philae Temple',

      'Nubian Village',

      'Traditional Egyptian experiences',

      'Private Egyptologist Guide'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet and assist at Cairo International Airport followed by transfer to your hotel.',

        overnight: 'Cairo'

      },


      {

        day: 2,

        title: 'Pyramids & Ancient Cairo',

        description:

          'Explore the most famous landmarks of ancient Egypt and discover Cairo’s historical treasures.',

        activities: [

          'Great Pyramids of Giza',

          'Great Sphinx',

          'Valley Temple',

          'Old Cairo'

        ],

        overnight: 'Cairo'

      },


      {

        day: 3,

        title: 'Museum & Cultural Experience',

        description:

          'Discover Egyptian history through museums and local cultural attractions.',

        activities: [

          'Grand Egyptian Museum',

          'Egyptian Museum',

          'Khan El Khalili Bazaar'

        ],

        overnight: 'Cairo'

      },


      {

        day: 4,

        title: 'Fly to Luxor',

        description:

          'Transfer to Cairo Airport and fly to Luxor. Upon arrival transfer to your hotel.',

        overnight: 'Luxor'

      },


      {

        day: 5,

        title: 'Luxor East & West Bank',

        description:

          'Explore the magnificent temples and tombs of ancient Luxor.',

        activities: [

          'Karnak Temple',

          'Luxor Temple',

          'Valley of the Kings',

          'Temple of Queen Hatshepsut',

          'Colossi of Memnon'

        ],

        overnight: 'Luxor'

      },


      {

        day: 6,

        title: 'Transfer to Aswan',

        description:

          'Travel to Aswan while enjoying the beautiful Nile views.',

        overnight: 'Aswan'

      },


      {

        day: 7,

        title: 'Aswan Tour',

        description:

          'Discover the highlights of Aswan and experience Nubian culture.',

        activities: [

          'Philae Temple',

          'Aswan High Dam',

          'Unfinished Obelisk',

          'Nubian Village'

        ],

        overnight: 'Aswan'

      },


      {

        day: 8,

        title: 'Family Leisure Day',

        description:

          'Enjoy free time and optional family activities.',

        overnight: 'Aswan'

      },


      {

        day: 9,

        title: 'Departure',

        description:

          'Transfer to Aswan International Airport for your departure flight.'

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

        destination: 'Aswan',

        activities: [

          'Abu Simbel Temples',

          'Felucca Ride',

          'Botanical Garden'

        ]

      }

    ],



    includes: [

      'Airport transfers',

      'Accommodation in selected family-friendly hotels',

      'Daily breakfast',

      'Private air-conditioned transportation',

      'Professional Egyptologist guide',

      'Private sightseeing tours',

      'Domestic flights as mentioned',

      'Bottled mineral water',

      'All taxes and service charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees not mentioned',

      'Meals not mentioned',

      'Optional activities',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included unless specified. Guests can customize their sightseeing program and pay fees directly.',



    goodToKnow: [

      'Educational family experience',

      'Suitable for children',

      'Private flexible itinerary',

      'Perfect introduction to Egypt',

      'Comfortable travel pace'

    ],



    relatedPackagesIds: [

      1005,

      1006,

      1008

    ]

  },
    // =====================================================
  // 8. Ultimate Egypt Family Experience
  // =====================================================

  {

    id: 1008,

    title: 'Ultimate Egypt Family Experience',

    slug: 'ultimate-egypt-family-experience',


    destination: {

      id: 1,

      name: 'Cairo',

      slug: 'cairo'

    },


    type: [

      'Family',

      'Luxury',

      'Cultural',

      'Historical',

      'Nile Cruise',

      'Beach Holiday'

    ],


    category: 'family',


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

      'The ultimate family journey across Egypt combining Cairo, Luxor, Aswan, a luxury Nile Cruise, Abu Simbel, and Red Sea relaxation.',



    description:

      'Create unforgettable family memories with the ultimate Egypt experience. Discover ancient wonders, sail the legendary Nile, explore magnificent temples, and relax on the beautiful Red Sea coast with a comfortable private itinerary.',



    highlights: [

      'Great Pyramids of Giza',

      'Great Sphinx',

      'Grand Egyptian Museum',

      'Luxury Nile Cruise',

      'Karnak Temple',

      'Luxor Temple',

      'Valley of the Kings',

      'Edfu Temple',

      'Kom Ombo Temple',

      'Philae Temple',

      'Abu Simbel Temples',

      'Hurghada Red Sea Experience',

      'Family-friendly activities'

    ],



    itinerary: [

      {

        day: 1,

        title: 'Arrival in Cairo',

        description:

          'Meet and assist upon arrival at Cairo International Airport followed by transfer to your family hotel.',

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

          'Grand Egyptian Museum'

        ],

        overnight: 'Cairo'

      },


      {

        day: 3,

        title: 'Cairo Cultural Experience',

        description:

          'Discover the history and culture of Cairo through museums and traditional markets.',

        activities: [

          'Egyptian Museum',

          'Khan El Khalili Bazaar',

          'Old Cairo'

        ],

        overnight: 'Cairo'

      },


      {

        day: 4,

        title: 'Fly to Luxor & Nile Cruise',

        description:

          'Transfer to Cairo Airport, fly to Luxor and board your luxury Nile Cruise.',

        overnight: 'Nile Cruise'

      },


      {

        day: 5,

        title: 'Luxor East & West Bank',

        description:

          'Explore the greatest monuments of ancient Luxor.',

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

        day: 6,

        title: 'Sailing to Edfu',

        description:

          'Enjoy sailing along the Nile and visit the Temple of Horus.',

        activities: [

          'Edfu Temple'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 7,

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

        day: 8,

        title: 'Abu Simbel Excursion',

        description:

          'Visit the magnificent Abu Simbel Temples and return to your cruise.',

        activities: [

          'Abu Simbel Temples'

        ],

        overnight: 'Nile Cruise'

      },


      {

        day: 9,

        title: 'Transfer to Hurghada',

        description:

          'Transfer from Aswan to Hurghada for a relaxing family beach holiday.',

        overnight: 'Hurghada'

      },


      {

        day: 10,

        title: 'Red Sea Family Relaxation',

        description:

          'Enjoy the beach, resort facilities, and optional family activities.',

        overnight: 'Hurghada'

      },


      {

        day: 11,

        title: 'Red Sea Adventure Day',

        description:

          'Enjoy optional snorkeling, desert safari, or family sea activities.',

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

          'Nile Dinner Cruise',

          'Sound & Light Show',

          'Cairo Tower',

          'Memphis & Saqqara Tour',

          'Felucca Ride'

        ]

      },


      {

        destination: 'Aswan',

        activities: [

          'Nubian Village',

          'Felucca Ride',

          'Botanical Garden',

          'Kalabsha Temple'

        ]

      },


      {

        destination: 'Hurghada',

        activities: [

          'Orange Bay',

          'Paradise Island',

          'Snorkeling',

          'Diving',

          'Desert Safari',

          'Quad Bike Adventure',

          'Dolphin House'

        ]

      }

    ],



    includes: [

      'Meet, Assist & Escort upon arrival and departure',

      'Accommodation in selected 5-Star hotels',

      'Luxury Nile Cruise accommodation',

      'Daily breakfast',

      'Full board meals during Nile Cruise',

      'Private air-conditioned transportation',

      'Professional Egyptologist Guide',

      'Private guided sightseeing tours',

      'Domestic flights as mentioned',

      'Airport transfers',

      'Bottled mineral water',

      'All Taxes & Service Charges'

    ],



    excludes: [

      'International flights',

      'Egypt entry visa',

      'Entrance fees not mentioned',

      'Drinks during Nile Cruise',

      'Meals not mentioned',

      'Optional tours',

      'Personal expenses',

      'Tipping'

    ],



    entranceFeePolicy:

      'Entrance fees are not included unless specified. Families can choose additional attractions and pay entrance fees directly during the tour.',



    goodToKnow: [

      'Ultimate family holiday in Egypt',

      'Perfect combination of history and relaxation',

      'Luxury hotels and Nile Cruise',

      'Suitable for children and adults',

      'Private flexible itinerary'

    ],



    relatedPackagesIds: [

      1005,

      1006,

      1007

    ]

  }

];
