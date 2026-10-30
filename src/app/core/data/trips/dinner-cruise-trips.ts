import { Trip } from '../../models/trip.model';

export const DINNER_CRUISE_TRIPS: Trip[] = [
  // 1. Cairo Nile Dinner Cruise
  {
    id: 7001,
    title: 'Cairo Nile River Dinner Cruise with Oriental & Tanoura Show',
    slug: 'private-cairo-nile-dinner-cruise',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Dinner Cruise', 'Night Tour', 'Entertainment'],
    duration: { value: 4, unit: 'hours', text: '3–4 Hours' },
    price: 45,
    oldPrice: 65,
    rating: 4.7,
    reviews: 130,
    coverImage: 'assets/images/trips/dinner/7001/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7001/${i + 1}.webp`),
    shortDescription: 'Sail along the illuminated Nile River in Cairo aboard a floating restaurant. Enjoy an open buffet dinner with live music, belly dancing, and Tanoura show[cite: 2].',
    highlights: ['2-hour sailing on the Nile River[cite: 2]', 'Open buffet dinner with international and Egyptian dishes[cite: 2]', 'Live folklore show and Tanoura performance[cite: 2]', 'Illuminated Cairo skyline views[cite: 2]'],
    itinerary: [
      { title: 'Hotel Pickup', description: 'Private transfer from your Cairo or Giza hotel to the Nile docking pier[cite: 2].' },
      { title: 'Nile Cruise & Buffet Dinner', description: 'Board the cruise ship and enjoy a wide selection of buffet dishes while sailing[cite: 2].' },
      { title: 'Oriental Folklore Show', description: 'Watch the energetic Tanoura spinning performance, live band, and belly dance shows[cite: 2].' }
    ],
    includes: ['Private hotel pickup and drop-off[cite: 2]', 'Dinner cruise ticket[cite: 2]', 'Open buffet dinner[cite: 2]', 'Live folklore and musical entertainment[cite: 2]', 'All taxes and service charges[cite: 2]'],
    excludes: ['Alcoholic and extra beverages[cite: 2]', 'Personal expenses[cite: 2]', 'Tips[cite: 2]'],
    whatToBring: ['Camera[cite: 2]', 'Comfortable smart clothing[cite: 2]']
  },

  // 2. Hurghada Red Sea Sunset Dinner Cruise
  {
    id: 7002,
    title: 'Red Sea Sunset Dinner Cruise from Hurghada',
    slug: 'hurghada-sunset-dinner-cruise',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Dinner Cruise', 'Sunset Tour', 'Boat Trip'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 45,
    oldPrice: 60,
    rating: 4.8,
    reviews: 95,
    coverImage: 'assets/images/trips/dinner/7002/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7002/${i + 1}.webp`),
    shortDescription: 'Sail along Hurghada coastline at sunset aboard a luxury yacht, enjoying a fresh seafood and barbecue dinner with romantic evening sea views[cite: 4].',
    highlights: ['Sunset cruise over Red Sea waters[cite: 4]', 'Freshly prepared dinner buffet onboard[cite: 4]', 'Panoramic coastal views and relaxing music[cite: 4]', 'Round-trip hotel transfers[cite: 4]'],
    itinerary: [
      { title: 'Departure & Sunset', description: 'Embark at marina and sail as the sun sets over the Red Sea mountains[cite: 4].' },
      { title: 'Dinner at Sea', description: 'Enjoy delicious seafood and barbecue dishes under the stars[cite: 4].' }
    ],
    includes: ['Hotel transfers[cite: 4]', 'Cruise ticket[cite: 4]', 'Dinner & soft drinks[cite: 4]'],
    excludes: ['Special photography[cite: 4]', 'Tips[cite: 4]'],
    whatToBring: ['Light jacket for the evening[cite: 4]', 'Camera[cite: 4]']
  },

  // 3. Luxor Sunset Cruise & Dinner
  {
    id: 7003,
    title: 'Luxor Nile Sunset Cruise & Authentic Egyptian Dinner',
    slug: 'luxor-nile-sunset-dinner-cruise',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Dinner Cruise', 'Romantic', 'Nile Sailing'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 50,
    oldPrice: 70,
    rating: 4.9,
    reviews: 110,
    coverImage: 'assets/images/trips/dinner/7003/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7003/${i + 1}.webp`),
    shortDescription: 'Glide past Luxor Temple and the illuminated West Bank cliffs on a traditional motor cruiser, followed by a multi-course dinner.',
    highlights: ['Sunset river cruise past ancient Thebes', 'Illuminated Luxor Temple views from the water', 'Authentic multi-course Egyptian dinner', 'Private round-trip transfers'],
    itinerary: [
      { title: 'Sunset Cruise', description: 'Sail along the Nile as the sun dips behind the West Bank.' },
      { title: 'Dinner Onboard', description: 'Enjoy fresh Egyptian dishes and traditional desserts.' }
    ],
    includes: ['Private transfers', 'Boat cruise', 'Dinner meal', 'Mineral water'],
    excludes: ['Alcoholic drinks', 'Tips'],
    whatToBring: ['Camera', 'Light jacket']
  },

  // 4. Aswan Felucca Sunset & Nubian Dinner
  {
    id: 7004,
    title: 'Aswan Nile Sunset Felucca Cruise with Nubian Dinner',
    slug: 'aswan-sunset-felucca-nubian-dinner',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Dinner Cruise', 'Nubian Culture', 'Sailing'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 55,
    oldPrice: 75,
    rating: 5.0,
    reviews: 85,
    coverImage: 'assets/images/trips/dinner/7004/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7004/${i + 1}.webp`),
    shortDescription: 'Sail past Elephantine Island on a traditional felucca at sunset, docking at a Nubian island home for an authentic dinner.',
    highlights: ['Traditional wooden felucca sail around Nile islands', 'Home-cooked traditional Nubian dinner on West Bank', 'Nubian musical performance', 'Hotel/cruise transfers'],
    itinerary: [
      { title: 'Felucca Sailing', description: 'Sail around Elephantine Island during golden hour.' },
      { title: 'Nubian Dinner', description: 'Dine inside an authentic painted Nubian house overlooking the Nile.' }
    ],
    includes: ['Felucca sailing', 'Home-cooked Nubian dinner', 'Transfers', 'Water and tea'],
    excludes: ['Personal expenses', 'Tipping'],
    whatToBring: ['Camera', 'Comfortable clothes']
  },

  // 5. VIP Cairo 5-Star Cruise
  {
    id: 7005,
    title: 'VIP 5-Star Maxim Dinner Cruise on Cairo Nile',
    slug: 'maxim-vip-nile-dinner-cruise-cairo',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Dinner Cruise', 'VIP', 'Fine Dining'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 65,
    oldPrice: 90,
    rating: 4.8,
    reviews: 160,
    coverImage: 'assets/images/trips/dinner/7005/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7005/${i + 1}.webp`),
    shortDescription: 'Experience one of Cairo’s premier floating restaurants: gourmet open buffet, live Western band, and folklore show.',
    highlights: ['Premium 5-star river boat', 'Extensive international buffet with carved meats and seafood', 'Live orchestra, belly dance, and Tanoura show', 'Private car transfers'],
    itinerary: [
      { title: 'VIP Pickup', description: 'Private transfer to Zamalek pier.' },
      { title: 'Cruise & Show', description: '2 hours of luxury sailing with live orchestra and gourmet buffet.' }
    ],
    includes: ['Private transfers', 'Cruise ticket', 'Full gourmet buffet', 'Live shows'],
    excludes: ['Beverages', 'Tips'],
    whatToBring: ['Smart casual attire', 'Camera']
  },

  // 6. Private Yacht Dinner in Hurghada
  {
    id: 7006,
    title: 'Private Yacht Romantic Sunset Dinner in Hurghada',
    slug: 'private-yacht-romantic-dinner-hurghada',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Dinner Cruise', 'Private Yacht', 'Romantic'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 160,
    oldPrice: 220,
    rating: 5.0,
    reviews: 45,
    coverImage: 'assets/images/trips/dinner/7006/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7006/${i + 1}.webp`),
    shortDescription: 'A completely private yacht charter for two or a small family with a private chef preparing a fresh seafood and steak candlelit dinner[cite: 4].',
    highlights: ['Exclusive private luxury yacht[cite: 4]', 'Private onboard chef and waiter', 'Candlelit dinner under the stars[cite: 4]', 'Complimentary fruit basket and drinks'],
    itinerary: [
      { title: 'Private Embarkation', description: 'Board private yacht and cruise away from coast[cite: 4].' },
      { title: 'Sunset Candlelit Dinner', description: 'Enjoy multi-course freshly prepared dinner on deck[cite: 4].' }
    ],
    includes: ['Private yacht charter[cite: 4]', 'Freshly cooked multi-course dinner[cite: 4]', 'Soft drinks and fruit[cite: 4]', 'Transfers[cite: 4]'],
    excludes: ['Alcoholic beverages[cite: 4]', 'Tipping[cite: 4]'],
    whatToBring: ['Smart casual attire', 'Camera']
  },

  // 7. Pirate Yacht Seafood Dinner Sharm
  {
    id: 7007,
    title: 'Sharm El Sheikh Pirate Yacht Seafood Dinner Cruise',
    slug: 'sharm-pirate-yacht-dinner-cruise',
    destination: { id: 6, name: 'Sharm El Sheikh', slug: 'sharm-el-sheikh' },
    type: ['Dinner Cruise', 'Themed Yacht', 'Seafood'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 55,
    oldPrice: 75,
    rating: 4.8,
    reviews: 125,
    coverImage: 'assets/images/trips/dinner/7007/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7007/${i + 1}.webp`),
    shortDescription: 'Sail on a pirate-themed wooden tall ship along Sharm coastline enjoying fresh seafood buffet, live singer, and evening sea breezes.',
    highlights: ['Atmospheric wooden pirate ship design', 'Fresh shrimp, calamari, and fish buffet', 'Live music entertainment on deck', 'Round-trip hotel transfers'],
    itinerary: [
      { title: 'Boarding & Sunset', description: 'Depart marina and cruise along illuminated coast.' },
      { title: 'Seafood Buffet & Music', description: 'Dine on seafood while enjoying live acoustic performances.' }
    ],
    includes: ['Hotel transfers', 'Pirate yacht cruise', 'Seafood buffet dinner', 'Soft drinks'],
    excludes: ['Special photos', 'Tips'],
    whatToBring: ['Light jacket', 'Camera']
  },

  // 8. Cairo Nile Lunch Cruise
  {
    id: 7008,
    title: 'Cairo Nile Lunch Cruise with Panoramic Sightseeing',
    slug: 'cairo-nile-lunch-cruise',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Dinner Cruise', 'Day Cruise', 'Buffet'],
    duration: { value: 3, unit: 'hours', text: '3–4 Hours' },
    price: 40,
    oldPrice: 55,
    rating: 4.7,
    reviews: 90,
    coverImage: 'assets/images/trips/dinner/7008/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7008/${i + 1}.webp`),
    shortDescription: 'Enjoy a relaxing daytime cruise on the Nile River in Cairo with a hot buffet lunch, beautiful river views, and gentle sailing[cite: 2].',
    highlights: ['Daytime river views of Cairo landmarks[cite: 2]', 'Hot Egyptian and international buffet[cite: 2]', 'Comfortable floating restaurant[cite: 2]', 'Private hotel transfers[cite: 2]'],
    itinerary: [
      { title: 'Hotel Pickup', description: 'Transfer to floating restaurant around 1:00 PM[cite: 2].' },
      { title: 'Lunch Cruise', description: '2 hours of leisurely daytime sailing with open buffet[cite: 2].' }
    ],
    includes: ['Private transfers[cite: 2]', 'Cruise ticket[cite: 2]', 'Buffet lunch[cite: 2]', 'Water[cite: 2]'],
    excludes: ['Extra beverages[cite: 2]', 'Tipping[cite: 2]'],
    whatToBring: ['Sunglasses', 'Camera']
  },

  // 9. El Gouna Catamaran Dinner Cruise
  {
    id: 7009,
    title: 'El Gouna Lagoon Catamaran Sunset Dinner Cruise',
    slug: 'el-gouna-lagoon-catamaran-dinner',
    destination: { id: 8, name: 'El Gouna', slug: 'el-gouna' },
    type: ['Dinner Cruise', 'Catamaran', 'Lagoon Tour'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 65,
    oldPrice: 85,
    rating: 4.9,
    reviews: 80,
    coverImage: 'assets/images/trips/dinner/7009/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7009/${i + 1}.webp`),
    shortDescription: 'Sail through the modern architecture and tranquil lagoons of El Gouna on a luxury catamaran with wine, appetizers, and BBQ dinner[cite: 4].',
    highlights: ['Catamaran cruise through El Gouna lagoons', 'Sunset views over Red Sea architecture', 'Fresh barbecue dinner buffet', 'Relaxed lounge atmosphere'],
    itinerary: [
      { title: 'Lagoon Sailing', description: 'Cruise past villas, bridges, and sea channels.' },
      { title: 'Dinner on Board', description: 'Enjoy barbecue buffet with evening lounge music.' }
    ],
    includes: ['Transfers from El Gouna/Hurghada', 'Catamaran cruise', 'Dinner & soft drinks'],
    excludes: ['Alcoholic drinks', 'Tips'],
    whatToBring: ['Camera', 'Sunglasses']
  },

  // 10. Luxor Riverside Dinner & Show Package
  {
    id: 7010,
    title: 'Karnak Sound & Light Show Combined with Nile-Side Dinner',
    slug: 'karnak-sound-light-dinner-package',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Dinner Cruise', 'Historical', 'Show'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 65,
    oldPrice: 90,
    rating: 4.9,
    reviews: 130,
    coverImage: 'assets/images/trips/dinner/7010/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/dinner/7010/${i + 1}.webp`),
    shortDescription: 'Attend the dramatic Karnak Temple Sound & Light show followed by a relaxing dinner at a prime riverside restaurant overlooking the Nile[cite: 6].',
    highlights: ['Karnak Sound & Light show admission[cite: 6]', 'Reserved riverside table for dinner[cite: 6]', 'Freshly cooked Egyptian specialties[cite: 6]', 'Private car transfers throughout[cite: 6]'],
    itinerary: [
      { title: 'Show at Karnak', description: 'Watch the illuminated history presentation at Karnak[cite: 6].' },
      { title: 'Riverside Dinner', description: 'Transfer to a riverfront restaurant for a 3-course dinner[cite: 6].' }
    ],
    includes: ['Private transfers[cite: 6]', 'Show entrance ticket[cite: 6]', 'Full dinner[cite: 6]'],
    excludes: ['Drinks during dinner[cite: 6]', 'Tips[cite: 6]'],
    whatToBring: ['Camera', 'Comfortable clothing']
  }
];
