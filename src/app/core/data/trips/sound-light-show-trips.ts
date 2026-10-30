import { Trip } from '../../models/trip.model';

export const SOUND_LIGHT_SHOW_TRIPS: Trip[] = [
  // 1. Giza Pyramids Sound & Light
  {
    id: 8001,
    title: 'Sound and Light Show at the Giza Pyramids',
    slug: 'giza-pyramids-sound-and-light-show',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Sound & Light Show', 'Night Tour', 'Historical'],
    duration: { value: 3, unit: 'hours', text: '2–3 Hours' },
    price: 40,
    oldPrice: 55,
    rating: 4.7,
    reviews: 165,
    coverImage: 'assets/images/trips/sound-light/8001/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8001/${i + 1}.webp`),
    shortDescription: 'Watch the Great Pyramids and Sphinx illuminated by dramatic lights and music as ancient voices narrate the story of the Pharaohs[cite: 2].',
    highlights: ['Evening visit to Giza Plateau[cite: 2]', 'Dramatic lighting on Sphinx & Pyramids[cite: 2]', 'Story of pyramid construction[cite: 2]', 'Private hotel transfers[cite: 2]'],
    itinerary: [
      { title: 'Hotel Pickup', description: 'Private transfer from Cairo hotel to Giza Plateau[cite: 2].' },
      { title: 'Show Presentation', description: 'Take seats facing Great Sphinx for 1-hour show[cite: 2].' }
    ],
    includes: ['Hotel transfers[cite: 2]', 'Show ticket[cite: 2]', 'Private transport[cite: 2]'],
    excludes: ['Food & drinks[cite: 2]', 'Tips[cite: 2]'],
    whatToBring: ['Light jacket in winter[cite: 2]', 'Camera[cite: 2]']
  },

  // 2. Karnak Temple Sound & Light
  {
    id: 8002,
    title: 'Karnak Temple Sound and Light Show in Luxor',
    slug: 'karnak-sound-and-light-show',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Sound & Light Show', 'Night Tour', 'Historical'],
    duration: { value: 2, unit: 'hours', text: '2 Hours' },
    price: 45,
    oldPrice: 60,
    rating: 4.8,
    reviews: 190,
    coverImage: 'assets/images/trips/sound-light/8002/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8002/${i + 1}.webp`),
    shortDescription: 'Walk through illuminated pylons and hypostyle hall of Karnak Temple at night, concluding with narration beside the Sacred Lake[cite: 6].',
    highlights: ['Walk through illuminated Karnak columns[cite: 6]', 'Grand finale beside Sacred Lake[cite: 6]', 'Story of ancient Thebes[cite: 6]', 'Private transfers from hotel/cruise[cite: 6]'],
    itinerary: [
      { title: 'Arrival & Entry', description: 'Private evening transfer to Karnak Complex[cite: 6].' },
      { title: 'Walking Show & Finale', description: 'Follow guided path and take seats by the lake[cite: 6].' }
    ],
    includes: ['Round-trip transfers[cite: 6]', 'Show ticket[cite: 6]', 'Taxes[cite: 6]'],
    excludes: ['Personal items[cite: 6]', 'Tips[cite: 6]'],
    whatToBring: ['Walking shoes', 'Light jacket']
  },

  // 3. Philae Temple Sound & Light
  {
    id: 8003,
    title: 'Philae Temple Sound and Light Show in Aswan',
    slug: 'philae-temple-sound-and-light-show',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Sound & Light Show', 'Island Temple', 'Mythology'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 45,
    oldPrice: 60,
    rating: 4.9,
    reviews: 140,
    coverImage: 'assets/images/trips/sound-light/8003/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8003/${i + 1}.webp`),
    shortDescription: 'Take a boat across the dark Nile to Agilkia Island to watch Philae Temple illuminated while hearing the legend of Isis and Osiris.',
    highlights: ['Night boat ride to Agilkia Island', 'Illuminated Temple of Isis', 'Dramatic narration of the myth of Osiris', 'Hotel and cruise transfers'],
    itinerary: [
      { title: 'Boat Crossing', description: 'Motorboat transfer to the island temple under the stars.' },
      { title: 'Show Experience', description: 'Walk through the lit colonnades and watch the seated multimedia finale.' }
    ],
    includes: ['Vehicle and boat transfers', 'Show ticket', 'Bottled water'],
    excludes: ['Personal expenses', 'Tips'],
    whatToBring: ['Camera', 'Light jacket']
  },

  // 4. Abu Simbel Temples Sound & Light
  {
    id: 8004,
    title: 'Abu Simbel Temples Sound and Light Show',
    slug: 'abu-simbel-sound-and-light-show',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Sound & Light Show', 'UNESCO', 'Monumental'],
    duration: { value: 2, unit: 'hours', text: '2 Hours' },
    price: 55,
    oldPrice: 75,
    rating: 5.0,
    reviews: 110,
    coverImage: 'assets/images/trips/sound-light/8004/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8004/${i + 1}.webp`),
    shortDescription: 'Witness the colossal statues of Ramesses II and Queen Nefertari brought to life by lasers and music facing Lake Nasser.',
    highlights: ['Projections onto colossal rock-cut temples', 'Story of Battle of Kadesh and Nefertari', 'UNESCO relocation rescue story', 'Hotel transfers in Abu Simbel'],
    itinerary: [
      { title: 'Evening Transfer', description: 'Transfer from Abu Simbel hotel to temple grounds.' },
      { title: 'Laser & Sound Show', description: 'Watch the dramatic projections against the rock facade.' }
    ],
    includes: ['Transfers in Abu Simbel', 'Show ticket', 'Taxes'],
    excludes: ['Transfer from Aswan (if not staying overnight)', 'Tips'],
    whatToBring: ['Camera', 'Comfortable clothing']
  },

  // 5. Edfu Temple Sound & Light
  {
    id: 8005,
    title: 'Edfu Temple Sound and Light Night Experience',
    slug: 'edfu-temple-sound-and-light-show',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Sound & Light Show', 'Horus Temple', 'Mythology'],
    duration: { value: 2, unit: 'hours', text: '2 Hours' },
    price: 45,
    oldPrice: 65,
    rating: 4.7,
    reviews: 70,
    coverImage: 'assets/images/trips/sound-light/8005/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8005/${i + 1}.webp`),
    shortDescription: 'Experience the story of Horus vanquishing Seth inside Egypt’s most intact Ptolemaic temple through evening lights and narration.',
    highlights: ['Intact stone temple illuminated at night', 'Mythological battle of Horus and Seth', 'Atmospheric courtyards and sanctuaries', 'Cruise or hotel transfers'],
    itinerary: [
      { title: 'Temple Arrival', description: 'Horse carriage or vehicle transfer to Horus Temple.' },
      { title: 'Night Spectacle', description: 'Experience the multimedia historical presentation.' }
    ],
    includes: ['Transfers in Edfu', 'Show admission ticket', 'Taxes'],
    excludes: ['Personal purchases', 'Tips'],
    whatToBring: ['Camera', 'Walking shoes']
  },

  // 6. VIP Pyramids Sound & Light
  {
    id: 8006,
    title: 'VIP Front-Row Giza Pyramids Sound & Light with Private Guide',
    slug: 'vip-giza-sound-and-light-private-guide',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Sound & Light Show', 'VIP', 'Historical'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 70,
    oldPrice: 95,
    rating: 4.9,
    reviews: 85,
    coverImage: 'assets/images/trips/sound-light/8006/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8006/${i + 1}.webp`),
    shortDescription: 'Enjoy front-row VIP seating at the Giza sound and light show accompanied by your personal Egyptologist guide.',
    highlights: ['Front-row VIP center seating', 'Private Egyptologist guide accompanying you', 'Private luxury vehicle transfers', 'Bottled mineral water'],
    itinerary: [
      { title: 'VIP Pickup', description: 'Pick up in luxury private car from Cairo hotel.' },
      { title: 'Guided Show', description: 'Guide introduces historical context before show starts.' }
    ],
    includes: ['VIP show tickets', 'Private transport', 'Egyptologist guide'],
    excludes: ['Tips', 'Personal expenses'],
    whatToBring: ['Smart casual attire', 'Camera']
  },

  // 7. Karnak Sound & Light with Carriage
  {
    id: 8007,
    title: 'Karnak Sound and Light Show with Carriage Ride in Luxor',
    slug: 'karnak-sound-light-carriage-ride',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Sound & Light Show', 'Horse Carriage', 'Cultural'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 55,
    oldPrice: 75,
    rating: 4.8,
    reviews: 95,
    coverImage: 'assets/images/trips/sound-light/8007/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8007/${i + 1}.webp`),
    shortDescription: 'Ride through the historic streets of Luxor in a horse-drawn carriage to attend the Karnak Sound & Light show.',
    highlights: ['Romantic horse carriage ride through Luxor', 'Karnak Sound & Light show ticket included', 'Sacred Lake lighting finale', 'Hotel/cruise transfers'],
    itinerary: [
      { title: 'Carriage Ride', description: 'Carriage ride from hotel along the Corniche to Karnak.' },
      { title: 'Show & Return', description: 'Enjoy Karnak night show and return by private vehicle.' }
    ],
    includes: ['Horse carriage transfer', 'Show admission ticket', 'Return vehicle transfer'],
    excludes: ['Tips for coachman', 'Drinks'],
    whatToBring: ['Camera', 'Light jacket']
  },

  // 8. Philae Sound & Light with Souk Tour
  {
    id: 8008,
    title: 'Philae Sound & Light Show Combined with Aswan Spice Market Tour',
    slug: 'philae-sound-light-aswan-souk',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Sound & Light Show', 'Souk Tour', 'Culture'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 55,
    oldPrice: 75,
    rating: 4.9,
    reviews: 75,
    coverImage: 'assets/images/trips/sound-light/8008/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8008/${i + 1}.webp`),
    shortDescription: 'Witness the evening show at Philae Island Temple, followed by a guided walking tour through the lively Aswan Spice Souk.',
    highlights: ['Philae Temple evening show by boat', 'Guided walk in Aswan colorful bazaar', 'Shop for authentic Nubian spices and hibiscus', 'Private transfers'],
    itinerary: [
      { title: 'Philae Show', description: 'Motorboat to island and experience evening spectacle.' },
      { title: 'Aswan Souk Tour', description: 'Stroll through the fragrant street market with guide.' }
    ],
    includes: ['Transfers and boat', 'Show ticket', 'Local guide'],
    excludes: ['Personal shopping', 'Tips'],
    whatToBring: ['Cash for market shopping', 'Camera']
  },

  // 9. Pyramids Sound & Light with Dinner
  {
    id: 8009,
    title: 'Giza Pyramids Sound & Light Show with Traditional Egyptian Dinner',
    slug: 'giza-sound-light-show-dinner',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Sound & Light Show', 'Dinner', 'Night Tour'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 60,
    oldPrice: 85,
    rating: 4.8,
    reviews: 140,
    coverImage: 'assets/images/trips/sound-light/8009/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8009/${i + 1}.webp`),
    shortDescription: 'Watch the Sphinx and Pyramids show, followed by a delicious dinner of mixed grill and oriental salads overlooking the plateau.',
    highlights: ['Sound & Light show admission', 'Dinner at a restaurant overlooking the pyramids', 'Authentic grilled meats and mezze', 'Private transfers'],
    itinerary: [
      { title: 'Show', description: 'Enjoy the 1-hour laser and audio presentation at Giza.' },
      { title: 'Dinner', description: 'Savor an authentic dinner with pyramid views.' }
    ],
    includes: ['Private car transfers', 'Show ticket', 'Full dinner meal'],
    excludes: ['Drinks during dinner', 'Tips'],
    whatToBring: ['Camera', 'Appetite']
  },

  // 10. Cairo Citadel Twilight & Sound & Light
  {
    id: 8010,
    title: 'Cairo Citadel by Night & Sound and Light Show Package',
    slug: 'cairo-citadel-night-sound-light',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Sound & Light Show', 'Night Tour', 'Combined'],
    duration: { value: 5, unit: 'hours', text: '5 Hours' },
    price: 75,
    oldPrice: 105,
    rating: 4.9,
    reviews: 80,
    coverImage: 'assets/images/trips/sound-light/8010/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/sound-light/8010/${i + 1}.webp`),
    shortDescription: 'View the illuminated Cairo Citadel and Mohamed Ali Mosque at twilight, followed by the Giza Pyramids Sound & Light Show.',
    highlights: ['Panoramic evening city view from Citadel viewpoint', 'Giza Pyramids Sound & Light show', 'Private vehicle and Egyptologist', 'Bottled water included'],
    itinerary: [
      { title: 'Citadel Twilight', description: 'See the illuminated medieval fortress and mosque from viewpoint.' },
      { title: 'Giza Show', description: 'Transfer to Giza for the Sound & Light performance.' }
    ],
    includes: ['Private round-trip transfers', 'Sound & Light show ticket', 'Guide', 'Water'],
    excludes: ['Dinner', 'Personal purchases', 'Tips'],
    whatToBring: ['Camera', 'Light jacket']
  }
];
