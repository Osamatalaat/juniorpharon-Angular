import { Trip } from '../../models/trip.model';

export const NILE_CRUISES_TRIPS: Trip[] = [
  {
    id: 1001,
    title: '3 Days Nile Cruise Aswan to Luxor',
    slug: '3-days-nile-cruise-aswan-to-luxor',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Nile Cruise', 'Full Board', 'Historical'],
    duration: { value: 3, unit: 'days', text: '3 Days / 2 Nights' },
    price: 399,
    oldPrice: 480,
    rating: 4.9,
    reviews: 155,
    coverImage: 'assets/images/trips/cruises/1001/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1001/${i + 1}.webp`),
    shortDescription: 'Sail the Nile aboard a 5-star cruise from Aswan to Luxor with full-board accommodation, visiting Philae Temple, Kom Ombo, Edfu, and Valley of the Kings[cite: 8, 11].',
    highlights: [
      '2 nights aboard deluxe 5-star cruise[cite: 8, 11]',
      'Philae Temple & Aswan High Dam[cite: 8, 11]',
      'Kom Ombo double temple & Edfu Temple of Horus[cite: 8, 11]',
      'Valley of the Kings, Hatshepsut & Karnak in Luxor[cite: 8, 11]',
      'Full board meals included[cite: 8, 11]'
    ],
    itinerary: [
      { title: 'Day 1: Aswan Sightseeing & Embarkation', description: 'Meet guide in Aswan, visit High Dam and Philae Temple, check-in, lunch and dinner onboard[cite: 8, 11].' },
      { title: 'Day 2: Kom Ombo & Edfu Temples', description: 'Sail to Kom Ombo Temple of Sobek, proceed to Temple of Horus at Edfu, and cruise toward Luxor[cite: 8, 11].' },
      { title: 'Day 3: Luxor East & West Banks', description: 'Tour Valley of the Kings, Hatshepsut Temple, Colossi of Memnon, and Karnak Temple before transfer[cite: 8, 11].' }
    ],
    includes: ['2 nights aboard 5-star cruise[cite: 8, 11]', 'Full board meals[cite: 8, 11]', 'Professional Egyptologist guide[cite: 8, 11]', 'All transfers[cite: 8, 11]'],
    excludes: ['Entrance tickets[cite: 8, 11]', 'Drinks onboard[cite: 8, 11]', 'Optional Abu Simbel trip[cite: 8, 11]', 'Tipping[cite: 8, 11]']
  },
  {
    id: 1002,
    title: '4 Days Nile Cruise Aswan to Luxor',
    slug: '4-days-nile-cruise-aswan-to-luxor',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Nile Cruise', 'Luxury', 'Full Board'],
    duration: { value: 4, unit: 'days', text: '4 Days / 3 Nights' },
    price: 499,
    oldPrice: 590,
    rating: 5.0,
    reviews: 210,
    coverImage: 'assets/images/trips/cruises/1002/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1002/${i + 1}.webp`),
    shortDescription: 'Cruise from Aswan to Luxor with 3 nights on a luxury 5-star ship. Visit Philae, Kom Ombo, Edfu, Esna Lock, Valley of the Kings, and Karnak & Luxor Temples[cite: 8].',
    highlights: [
      '3 nights accommodation on a 5-star luxury cruise[cite: 8]',
      'Philae Island Temple & Aswan High Dam[cite: 8]',
      'Horse carriage ride to Edfu Temple[cite: 8]',
      'Comprehensive East & West Bank tours in Luxor[cite: 8]'
    ],
    itinerary: [
      { title: 'Day 1: Arrival Aswan & Check-in', description: 'Visit High Dam and Philae Temple. Board cruise and relax on sundeck[cite: 8].' },
      { title: 'Day 2: Sail to Kom Ombo & Edfu', description: 'Sail to Kom Ombo double temple, afternoon tea on sundeck, evening entertainment[cite: 8].' },
      { title: 'Day 3: Edfu Temple & Esna Lock', description: 'Visit Horus Temple by horse carriage, sail through Esna Lock to Luxor[cite: 8].' },
      { title: 'Day 4: Luxor Monuments & Departure', description: 'Explore Valley of the Kings, Hatshepsut, Memnon, Karnak, and Luxor Temple[cite: 8].' }
    ],
    includes: ['3 nights cruise accommodation[cite: 8]', 'Full board meals[cite: 8]', 'Egyptologist tour guide[cite: 8]', 'All sightseeing transfers[cite: 8]'],
    excludes: ['Entrance fees[cite: 8]', 'Beverages onboard[cite: 8]', 'Optional Abu Simbel tour[cite: 8]', 'Tipping[cite: 8]']
  },
  {
    id: 1003,
    title: '5 Days Nile Cruise Luxor to Aswan',
    slug: '5-days-nile-cruise-luxor-to-aswan',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Nile Cruise', 'Classic', 'Full Board'],
    duration: { value: 5, unit: 'days', text: '5 Days / 4 Nights' },
    price: 599,
    oldPrice: 720,
    rating: 4.9,
    reviews: 285,
    coverImage: 'assets/images/trips/cruises/1003/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1003/${i + 1}.webp`),
    shortDescription: 'The classic upstream Nile Cruise from Luxor to Aswan. Discover Karnak, Valley of the Kings, Edfu, Kom Ombo, Philae Temple, and High Dam over 4 nights[cite: 8].',
    highlights: [
      '4 nights aboard luxury 5-star cruise[cite: 8]',
      'Complete exploration of Luxor East and West Banks[cite: 8]',
      'Edfu and Kom Ombo Temples while sailing upstream[cite: 8]',
      'Philae Island Temple and Aswan High Dam[cite: 8]'
    ],
    itinerary: [
      { title: 'Day 1: Luxor East Bank', description: 'Board cruise, enjoy lunch, and tour Karnak and Luxor Temples[cite: 8].' },
      { title: 'Day 2: Luxor West Bank & Sail', description: 'Tour Valley of the Kings and Hatshepsut Temple, then sail south through Esna Lock[cite: 8].' },
      { title: 'Day 3: Edfu & Kom Ombo', description: 'Visit Horus Temple and Kom Ombo Crocodile Temple. Continue to Aswan[cite: 8].' },
      { title: 'Day 4: Aswan Sightseeing', description: 'Visit High Dam and Philae Temple. Afternoon at leisure or Nubian Village trip[cite: 8].' },
      { title: 'Day 5: Disembarkation', description: 'Check out and transfer to Aswan Airport or train station[cite: 8].' }
    ],
    includes: ['4 nights cruise accommodation[cite: 8]', 'Full board meals[cite: 8]', 'Egyptologist guide[cite: 8]', 'Transfers[cite: 8]'],
    excludes: ['Entrance tickets[cite: 8]', 'Drinks[cite: 8]', 'Abu Simbel optional trip[cite: 8]', 'Tipping[cite: 8]']
  },
  {
    id: 1004,
    title: '7 Days Nile Cruise Luxor & Aswan Roundtrip',
    slug: '7-days-nile-cruise-luxor-aswan',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Nile Cruise', 'Roundtrip', 'Full Board'],
    duration: { value: 7, unit: 'days', text: '7 Days / 6 Nights' },
    price: 899,
    oldPrice: 1050,
    rating: 5.0,
    reviews: 140,
    coverImage: 'assets/images/trips/cruises/1004/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1004/${i + 1}.webp`),
    shortDescription: 'Sail through ancient Upper Egypt at a leisurely pace aboard a luxury 5-star Nile cruise, experiencing all key temples with ample time to relax[cite: 8].',
    highlights: ['6 nights aboard 5-star cruise[cite: 8]', 'Comprehensive sightseeing in Luxor, Kom Ombo, Edfu, and Aswan[cite: 8]', 'Abu Simbel excursion opportunity[cite: 8]'],
    itinerary: [
      { title: 'Days 1-2: Luxor Temples', description: 'Explore East and West Bank monuments before cruising south toward Esna[cite: 8].' },
      { title: 'Days 3-4: Edfu, Kom Ombo & Aswan', description: 'Visit Horus Temple, Sobek Temple, Philae Temple, and the High Dam[cite: 8].' },
      { title: 'Days 5-7: Leisure & Return', description: 'Sail smoothly back through the Nile Valley to Luxor for departure[cite: 8].' }
    ],
    includes: ['Full board 5-star cruise[cite: 8]', 'Egyptologist guide[cite: 8]', 'Sightseeing transfers[cite: 8]'],
    excludes: ['Entrance fees[cite: 8]', 'Drinks[cite: 8]', 'Tips[cite: 8]']
  },
  {
    id: 1005,
    title: '8 Days Complete Nile Valley Cruise Package',
    slug: '8-days-nile-cruise-package',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Nile Cruise', 'Full Week', 'Deluxe'],
    duration: { value: 8, unit: 'days', text: '8 Days / 7 Nights' },
    price: 999,
    oldPrice: 1200,
    rating: 4.9,
    reviews: 175,
    coverImage: 'assets/images/trips/cruises/1005/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1005/${i + 1}.webp`),
    shortDescription: 'A full-week luxury river cruise discovering the archaeological treasures of Upper Egypt from Aswan to Luxor without rushing[cite: 8, 10].',
    highlights: ['7 nights 5-star cruise stay[cite: 8]', 'In-depth historical tours[cite: 8]', 'Onboard pool, spa, and evening galas[cite: 8]'],
    itinerary: [
      { title: 'Days 1-3: Aswan, Philae & Kom Ombo', description: 'Board in Aswan, visit ancient temples, and cruise north[cite: 8].' },
      { title: 'Days 4-6: Edfu & Luxor Wonders', description: 'Tour Edfu Temple, Valley of the Kings, Hatshepsut, and Karnak[cite: 8].' },
      { title: 'Days 7-8: Leisure on Nile & Departure', description: 'Full day of relaxation on the sundeck followed by disembarkation[cite: 8].' }
    ],
    includes: ['Full board accommodation[cite: 8]', 'Licensed guide[cite: 8]', 'Transfers[cite: 8]'],
    excludes: ['Entrance fees[cite: 8]', 'Drinks[cite: 8]', 'Personal expenses[cite: 8]']
  },
  {
    id: 1006,
    title: 'Ultra Luxury Nile Cruise Experience',
    slug: 'luxury-nile-cruise-experience',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Nile Cruise', 'Ultra Luxury', 'VIP'],
    duration: { value: 5, unit: 'days', text: '5 Days / 4 Nights' },
    price: 1399,
    oldPrice: 1650,
    rating: 5.0,
    reviews: 95,
    coverImage: 'assets/images/trips/cruises/1006/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1006/${i + 1}.webp`),
    shortDescription: 'Experience five-star luxury suites, gourmet fine dining, private Egyptologist guiding, and exclusive amenities along the Nile[cite: 8, 10].',
    highlights: ['Luxury suite with panoramic river views[cite: 8]', 'Gourmet fine dining[cite: 8]', 'Private guided temple excursions[cite: 8]'],
    itinerary: [
      { title: 'Day 1: Luxor VIP Check-in', description: 'Private transfer to luxury vessel and afternoon East Bank visit[cite: 8].' },
      { title: 'Days 2-4: Exclusive Temple Visits', description: 'Private tours of the Valley of the Kings, Edfu, and Kom Ombo[cite: 8].' },
      { title: 'Day 5: Aswan Highlights & Farewell', description: 'Private tour to Philae Temple before VIP airport transfer[cite: 8].' }
    ],
    includes: ['Luxury suite stay[cite: 8]', 'Gourmet full board[cite: 8]', 'Private guide and transport[cite: 8]'],
    excludes: ['International airfare[cite: 8]', 'Premium beverages[cite: 8]', 'Tips[cite: 8]']
  },
  {
    id: 1007,
    title: 'Traditional Dahabiya Luxury Nile Sailing',
    slug: 'dahabiya-nile-cruise-sailing',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Nile Cruise', 'Dahabiya', 'Boutique'],
    duration: { value: 5, unit: 'days', text: '5 Days / 4 Nights' },
    price: 1299,
    oldPrice: 1500,
    rating: 5.0,
    reviews: 110,
    coverImage: 'assets/images/trips/cruises/1007/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1007/${i + 1}.webp`),
    shortDescription: 'Sail aboard an authentic two-masted wooden Dahabiya, docking at secluded islands and villages that large ships cannot reach[cite: 8, 10].',
    highlights: ['Intimate sailing experience with fewer guests[cite: 8]', 'Access to off-the-beaten-path Nile islands[cite: 8]', 'Personalized chef service on deck[cite: 8]'],
    itinerary: [
      { title: 'Day 1: Embarkation in Aswan', description: 'Board your private boutique sailboat and set sail under the breeze[cite: 8].' },
      { title: 'Days 2-4: Village Stops & Temples', description: 'Visit Gebel el-Silsila quarries, Kom Ombo, and Edfu[cite: 8].' },
      { title: 'Day 5: Arrive in Luxor', description: 'Disembark after visiting the ancient monuments of Thebes[cite: 8].' }
    ],
    includes: ['Boutique cabin accommodation[cite: 8]', 'All meals prepared onboard[cite: 8]', 'Private guiding[cite: 8]'],
    excludes: ['Tips[cite: 8]', 'Drinks[cite: 8]', 'Monument tickets[cite: 8]']
  },
  {
    id: 1008,
    title: 'Lake Nasser Nubian Monuments Cruise',
    slug: 'lake-nasser-nubian-cruise',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Nile Cruise', 'Lake Nasser', 'Historical'],
    duration: { value: 5, unit: 'days', text: '5 Days / 4 Nights' },
    price: 999,
    oldPrice: 1180,
    rating: 4.8,
    reviews: 75,
    coverImage: 'assets/images/trips/cruises/1008/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1008/${i + 1}.webp`),
    shortDescription: 'Cruise across Lake Nasser from Aswan to Abu Simbel, visiting ancient rescued Nubian temples like Kalabsha, Wadi El Seboua, and Amada[cite: 8, 10].',
    highlights: ['Sail between Aswan and the great temples of Abu Simbel[cite: 8, 10]', 'Explore remote UNESCO-rescued Nubian monuments[cite: 8]', 'Peaceful lake waters away from crowds[cite: 8]'],
    itinerary: [
      { title: 'Day 1: Kalabsha Temple', description: 'Board the cruise in Aswan and explore the temple of Kalabsha[cite: 8].' },
      { title: 'Days 2-3: Wadi El Seboua & Amada', description: 'Sail across the lake and visit desert temples[cite: 8].' },
      { title: 'Days 4-5: Grand Abu Simbel Temples', description: 'Marvel at the colossal statues of Ramesses II and Nefertari[cite: 8].' }
    ],
    includes: ['Full board cruise stay[cite: 8]', 'Professional Egyptologist[cite: 8]', 'Sightseeing tours[cite: 8]'],
    excludes: ['Flights[cite: 8]', 'Entrance tickets[cite: 8]', 'Tips[cite: 8]']
  },
  {
    id: 1009,
    title: 'Sonesta Luxury 5-Star Nile Cruise',
    slug: 'sonesta-luxury-nile-cruise',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Nile Cruise', 'Luxury', 'Sonesta'],
    duration: { value: 5, unit: 'days', text: '5 Days / 4 Nights' },
    price: 799,
    oldPrice: 950,
    rating: 4.9,
    reviews: 130,
    coverImage: 'assets/images/trips/cruises/1009/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1009/${i + 1}.webp`),
    shortDescription: 'Discover the heritage of Egypt aboard world-renowned Sonesta cruise ships, offering elegant cabins, fine dining, and expert-led tours[cite: 8, 10].',
    highlights: ['Renowned Sonesta hospitality and comfort[cite: 8]', 'Luxurious cabins with wide Nile views[cite: 8]', 'East & West Banks of Luxor and Aswan[cite: 8]'],
    itinerary: [
      { title: 'Day 1: Luxor Embarkation', description: 'Boarding and visiting Karnak and Luxor temples[cite: 8].' },
      { title: 'Days 2-4: Sail Upstream', description: 'Guided visits to Valley of the Kings, Edfu, and Kom Ombo[cite: 8].' },
      { title: 'Day 5: Aswan Wonders', description: 'Explore Philae Temple and the High Dam before departure[cite: 8].' }
    ],
    includes: ['Sonesta 5-star cruise full board[cite: 8]', 'Egyptologist guide[cite: 8]', 'All ground transfers[cite: 8]'],
    excludes: ['Drinks[cite: 8]', 'Entrance fees[cite: 8]', 'Tipping[cite: 8]']
  },
  {
    id: 1010,
    title: 'Steigenberger 5-Star River Cruise Experience',
    slug: 'steigenberger-nile-river-cruise',
    destination: { id: 4, name: 'Aswan', slug: 'aswan' },
    type: ['Nile Cruise', 'Luxury', 'Steigenberger'],
    duration: { value: 4, unit: 'days', text: '4 Days / 3 Nights' },
    price: 899,
    oldPrice: 1080,
    rating: 5.0,
    reviews: 160,
    coverImage: 'assets/images/trips/cruises/1010/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/cruises/1010/${i + 1}.webp`),
    shortDescription: 'Sail in world-class style aboard a Steigenberger Nile cruise vessel featuring floor-to-ceiling windows, rooftop pool, and exceptional cuisine[cite: 8, 10].',
    highlights: ['Steigenberger five-star service standard[cite: 8]', 'Panoramic cabins and luxury amenities[cite: 8]', 'Complete Upper Egypt archaeological program[cite: 8]'],
    itinerary: [
      { title: 'Day 1: Aswan to Kom Ombo', description: 'Sightseeing in Aswan, embarkation, and evening sailing[cite: 8].' },
      { title: 'Day 2: Edfu Temple & Esna', description: 'Visit Horus Temple and relax on the sundeck passing the lock[cite: 8].' },
      { title: 'Days 3-4: Thebes Antiquities', description: 'Valley of the Kings, Hatshepsut, and Karnak Temple tours[cite: 8].' }
    ],
    includes: ['Steigenberger full board stay[cite: 8]', 'Licensed guide[cite: 8]', 'Private transfers[cite: 8]'],
    excludes: ['Sightseeing entrance fees[cite: 8]', 'Beverages[cite: 8]', 'Tips[cite: 8]']
  }
];
