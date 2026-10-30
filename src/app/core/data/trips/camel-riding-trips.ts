import { Trip } from '../../models/trip.model';

export const CAMEL_RIDING_TRIPS: Trip[] = [
  {
    id: 3001,
    title: 'Giza Pyramids Camel Ride Desert Experience',
    slug: 'giza-pyramids-camel-ride-experience',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Camel Riding', 'Desert Tour', 'Adventure'],
    duration: { value: 3, unit: 'hours', text: '2–3 Hours' },
    price: 35,
    oldPrice: 50,
    rating: 4.8,
    reviews: 145,
    coverImage: 'assets/images/trips/camel/3001/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3001/${i + 1}.webp`),
    shortDescription: 'Ride a camel across the golden sands of the Giza Plateau while capturing panoramic photographs of Khufu, Khafre, and Menkaure pyramids[cite: 2].',
    highlights: [
      'Traditional camel ride across the Sahara sands[cite: 2]',
      'Best panoramic viewpoints for pyramid photography[cite: 2]',
      'Guided assistance by local camel handlers[cite: 2]',
      'Private round-trip hotel transfers[cite: 2]'
    ],
    itinerary: [
      { title: 'Pickup & Transfer', description: 'Private transfer from your Cairo/Giza hotel to the Giza Plateau desert base[cite: 2].' },
      { title: 'Camel Ride & Panorama Viewpoints', description: 'Mount your camel and trek across the sands to view all three pyramids rising from the desert[cite: 2].' },
      { title: 'Photo Stops & Return', description: 'Stop for portraits with the pyramids and Sphinx before private transfer back to hotel[cite: 2].' }
    ],
    includes: ['Private transportation[cite: 2]', 'Camel ride experience[cite: 2]', 'Bottled water[cite: 2]'],
    excludes: ['Giza Plateau entrance ticket[cite: 2]', 'Personal purchases[cite: 2]', 'Tips[cite: 2]']
  },
  {
    id: 3002,
    title: 'West Bank Camel Trek & Countryside Ride in Luxor',
    slug: 'luxor-west-bank-camel-trek',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Camel Riding', 'Countryside', 'Cultural'],
    duration: { value: 2, unit: 'hours', text: '2 Hours' },
    price: 30,
    oldPrice: 45,
    rating: 4.9,
    reviews: 80,
    coverImage: 'assets/images/trips/camel/3002/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3002/${i + 1}.webp`),
    shortDescription: 'Ride a camel along scenic trails, sugarcane fields, and ancient Theban mountain foothills on Luxor’s West Bank[cite: 6].',
    highlights: ['Peaceful ride through Upper Egyptian farmland', 'Views of ancient Theban cliffs', 'Authentic local camel guide'],
    itinerary: [
      { title: 'West Bank Transfer', description: 'Cross to the West Bank stables and mount your camel.' },
      { title: 'Farmland Trails', description: 'Ride through villages and date palm paths.' }
    ],
    includes: ['Transfers', 'Camel trek', 'Water'],
    excludes: ['Tips']
  },
  {
    id: 3003,
    title: 'Pyramids Sunset Camel Ride & Bedouin Tea',
    slug: 'pyramids-sunset-camel-ride-tea',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Camel Riding', 'Sunset', 'Cultural'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 45,
    oldPrice: 60,
    rating: 4.9,
    reviews: 110,
    coverImage: 'assets/images/trips/camel/3003/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3003/${i + 1}.webp`),
    shortDescription: 'Experience the Giza pyramids as dusk settles, riding camels to quiet desert vantage points followed by traditional mint tea[cite: 2].',
    highlights: ['Golden hour sunset over Giza Pyramids[cite: 2]', 'Traditional mint tea in a desert tent', 'Memorable silhouette photography[cite: 2]'],
    itinerary: [
      { title: 'Late Afternoon Pickup', description: 'Transfer to Giza desert stables[cite: 2].' },
      { title: 'Sunset Trek', description: 'Ride across dunes while the sun dips behind Khafre[cite: 2].' },
      { title: 'Tea & Return', description: 'Sip tea before the private ride back to hotel.' }
    ],
    includes: ['Private car[cite: 2]', 'Camel ride[cite: 2]', 'Bedouin tea', 'Bottled water[cite: 2]'],
    excludes: ['Pyramid tickets[cite: 2]', 'Tips[cite: 2]']
  },
  {
    id: 3004,
    title: 'Red Sea Coastal Camel Ride in Hurghada',
    slug: 'red-sea-coastal-camel-ride-hurghada',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Camel Riding', 'Beach', 'Nature'],
    duration: { value: 2, unit: 'hours', text: '2 Hours' },
    price: 35,
    oldPrice: 50,
    rating: 4.7,
    reviews: 95,
    coverImage: 'assets/images/trips/camel/3004/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3004/${i + 1}.webp`),
    shortDescription: 'Enjoy a leisurely camel trek along the shores of the Red Sea with turquoise water on one side and golden desert sands on the other.',
    highlights: ['Trek directly beside the Red Sea coastline', 'Gentle pace suitable for kids and beginners', 'Great coastal photo opportunities'],
    itinerary: [
      { title: 'Hotel Pickup', description: 'Transfer to the coastal safari center.' },
      { title: 'Beach Ride', description: 'Ride camels along the sandy shoreline with sea breezes.' }
    ],
    includes: ['Hotel transfers', 'Camel ride', 'Handler support'],
    excludes: ['Photos', 'Tips']
  },
  {
    id: 3005,
    title: 'Saqqara Desert & Step Pyramid Camel Trek',
    slug: 'saqqara-desert-step-pyramid-camel-trek',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Camel Riding', 'Archaeology', 'Desert'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 55,
    oldPrice: 75,
    rating: 4.8,
    reviews: 65,
    coverImage: 'assets/images/trips/camel/3005/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3005/${i + 1}.webp`),
    shortDescription: 'Ride across the open desert of Saqqara with dramatic viewpoints of the ancient Step Pyramid of Djoser away from the tour buses[cite: 2].',
    highlights: ['Uncrowded desert terrain surrounding Saqqara[cite: 2]', 'Scenic perspectives of Djoser Step Pyramid[cite: 2]', 'Private air-conditioned transfers[cite: 2]'],
    itinerary: [
      { title: 'Transfer to Saqqara', description: 'Drive south of Cairo through rural palm groves[cite: 2].' },
      { title: 'Desert Camel Ride', description: 'Trek across dunes with ancient pyramids dotted along the horizon.' }
    ],
    includes: ['Transfers[cite: 2]', 'Camel hire and handler', 'Water[cite: 2]'],
    excludes: ['Saqqara entrance ticket[cite: 2]', 'Tips[cite: 2]']
  },
  {
    id: 3006,
    title: 'Sunrise Camel Ride at the Great Pyramids',
    slug: 'sunrise-camel-ride-great-pyramids',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Camel Riding', 'Sunrise', 'Adventure'],
    duration: { value: 3, unit: 'hours', text: '2–3 Hours' },
    price: 40,
    oldPrice: 55,
    rating: 4.9,
    reviews: 130,
    coverImage: 'assets/images/trips/camel/3006/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3006/${i + 1}.webp`),
    shortDescription: 'Beat the heat and the crowds with an early morning camel ride as dawn breaks across the Giza Plateau[cite: 2].',
    highlights: ['Peaceful atmosphere before official gates open[cite: 2]', 'Crisp morning air and soft sunrise light[cite: 2]', 'Expert local guide assistance[cite: 2]'],
    itinerary: [
      { title: 'Early Pickup', description: 'Pickup at 5:00 AM from hotel[cite: 2].' },
      { title: 'Sunrise Trek', description: 'Ride across dunes as the sun casts long shadows over the pyramids[cite: 2].' }
    ],
    includes: ['Round-trip transfers[cite: 2]', 'Camel ride[cite: 2]', 'Water[cite: 2]'],
    excludes: ['Pyramid tickets[cite: 2]', 'Tips[cite: 2]']
  },
  {
    id: 3007,
    title: 'Marsa Alam Desert Sunset Camel Ride',
    slug: 'marsa-alam-desert-sunset-camel-ride',
    destination: { id: 5, name: 'Marsa Alam', slug: 'marsa-alam' },
    type: ['Camel Riding', 'Sunset', 'Desert'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 40,
    oldPrice: 55,
    rating: 4.8,
    reviews: 75,
    coverImage: 'assets/images/trips/camel/3007/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3007/${i + 1}.webp`),
    shortDescription: 'Ride through the rugged mountains of Marsa Alam on camelback as the desert sun sets, ending with authentic Bedouin hospitality[cite: 7].',
    highlights: ['Serene mountain backdrop[cite: 7]', 'Traditional Bedouin tea and bread', 'Starry desert twilight[cite: 7]'],
    itinerary: [
      { title: 'Hotel Pickup', description: 'Transfer into the Red Sea mountain desert[cite: 7].' },
      { title: 'Mountain Camel Ride', description: 'Trek slowly through valleys as dusk falls[cite: 7].' }
    ],
    includes: ['Transfers[cite: 7]', 'Camel ride[cite: 7]', 'Tea', 'Water[cite: 7]'],
    excludes: ['Tips[cite: 7]']
  },
  {
    id: 3008,
    title: 'Half-Day Camel Caravan & Village Tour in Luxor',
    slug: 'camel-caravan-village-tour-luxor',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Camel Riding', 'Cultural', 'Rural'],
    duration: { value: 4, unit: 'hours', text: '3–4 Hours' },
    price: 45,
    oldPrice: 65,
    rating: 4.9,
    reviews: 60,
    coverImage: 'assets/images/trips/camel/3008/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3008/${i + 1}.webp`),
    shortDescription: 'Join a traditional camel caravan riding through peaceful Upper Egyptian farming villages along the West Bank of Luxor.',
    highlights: ['Authentic interaction with local farmers', 'Scenic canals and palm groves', 'Visit a traditional mudbrick village house'],
    itinerary: [
      { title: 'Ferry Crossing', description: 'Cross to the West Bank and mount up.' },
      { title: 'Caravan Trek', description: 'Ride in convoy through agricultural fields and village streets.' }
    ],
    includes: ['Transfers', 'Camel caravan ride', 'Local host guide'],
    excludes: ['Tips', 'Personal purchases']
  },
  {
    id: 3009,
    title: 'Dahshur Pyramids Desert Camel Exploration',
    slug: 'dahshur-pyramids-desert-camel-exploration',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Camel Riding', 'Offbeat', 'History'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 60,
    oldPrice: 80,
    rating: 4.9,
    reviews: 50,
    coverImage: 'assets/images/trips/camel/3009/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3009/${i + 1}.webp`),
    shortDescription: 'Trek on camelback across the peaceful sands of Dahshur between the enigmatic Bent Pyramid and the Red Pyramid[cite: 2].',
    highlights: ['Vast open desert with almost no tourists[cite: 2]', 'Close-up desert perspectives of Sneferu’s pyramids[cite: 2]', 'Private transfers from Cairo[cite: 2]'],
    itinerary: [
      { title: 'Drive to Dahshur', description: 'Private drive south of Giza[cite: 2].' },
      { title: 'Pyramid Trek', description: 'Ride between the Bent and Red pyramids across pristine sands[cite: 2].' }
    ],
    includes: ['Transfers[cite: 2]', 'Camel hire', 'Water[cite: 2]'],
    excludes: ['Entrance tickets[cite: 2]', 'Tips[cite: 2]']
  },
  {
    id: 3010,
    title: 'Family Friendly Camel Safari in Hurghada',
    slug: 'family-friendly-camel-safari-hurghada',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Camel Riding', 'Family', 'Short Tour'],
    duration: { value: 2, unit: 'hours', text: '2 Hours' },
    price: 30,
    oldPrice: 45,
    rating: 4.8,
    reviews: 85,
    coverImage: 'assets/images/trips/camel/3010/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/camel/3010/${i + 1}.webp`),
    shortDescription: 'A safe, gentle introduction to camel riding designed specifically for families with children, held at a dedicated desert oasis center[cite: 4].',
    highlights: ['Gentle camels led individually by experienced staff[cite: 2, 4]', 'Safe fenced and open track trails', 'Bedouin tea and photo session included[cite: 4]'],
    itinerary: [
      { title: 'Hotel Pickup', description: 'Transfer to family safari station[cite: 4].' },
      { title: 'Riding Fun', description: 'Gentle ride with handlers walking alongside[cite: 2, 4].' }
    ],
    includes: ['Transfers[cite: 4]', 'Camel ride[cite: 4]', 'Tea[cite: 4]', 'Water[cite: 4]'],
    excludes: ['Souvenirs[cite: 4]', 'Tips[cite: 4]']
  }
];
