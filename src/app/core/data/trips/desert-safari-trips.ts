import { Trip } from '../../models/trip.model';

export const DESERT_SAFARI_TRIPS: Trip[] = [
  {
    id: 4001,
    title: 'Super Safari Adventure in Hurghada: Quad, Buggy & Bedouin Dinner',
    slug: 'super-safari-hurghada-quad-buggy',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Desert Safari', 'Quad Biking', 'Adventure'],
    duration: { value: 6, unit: 'hours', text: '6 Hours' },
    price: 40,
    oldPrice: 60,
    rating: 4.9,
    reviews: 420,
    coverImage: 'assets/images/trips/safari/4001/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/safari/4001/${i + 1}.webp`),
    shortDescription: 'Drive quad bikes and dune buggies across the Eastern Desert, take a 4x4 Jeep to a Bedouin village, ride a camel, and enjoy an open-air BBQ dinner with a folklore show[cite: 4].',
    highlights: [
      'Quad biking across desert dunes[cite: 4]',
      'Dune buggy driving experience[cite: 4]',
      '4x4 Jeep ride to Bedouin village[cite: 4]',
      'Camel ride & Bedouin herbal tea[cite: 4]',
      'Open-air BBQ buffet dinner[cite: 4]',
      'Tanoura spinning & oriental dance show[cite: 4]'
    ],
    itinerary: [
      { title: 'Quad & Buggy Driving', description: 'Drive quad bikes and buggies on desert tracks after a safety briefing[cite: 4].' },
      { title: 'Bedouin Village by 4x4', description: 'Travel by Jeep to explore Bedouin customs, enjoy tea, and take a camel ride[cite: 4].' },
      { title: 'Sunset & BBQ Dinner', description: 'Watch the desert sunset and sit down for an open barbecue buffet[cite: 4].' },
      { title: 'Folklore Show', description: 'Enjoy Tanoura dancers, belly dancing, and folk music before hotel drop-off[cite: 4].' }
    ],
    includes: ['Hotel pickup and drop-off[cite: 4]', 'Quad bike and buggy ride[cite: 4]', '4x4 Jeep safari[cite: 4]', 'Bedouin village visit & camel ride[cite: 4]', 'BBQ dinner with soft drinks[cite: 4]', 'Evening folklore show[cite: 4]'],
    excludes: ['Dust scarf (shemagh) & goggles[cite: 4]', 'Personal expenses[cite: 4]', 'Tips[cite: 4]']
  },
  {
    id: 4002,
    title: 'ATV Quad Bike Adventure at the Giza Pyramids',
    slug: 'giza-pyramids-atv-quad-bike-adventure',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Desert Safari', 'Quad Biking', 'Adventure'],
    duration: { value: 3, unit: 'hours', text: '2–3 Hours' },
    price: 45,
    oldPrice: 65,
    rating: 4.8,
    reviews: 130,
    coverImage: 'assets/images/trips/safari/4002/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/safari/4002/${i + 1}.webp`),
    shortDescription: 'Ride an ATV quad bike through the Sahara dunes surrounding the Giza Plateau with panoramic views of the pyramids[cite: 2].',
    highlights: ['Ride across open desert sands near the pyramids[cite: 2]', 'Stunning panorama stops for photos[cite: 2]', 'Safety briefing and helmet included[cite: 2]'],
    itinerary: [
      { title: 'Pickup & Safety Briefing', description: 'Transfer to Giza desert center, get helmet and safety guidelines[cite: 2].' },
      { title: 'Desert Quad Trek', description: 'Ride across open desert trails admiring Khufu, Khafre, and Menkaure[cite: 2].' }
    ],
    includes: ['Round-trip transfers[cite: 2]', 'ATV quad bike ride[cite: 2]', 'Safety helmet[cite: 2]', 'Bottled water[cite: 2]'],
    excludes: ['Entrance tickets[cite: 2]', 'Scarf[cite: 2]', 'Tips[cite: 2]']
  },
  {
    id: 4003,
    title: 'Marsa Alam 4x4 Desert Safari & Bedouin Camp',
    slug: 'marsa-alam-desert-safari',
    destination: { id: 5, name: 'Marsa Alam', slug: 'marsa-alam' },
    type: ['Desert Safari', '4x4 Safari', 'Bedouin Culture'],
    duration: { value: 6, unit: 'hours', text: '6 Hours' },
    price: 45,
    oldPrice: 65,
    rating: 4.8,
    reviews: 110,
    coverImage: 'assets/images/trips/safari/4003/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/safari/4003/${i + 1}.webp`),
    shortDescription: 'Off-road 4x4 journey into the Red Sea mountain desert: visit an authentic Bedouin village, enjoy camel riding, and a barbecue dinner under the stars[cite: 7].',
    highlights: ['4x4 Jeep ride across rugged valleys[cite: 7]', 'Bedouin settlement tour with herbal tea[cite: 7]', 'Sunset photography and camel ride[cite: 7]', 'BBQ dinner and folklore show[cite: 7]'],
    itinerary: [
      { title: 'Jeep Safari', description: 'Drive through dramatic mountain trails to the Bedouin camp[cite: 7].' },
      { title: 'Camp & Dinner', description: 'Ride a camel, watch the sunset, and enjoy BBQ[cite: 7].' }
    ],
    includes: ['Hotel transfers[cite: 7]', '4x4 transport[cite: 7]', 'Bedouin tea & camel ride[cite: 7]', 'BBQ dinner[cite: 7]'],
    excludes: ['Scarves and goggles[cite: 7]', 'Tips[cite: 7]']
  },
  {
    id: 4004,
    title: 'White Desert & Bahariya Oasis 2-Day Camping Safari',
    slug: 'white-desert-bahariya-camping-safari',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Desert Safari', 'Camping', 'Overnight'],
    duration: { value: 2, unit: 'days', text: '2 Days / 1 Night' },
    price: 210,
    oldPrice: 260,
    rating: 5.0,
    reviews: 180,
    coverImage: 'assets/images/trips/safari/4004/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/safari/4004/${i + 1}.webp`),
    shortDescription: 'Explore the volcanic Black Desert, Crystal Mountain, and surreal chalk sculptures of the White Desert with overnight Bedouin camping[cite: 2].',
    highlights: ['4x4 off-road adventure through Black & White Deserts[cite: 2]', 'Crystal Mountain and sand dunes[cite: 2]', 'Campfire Bedouin dinner and stargazing[cite: 2]'],
    itinerary: [
      { title: 'Day 1: Cairo to White Desert', description: 'Depart Cairo, visit Black Desert, Crystal Mountain, and camp in the White Desert[cite: 2].' },
      { title: 'Day 2: Sunrise & Return', description: 'Desert sunrise, breakfast, and drive back to Cairo[cite: 2].' }
    ],
    includes: ['All transfers from Cairo[cite: 2]', '4x4 safari[cite: 2]', 'Camping gear & meals[cite: 2]', 'Guide[cite: 2]'],
    excludes: ['Sleeping bag (rental available)[cite: 2]', 'Tips[cite: 2]']
  },
  {
    id: 4005,
    title: 'Hurghada Morning Dune Buggy Safari',
    slug: 'hurghada-morning-dune-buggy-safari',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Desert Safari', 'Dune Buggy', 'Adventure'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 45,
    oldPrice: 60,
    rating: 4.8,
    reviews: 95,
    coverImage: 'assets/images/trips/safari/4005/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/safari/4005/${i + 1}.webp`),
    shortDescription: 'Drive high-powered off-road buggies over sandy trails and valleys in the Red Sea mountains in the cool morning air[cite: 4].',
    highlights: ['Self-drive buggy adventure[cite: 4]', 'Visit a desert camp for tea[cite: 4]', 'Morning departure before peak afternoon heat[cite: 4]'],
    itinerary: [
      { title: 'Briefing & Drive', description: 'Safety briefing and driving across sandy tracks[cite: 4].' },
      { title: 'Oasis Stop', description: 'Rest with Bedouin tea before racing back to base[cite: 4].' }
    ],
    includes: ['Transfers[cite: 4]', 'Buggy rental[cite: 4]', 'Helmet[cite: 4]', 'Tea[cite: 4]'],
    excludes: ['Scarf/goggles[cite: 4]', 'Tips[cite: 4]']
  },
  {
    id: 4006,
    title: 'Fayoum Oasis, Wadi El Rayan & Whales Valley 4x4 Tour',
    slug: 'fayoum-wadi-rayan-hitan-safari',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Desert Safari', 'Nature', 'UNESCO'],
    duration: { value: 10, unit: 'hours', text: '10–12 Hours' },
    price: 95,
    oldPrice: 125,
    rating: 4.9,
    reviews: 135,
    coverImage: 'assets/images/trips/safari/4006/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/safari/4006/${i + 1}.webp`),
    shortDescription: 'Journey from Cairo to Fayoum: see Egypt’s only natural waterfalls at Wadi El Rayan and 40-million-year-old fossil whales at Wadi El Hitan[cite: 2].',
    highlights: ['Wadi El Rayan waterfalls and desert lakes[cite: 2]', 'UNESCO World Heritage Wadi El Hitan open-air museum[cite: 2]', 'Sandboarding on high desert dunes'],
    itinerary: [
      { title: 'Drive to Fayoum', description: 'Scenic drive southwest from Cairo[cite: 2].' },
      { title: 'Waterfalls & Valley of Whales', description: 'Visit waterfalls, take 4x4 into the desert fossils valley, and enjoy lunch[cite: 2].' }
    ],
    includes: ['Private 4x4 transport[cite: 2]', 'Guide[cite: 2]', 'Lunch[cite: 2]', 'Entrance tickets[cite: 2]'],
    excludes: ['Personal expenses[cite: 2]', 'Tips[cite: 2]']
  },
  {
    id: 4007,
    title: 'Wadi El Gemal National Park 4x4 Eco-Safari',
    slug: 'wadi-el-gemal-national-park-safari',
    destination: { id: 5, name: 'Marsa Alam', slug: 'marsa-alam' },
    type: ['Desert Safari', 'Eco Tour', 'Nature'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 65,
    oldPrice: 85,
    rating: 4.9,
    reviews: 90,
    coverImage: 'assets/images/trips/safari/4007/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/safari/4007/${i + 1}.webp`),
    shortDescription: 'Discover the Valley of the Camels: ancient Roman emerald mines, coastal mangrove forests, wild acacia trees, and authentic Bedouin culture[cite: 7].',
    highlights: ['Explore ancient Roman emerald mining ruins[cite: 7]', 'Coastal mangroves and pristine beach landscapes[cite: 7]', 'Bedouin lunch at an eco-camp[cite: 7]'],
    itinerary: [
      { title: 'Desert Exploration', description: '4x4 drive into the mountainous valleys of the national park[cite: 7].' },
      { title: 'Emerald Mines & Coast', description: 'Explore Roman ruins, mangrove lagoons, and relax on the beach[cite: 7].' }
    ],
    includes: ['Park entry fees[cite: 7]', '4x4 vehicle[cite: 7]', 'Guide[cite: 7]', 'Lunch[cite: 7]'],
    excludes: ['Tips[cite: 7]']
  },
  {
    id: 4008,
    title: 'Luxor West Bank Desert Quad Safari',
    slug: 'luxor-west-bank-quad-safari',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Desert Safari', 'Quad Biking', 'Action'],
    duration: { value: 3, unit: 'hours', text: '2–3 Hours' },
    price: 40,
    oldPrice: 55,
    rating: 4.8,
    reviews: 105,
    coverImage: 'assets/images/trips/safari/4008/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/safari/4008/${i + 1}.webp`),
    shortDescription: 'Ride quad bikes across the desert foothills behind the Valley of the Kings with rugged mountain landscapes of ancient Thebes[cite: 6].',
    highlights: ['Unique views of the Theban mountain range', 'Action-packed off-road ride', 'Easy hotel transfers from Luxor'],
    itinerary: [
      { title: 'Crossing the Nile', description: 'Transfer to West Bank quad station.' },
      { title: 'Foothill Ride', description: 'Follow your guide across dirt tracks and desert trails.' }
    ],
    includes: ['Transfers', 'Quad bike hire', 'Helmet', 'Water'],
    excludes: ['Goggles/scarf', 'Tips']
  },
  {
    id: 4009,
    title: 'Stargazing Desert Safari with Telescope in Hurghada',
    slug: 'stargazing-desert-safari-hurghada',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Desert Safari', 'Astronomy', 'Night Tour'],
    duration: { value: 6, unit: 'hours', text: '6 Hours' },
    price: 60,
    oldPrice: 80,
    rating: 4.9,
    reviews: 160,
    coverImage: 'assets/images/trips/safari/4009/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/safari/4009/${i + 1}.webp`),
    shortDescription: 'Deep desert adventure featuring a sunset 4x4 ride, Bedouin dinner, and an astronomy session viewing planets and constellations through powerful telescopes[cite: 4].',
    highlights: ['Deep desert location free from city light pollution[cite: 4]', 'Professional astronomer and large telescope[cite: 4]', 'Bedouin dinner under the Milky Way[cite: 4]'],
    itinerary: [
      { title: '4x4 Safari', description: 'Drive deep into the Eastern Desert mountains[cite: 4].' },
      { title: 'Dinner & Stargazing', description: 'Barbecue dinner followed by guided constellation observation[cite: 4].' }
    ],
    includes: ['4x4 transfers[cite: 4]', 'Dinner[cite: 4]', 'Telescope viewing[cite: 4]', 'Astronomer guide[cite: 4]'],
    excludes: ['Personal items[cite: 4]', 'Tips[cite: 4]']
  },
  {
    id: 4010,
    title: 'Black & White Desert Full-Day Express 4x4 Safari',
    slug: 'black-white-desert-day-safari',
    destination: { id: 1, name: 'Cairo', slug: 'cairo' },
    type: ['Desert Safari', 'Full Day', 'Adventure'],
    duration: { value: 14, unit: 'hours', text: '12–14 Hours' },
    price: 135,
    oldPrice: 175,
    rating: 4.8,
    reviews: 80,
    coverImage: 'assets/images/trips/safari/4010/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/safari/4010/${i + 1}.webp`),
    shortDescription: 'An action-packed day trip from Cairo visiting Bahariya Oasis, the volcanic Black Desert, Crystal Mountain, and the White Desert National Park[cite: 2].',
    highlights: ['Express itinerary covering both Black & White deserts[cite: 2]', 'Chalk formations shaped like mushrooms and animals[cite: 2]', 'Traditional lunch in Bahariya Oasis[cite: 2]'],
    itinerary: [
      { title: 'Early Departure', description: 'Early morning pickup from Cairo to Bahariya[cite: 2].' },
      { title: 'Desert Safari', description: 'Switch to 4x4 to visit volcanic hills, crystal deposits, and chalk monuments[cite: 2].' },
      { title: 'Return', description: 'Evening drive back to Cairo[cite: 2].' }
    ],
    includes: ['Private Cairo transfers[cite: 2]', '4x4 vehicle[cite: 2]', 'Lunch[cite: 2]', 'Guide[cite: 2]'],
    excludes: ['Tips[cite: 2]']
  }
];
