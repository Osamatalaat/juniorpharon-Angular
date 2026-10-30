import { Trip } from '../../models/trip.model';

export const SNORKELING_TRIPS: Trip[] = [
  {
    id: 5001,
    title: 'Orange Bay Island Snorkeling Trip from Hurghada',
    slug: 'orange-bay-island-trip-hurghada',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Snorkeling', 'Island Tour', 'Boat Trip'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 35,
    oldPrice: 50,
    rating: 4.9,
    reviews: 310,
    coverImage: 'assets/images/trips/snorkeling/5001/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/snorkeling/5001/${i + 1}.webp`),
    shortDescription: 'Full-day boat cruise to Orange Bay on Giftun Island with 2 guided coral reef snorkeling stops, white sand beach relaxation, and buffet lunch[cite: 4].',
    highlights: ['2 hours on Orange Bay sandy beach[cite: 4]', 'Two guided snorkeling stops at healthy coral gardens[cite: 4]', 'Full equipment provided[cite: 4]', 'Hot buffet lunch onboard[cite: 4]'],
    itinerary: [
      { title: 'Marina Departure', description: 'Sail from Hurghada marina toward Giftun Island[cite: 4].' },
      { title: 'Reef Snorkeling', description: 'Explore two distinct coral reefs rich with tropical marine life[cite: 4].' },
      { title: 'Orange Bay Island', description: 'Swim and sunbathe on the beach[cite: 4].' },
      { title: 'Lunch & Return', description: 'Buffet lunch onboard while sailing back[cite: 4].' }
    ],
    includes: ['Hotel transfers[cite: 4]', 'Island ticket[cite: 4]', 'Snorkeling gear[cite: 4]', 'Buffet lunch & drinks[cite: 4]'],
    excludes: ['Photos/videos[cite: 4]', 'Tipping[cite: 4]']
  },
  {
    id: 5002,
    title: 'Abu Dabbab Bay Sea Turtle & Dugong Snorkeling',
    slug: 'abu-dabbab-snorkeling-trip',
    destination: { id: 5, name: 'Marsa Alam', slug: 'marsa-alam' },
    type: ['Snorkeling', 'Marine Life', 'Beach Day'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 60,
    oldPrice: 85,
    rating: 4.9,
    reviews: 190,
    coverImage: 'assets/images/trips/snorkeling/5002/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/snorkeling/5002/${i + 1}.webp`),
    shortDescription: 'Shore-access snorkeling in the protected bay of Abu Dabbab, famous for green sea turtles and rare dugong sightings over seagrass beds[cite: 7].',
    highlights: ['High probability of snorkeling with wild green turtles[cite: 7]', 'Possible sighting of the protected sea cow[cite: 7]', 'Easy shore-entry without boat sailing[cite: 7]'],
    itinerary: [
      { title: 'Arrival at Abu Dabbab', description: 'Transfer from hotel to the beach and get your snorkeling gear[cite: 7].' },
      { title: 'Guided Snorkeling Sessions', description: 'Snorkel through the seagrass meadows to spot resident sea turtles[cite: 7].' },
      { title: 'Beach Relaxation', description: 'Relax on the sandy beach sunbeds before hotel return[cite: 7].' }
    ],
    includes: ['Hotel transfers[cite: 7]', 'Beach entrance[cite: 7]', 'Snorkeling gear & guide[cite: 7]', 'Bottled water[cite: 7]'],
    excludes: ['Lunch[cite: 7]', 'Tipping[cite: 7]']
  },
  {
    id: 5003,
    title: 'Sataya Dolphin Reef Full-Day Snorkeling Boat Trip',
    slug: 'sataya-dolphin-reef-snorkeling',
    destination: { id: 5, name: 'Marsa Alam', slug: 'marsa-alam' },
    type: ['Snorkeling', 'Boat Trip', 'Dolphins'],
    duration: { value: 9, unit: 'hours', text: '8–10 Hours' },
    price: 75,
    oldPrice: 95,
    rating: 5.0,
    reviews: 230,
    coverImage: 'assets/images/trips/snorkeling/5003/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/snorkeling/5003/${i + 1}.webp`),
    shortDescription: 'Cruise to the remote Sataya Dolphin Reef to snorkel near wild spinner dolphins in their natural lagoon and explore untouched coral gardens[cite: 7].',
    highlights: ['Snorkel near wild spinner dolphins in the lagoon[cite: 7]', 'Two guided snorkeling stops at pristine coral reefs[cite: 7]', 'Buffet lunch onboard[cite: 7]'],
    itinerary: [
      { title: 'Cruise to Sataya', description: 'Early pickup and sail south across turquoise waters[cite: 7].' },
      { title: 'Dolphin Lagoon Snorkeling', description: 'Snorkel in the crystal-clear lagoon to observe dolphins[cite: 7].' },
      { title: 'Lunch & Coral Gardens', description: 'Buffet lunch followed by reef snorkeling[cite: 7].' }
    ],
    includes: ['Hotel transfers[cite: 7]', 'Yacht cruise[cite: 7]', 'Snorkeling guide & gear[cite: 7]', 'Buffet lunch and drinks[cite: 7]'],
    excludes: ['Environmental fees[cite: 7]', 'Tips[cite: 7]']
  },
  {
    id: 5004,
    title: 'Paradise Island Full-Day Snorkeling Excursion',
    slug: 'paradise-island-snorkeling-hurghada',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Snorkeling', 'Island Tour', 'Beach'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 30,
    oldPrice: 45,
    rating: 4.8,
    reviews: 240,
    coverImage: 'assets/images/trips/snorkeling/5004/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/snorkeling/5004/${i + 1}.webp`),
    shortDescription: 'Sail to Paradise Island within Giftun National Park. Relax on fine sands, snorkel among tropical fish, and enjoy a yacht buffet lunch[cite: 4].',
    highlights: ['2 hours on Paradise Island sandy beach[cite: 4]', '2 snorkeling stops at offshore coral gardens[cite: 4]', 'Open buffet lunch on yacht[cite: 4]'],
    itinerary: [
      { title: 'Yacht Cruise', description: 'Sail across the Red Sea to selected reef locations[cite: 4].' },
      { title: 'Island Time', description: 'Relax on the beach and swim in shallow waters[cite: 4].' }
    ],
    includes: ['Transfers[cite: 4]', 'Cruise[cite: 4]', 'Snorkel gear[cite: 4]', 'Lunch & drinks[cite: 4]'],
    excludes: ['Tips[cite: 4]']
  },
  {
    id: 5005,
    title: 'Dolphin House Reef Snorkeling Trip in Hurghada',
    slug: 'dolphin-house-snorkeling-hurghada',
    destination: { id: 2, name: 'Hurghada', slug: 'hurghada' },
    type: ['Snorkeling', 'Dolphins', 'Boat Trip'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 35,
    oldPrice: 50,
    rating: 4.8,
    reviews: 280,
    coverImage: 'assets/images/trips/snorkeling/5005/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/snorkeling/5005/${i + 1}.webp`),
    shortDescription: 'Cruise to Sha’ab El Erg (Dolphin House) where pods of wild spinner dolphins are frequently spotted, paired with multiple reef snorkeling stops[cite: 4].',
    highlights: ['Opportunity to observe wild dolphins[cite: 4]', '2-3 coral reef snorkeling stops[cite: 4]', 'Buffet lunch onboard[cite: 4]'],
    itinerary: [
      { title: 'Sail to Dolphin Reef', description: 'Search for dolphins in their natural habitat following wildlife guidelines[cite: 4].' },
      { title: 'Reef Snorkeling', description: 'Snorkel along colorful coral formations[cite: 4].' }
    ],
    includes: ['Transfers[cite: 4]', 'Yacht cruise[cite: 4]', 'Lunch[cite: 4]', 'Snorkeling equipment[cite: 4]'],
    excludes: ['Tips[cite: 4]']
  },
  {
    id: 5006,
    title: 'Marsa Mubarak Sea Turtle & Dugong Boat Excursion',
    slug: 'marsa-mubarak-snorkeling-trip',
    destination: { id: 5, name: 'Marsa Alam', slug: 'marsa-alam' },
    type: ['Snorkeling', 'Marine Life', 'Boat Trip'],
    duration: { value: 8, unit: 'hours', text: '8 Hours' },
    price: 65,
    oldPrice: 85,
    rating: 4.9,
    reviews: 150,
    coverImage: 'assets/images/trips/snorkeling/5006/cover.webp',
    images: Array.from({ length: 5 }, (_, i) => `assets/images/trips/snorkeling/5006/${i + 1}.webp`),
    shortDescription: 'Boat excursion to Marsa Mubarak Bay, famous for giant sea turtles and occasional dugong sightings in turquoise sheltered waters[cite: 7].',
    highlights: ['Two guided snorkeling sessions[cite: 7]', 'Seagrass meadows feeding area for turtles[cite: 7]', 'Fresh buffet lunch on yacht[cite: 7]'],
    itinerary: [
      { title: 'Port Ghalib Marina', description: 'Embark and sail to Marsa Mubarak Bay[cite: 7].' },
      { title: 'Snorkeling', description: 'Guided swim searching for turtles and rays[cite: 7].' }
    ],
    includes: ['Transfers[cite: 7]', 'Boat trip[cite: 7]', 'Snorkel gear[cite: 7]', 'Lunch & drinks[cite: 7]'],
    excludes: ['National park fee[cite: 7]', 'Tips[cite: 7]']
  },
]
