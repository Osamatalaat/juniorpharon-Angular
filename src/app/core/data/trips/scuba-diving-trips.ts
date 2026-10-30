import { Trip } from '../../models/trip.model';

export const SCUBA_DIVING_TRIPS: Trip[] = [
  // 1. Hurghada Daily Boat Diving
  {
    id: 6001,
    title: 'Hurghada Scuba Diving Day Trip with 2 Boat Dives',
    slug: 'hurghada-scuba-diving-trip',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Scuba Diving', 'Boat Trip', 'Water Sports'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 55,
    oldPrice: 80,
    rating: 4.9,
    reviews: 175,
    coverImage: 'assets/images/trips/diving/6001/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/diving/6001/${i + 1}.webp`),
    shortDescription: 'Two guided boat dives at top Red Sea reefs with certified PADI divemasters and lunch onboard[cite: 4].',
    highlights: ['Two boat dives at different coral reef sites[cite: 4]', 'PADI dive guide and briefing[cite: 4]', 'Tanks and weight belts included[cite: 4]', 'Buffet lunch served onboard[cite: 4]'],
    itinerary: [
      { title: 'Marina Departure', description: 'Equipment check and sailing to first dive site[cite: 4].' },
      { title: 'Two Guided Dives', description: 'Explore coral walls and reef fish habitats with lunch break in between[cite: 4].' }
    ],
    includes: ['Hotel transfers[cite: 4]', 'Boat trip[cite: 4]', 'Two dives with tanks & weights[cite: 4]', 'Buffet lunch & drinks[cite: 4]'],
    excludes: ['Full equipment rental[cite: 4]', 'Tipping[cite: 4]'],
    whatToBring: ['Diving certification card[cite: 4]', 'Logbook[cite: 4]', 'Swimwear[cite: 4]', 'Towel[cite: 4]']
  },

  // 2. Elphinstone Reef Diving
  {
    id: 6002,
    title: 'Elphinstone Reef Scuba Diving Trip from Marsa Alam',
    slug: 'elphinstone-reef-diving-trip',
    destination: { id: 5, name: 'Marsa Alam', slug: 'marsa-alam' },
    type: ['Scuba Diving', 'Deep Dive', 'Sharks'],
    duration: { value: 9, unit: 'hours', text: '8–9 Hours' },
    price: 95,
    oldPrice: 130,
    rating: 5.0,
    reviews: 140,
    coverImage: 'assets/images/trips/diving/6002/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/diving/6002/${i + 1}.webp`),
    shortDescription: 'World-class wall diving at Elphinstone Reef for certified divers. Spot pelagic species and oceanic whitetip sharks[cite: 7].',
    highlights: ['Two guided dives on sheer drop-off walls[cite: 7]', 'Potential encounters with oceanic whitetip sharks[cite: 7]', 'Exceptional visibility and soft corals[cite: 7]', 'Buffet lunch onboard[cite: 7]'],
    itinerary: [
      { title: 'Sail Offshore', description: 'Cruise 12 km offshore to the legendary reef[cite: 7].' },
      { title: 'Plateau Dives', description: 'Complete two deep guided dives along north and south plateaus[cite: 7].' }
    ],
    includes: ['Hotel transfers[cite: 7]', 'Boat trip[cite: 7]', 'Tanks and weights[cite: 7]', 'Lunch[cite: 7]'],
    excludes: ['Gear rental[cite: 7]', 'Marine park fees[cite: 7]', 'Tipping[cite: 7]'],
    whatToBring: ['Certification card[cite: 7]', 'Logbook[cite: 7]', 'Swimwear[cite: 7]'],
    goodToKnow: ['Recommended for Advanced Open Water certified divers[cite: 7].']
  },

  // 3. Beginners Intro Diving
  {
    id: 6003,
    title: 'Introductory Discovery Scuba Diving for Beginners in Hurghada',
    slug: 'hurghada-intro-scuba-diving-beginners',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Scuba Diving', 'Beginners', 'Intro Dive'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 45,
    oldPrice: 65,
    rating: 4.9,
    reviews: 210,
    coverImage: 'assets/images/trips/diving/6003/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/diving/6003/${i + 1}.webp`),
    shortDescription: 'No license needed: discover the underwater world with 2 one-on-one instructor-led introductory dives in calm shallow reefs[cite: 4].',
    highlights: ['No prior diving certification needed[cite: 4]', 'Two guided intro dives with personal instructor', 'Full diving gear included for beginners', 'Buffet lunch and drinks onboard[cite: 4]'],
    itinerary: [
      { title: 'Theory & Gear', description: 'Detailed briefing on breathing and hand signals onboard.' },
      { title: 'Two Shallow Dives', description: 'Dive up to 6–8 meters accompanied directly by instructor.' }
    ],
    includes: ['Hotel transfers', 'Full scuba gear rental', 'Instructor guidance', 'Buffet lunch'],
    excludes: ['Underwater photo/video packages', 'Tips'],
    whatToBring: ['Swimwear', 'Towel', 'Sunscreen']
  },

  // 4. SS Thistlegorm Wreck Diving
  {
    id: 6004,
    title: 'SS Thistlegorm Wreck Diving Expedition from Sharm El Sheikh',
    slug: 'ss-thistlegorm-wreck-diving',
    destination: { id: 6, name: 'Sharm El Sheikh', slug: 'sharm-el-sheikh' },
    type: ['Scuba Diving', 'Wreck Dive', 'Advanced'],
    duration: { value: 11, unit: 'hours', text: '11 Hours' },
    price: 135,
    oldPrice: 175,
    rating: 5.0,
    reviews: 180,
    coverImage: 'assets/images/trips/diving/6004/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/diving/6004/${i + 1}.webp`),
    shortDescription: 'Explore the world’s most famous WWII shipwreck with 2 dives inside cargo holds containing vintage motorcycles, trucks, and trains.',
    highlights: ['World War II British cargo wreck', 'Cargo holds filled with vintage vehicles and munitions', 'Two guided wreck penetration dives', 'Breakfast and lunch onboard'],
    itinerary: [
      { title: 'Early Departure', description: 'Sail across the Straits of Gubal to the wreck site.' },
      { title: 'Wreck Exploration', description: 'External orientation dive followed by cargo hold dive.' }
    ],
    includes: ['Boat trip', 'Two guided dives', 'Tanks & weights', 'Breakfast and lunch'],
    excludes: ['National park fees', 'Full gear rental', 'Tips'],
    whatToBring: ['Advanced certification card', 'Logbook', 'Dive torch']
  },

  // 5. Shaab Samadai Diving
  {
    id: 6005,
    title: 'Dolphin House Marsa Alam Scuba Diving Trip',
    slug: 'dolphin-house-marsa-alam-diving',
    destination: { id: 5, name: 'Marsa Alam', slug: 'marsa-alam' },
    type: ['Scuba Diving', 'Reef Diving', 'Marine Life'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 85,
    oldPrice: 110,
    rating: 4.8,
    reviews: 95,
    coverImage: 'assets/images/trips/diving/6005/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/diving/6005/${i + 1}.webp`),
    shortDescription: 'Two guided dives on the outer pinnacles and drop-offs of Shaab Samadai with healthy hard corals and pelagic life[cite: 7].',
    highlights: ['Two outer reef dives around Shaab Samadai[cite: 7]', 'Swim-throughs and underwater pinnacles', 'Chance of encountering wild dolphins[cite: 7]', 'Buffet lunch onboard[cite: 7]'],
    itinerary: [
      { title: 'Sail to Samadai', description: 'Cruise to marine reserve and dive briefing[cite: 7].' },
      { title: 'Two Dives & Return', description: 'Explore coral canyons and return to marina[cite: 7].' }
    ],
    includes: ['Hotel transfers[cite: 7]', 'Diving boat trip[cite: 7]', 'Tanks & weights[cite: 7]', 'Lunch[cite: 7]'],
    excludes: ['Park entrance fee[cite: 7]', 'Equipment rental[cite: 7]', 'Tips[cite: 7]'],
    whatToBring: ['Certification card', 'Swimwear', 'Towel']
  },

  // 6. Dahab Blue Hole Diving
  {
    id: 6006,
    title: 'Dahab Blue Hole & Canyon Scuba Diving Day Trip',
    slug: 'dahab-blue-hole-canyon-diving',
    destination: { id: 7, name: 'Dahab', slug: 'dahab' },
    type: ['Scuba Diving', 'Shore Dive', 'World Famous'],
    duration: { value: 10, unit: 'hours', text: '10 Hours' },
    price: 90,
    oldPrice: 120,
    rating: 4.9,
    reviews: 230,
    coverImage: 'assets/images/trips/diving/6006/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/diving/6006/${i + 1}.webp`),
    shortDescription: 'Shore-entry diving at the world-famous Blue Hole and The Canyon in Dahab with Bedouin lunch and jeep transfers.',
    highlights: ['Dive the iconic Blue Hole (The Bells entry)', 'Explore The Canyon volcanic fissure', 'Bedouin seaside restaurant lunch', 'Jeep transfer through Sinai mountains'],
    itinerary: [
      { title: 'Transfer to Dahab', description: 'Drive along Sinai desert coast to Dahab.' },
      { title: 'The Bells & Blue Hole', description: 'Spectacular wall dive drifting into the Blue Hole.' },
      { title: 'The Canyon & Lunch', description: 'Second dive inside the cavern canyon and seaside lunch.' }
    ],
    includes: ['Round-trip transfers', 'Two guided shore dives', 'Tanks & weights', 'Lunch'],
    excludes: ['Blue Hole national park ticket', 'Gear rental', 'Tips'],
    whatToBring: ['Certification card', 'Logbook', 'Swimwear']
  },

  // 7. Straits of Tiran Diving
  {
    id: 6007,
    title: 'Straits of Tiran Scuba Diving Boat Trip from Sharm',
    slug: 'straits-of-tiran-scuba-diving',
    destination: { id: 6, name: 'Sharm El Sheikh', slug: 'sharm-el-sheikh' },
    type: ['Scuba Diving', 'Drift Dive', 'Coral Reefs'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 75,
    oldPrice: 100,
    rating: 4.9,
    reviews: 150,
    coverImage: 'assets/images/trips/diving/6007/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/diving/6007/${i + 1}.webp`),
    shortDescription: 'Cruise to Jackson and Thomas Reefs in the Straits of Tiran for exhilarating drift diving along vibrant coral gardens.',
    highlights: ['Two drift dives on Jackson or Woodhouse reefs', 'Massive gorgonian sea fans and black corals', 'Schools of barracuda and reef sharks', 'Hot lunch buffet onboard'],
    itinerary: [
      { title: 'Sail to Tiran', description: 'Cruise toward the Straits of Tiran near Tiran Island.' },
      { title: 'Two Drift Dives', description: 'Guided drift dives along current-swept coral walls.' }
    ],
    includes: ['Hotel transfers', 'Boat trip', 'Two guided dives', 'Lunch & soft drinks'],
    excludes: ['Full equipment hire', 'Tipping'],
    whatToBring: ['Certification card', 'Swimwear', 'Sunglasses']
  },

  // 8. PADI Open Water Course
  {
    id: 6008,
    title: 'PADI Open Water Diver Certification Course in Hurghada',
    slug: 'padi-open-water-course-hurghada',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Scuba Diving', 'PADI Course', 'Certification'],
    duration: { value: 3, unit: 'days', text: '3 Days' },
    price: 290,
    oldPrice: 380,
    rating: 5.0,
    reviews: 165,
    coverImage: 'assets/images/trips/diving/6008/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/diving/6008/${i + 1}.webp`),
    shortDescription: 'Get certified to dive up to 18 meters worldwide with a 3-day PADI Open Water course including pool training and 4 open water boat dives.',
    highlights: ['Globally recognized PADI certification', 'Classroom theory and confined water skills', '4 open water boat dives on Red Sea reefs', 'Full scuba equipment included during course'],
    itinerary: [
      { title: 'Day 1: Theory & Pool', description: 'Classroom briefing, e-learning review, and shallow skills.' },
      { title: 'Days 2-3: Open Water Dives', description: 'Boat trips with 4 qualifying open water dives.' }
    ],
    includes: ['PADI instructor', 'All scuba equipment rental', 'Boat trips & lunch', 'Hotel transfers'],
    excludes: ['PADI certification manual/e-card fee', 'Tipping'],
    whatToBring: ['Passport copy', 'Medical clearance', 'Swimwear']
  },

  // 9. Shaab Claudio Cave Diving
  {
    id: 6009,
    title: 'Abu Galawa & Shaab Claudio Cave Diving in Marsa Alam',
    slug: 'shaab-claudio-cave-diving',
    destination: { id: 5, name: 'Marsa Alam', slug: 'marsa-alam' },
    type: ['Scuba Diving', 'Caves', 'Wreck'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 90,
    oldPrice: 120,
    rating: 4.9,
    reviews: 85,
    coverImage: 'assets/images/trips/diving/6009/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/diving/6009/${i + 1}.webp`),
    shortDescription: 'Dive into the sunlit caverns of Shaab Claudio and explore the shallow tugboat shipwreck at Abu Galawa reef.',
    highlights: ['Stunning light shafts inside Shaab Claudio caves', 'Shallow tugboat wreck covered in hard corals', 'Two guided boat dives', 'Buffet lunch onboard'],
    itinerary: [
      { title: 'Shaab Claudio Caverns', description: 'Navigate open swim-throughs with natural cathedral lighting.' },
      { title: 'Abu Galawa Wreck', description: 'Explore coral-encrusted tugboat wreck.' }
    ],
    includes: ['Transfers', 'Boat trip', 'Two guided dives', 'Lunch & drinks'],
    excludes: ['Equipment hire', 'Tips'],
    whatToBring: ['Certification card', 'Dive torch', 'Swimwear']
  },

  // 10. Night Diving Experience
  {
    id: 6010,
    title: 'Night Scuba Dive from Hurghada Marina',
    slug: 'night-scuba-dive-hurghada',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Scuba Diving', 'Night Dive', 'Adventure'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 60,
    oldPrice: 85,
    rating: 4.8,
    reviews: 70,
    coverImage: 'assets/images/trips/diving/6010/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/diving/6010/${i + 1}.webp`),
    shortDescription: 'Witness the nocturnal transformation of the Red Sea reef: hunting lionfish, octopus, bioluminescent plankton, and sleeping parrotfish.',
    highlights: ['One guided night dive with high-power dive torch', 'Spot nocturnal predators and bioluminescence', 'PADI divemaster supervision', 'Round-trip transfers'],
    itinerary: [
      { title: 'Sunset Briefing', description: 'Equipment check and dusk briefing at dive center.' },
      { title: 'Night Dive', description: 'Descend under torchlight to explore nocturnal marine behavior.' }
    ],
    includes: ['Hotel transfers', 'Guided night dive', 'Dive torch', 'Tank & weights'],
    excludes: ['Scuba equipment (BCD/Regulator)', 'Tips'],
    whatToBring: ['Certification card', 'Logbook', 'Swimwear']
  }
];
