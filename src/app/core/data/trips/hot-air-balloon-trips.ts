import { Trip } from '../../models/trip.model';

export const HOT_AIR_BALLOON_TRIPS: Trip[] = [
  {
    id: 2001,
    title: 'Classic Sunrise Hot Air Balloon Ride in Luxor',
    slug: 'classic-sunrise-hot-air-balloon-luxor',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'Sunrise Tour', 'Adventure'],
    duration: { value: 3, unit: 'hours', text: '3 Hours (Flight: 45–60 min)' },
    price: 95,
    oldPrice: 130,
    rating: 4.9,
    reviews: 380,
    coverImage: 'assets/images/trips/balloon/2001/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2001/${i + 1}.webp`),
    shortDescription: 'Float peacefully above the Nile River, Valley of the Kings, Hatshepsut Temple, and desert mountains in Luxor at sunrise with a licensed pilot[cite: 5, 6].',
    highlights: ['45-60 minute hot air balloon flight[cite: 5, 6]', 'Panoramic aerial views of Luxor West Bank[cite: 5, 6]', 'Flight certificate from pilot[cite: 5, 6]', 'Hotel transfers included[cite: 5, 6]'],
    itinerary: [
      { title: 'Pre-Dawn Pickup', description: 'Motorboat Nile transfer and arrival at takeoff airfield[cite: 5, 6].' },
      { title: 'Sunrise Ascent', description: 'Lift off gently as the golden sun illuminates ancient temples[cite: 5, 6].' },
      { title: 'Landing & Certificate', description: 'Assisted landing and return to your Luxor hotel[cite: 5, 6].' }
    ],
    includes: ['Round-trip transfers[cite: 5, 6]', 'Balloon flight ticket[cite: 5, 6]', 'Licensed pilot[cite: 5, 6]', 'Flight certificate[cite: 5, 6]'],
    excludes: ['Personal video package[cite: 5, 6]', 'Tipping[cite: 5, 6]']
  },
  {
    id: 2002,
    title: 'VIP Private Basket Hot Air Balloon Flight',
    slug: 'vip-private-basket-balloon-luxor',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'VIP', 'Romantic'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 350,
    oldPrice: 450,
    rating: 5.0,
    reviews: 45,
    coverImage: 'assets/images/trips/balloon/2002/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2002/${i + 1}.webp`),
    shortDescription: 'Enjoy complete privacy with an exclusive hot air balloon flight reserved only for you and your partner, complete with complimentary sparkling juice.',
    highlights: ['Exclusive private basket for couples or families', 'Extended 60-minute scenic flight', 'VIP private car transfers'],
    itinerary: [
      { title: 'VIP Pickup', description: 'Private luxury car transfer to the private launch pad.' },
      { title: 'Exclusive Flight', description: 'Soar uninterrupted over Hatshepsut and Ramesseum.' },
      { title: 'Private Celebration', description: 'Enjoy non-alcoholic toast upon landing.' }
    ],
    includes: ['Private basket booking', 'Private transfers', 'Flight certificate', 'Celebratory drinks'],
    excludes: ['Gratuities', 'Professional photographer fees']
  },
  {
    id: 2003,
    title: 'Sunrise Balloon Ride & West Bank Day Tour Combo',
    slug: 'balloon-ride-west-bank-tour-combo',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'Historical', 'Full Day'],
    duration: { value: 8, unit: 'hours', text: '7–8 Hours' },
    price: 155,
    oldPrice: 195,
    rating: 4.9,
    reviews: 190,
    coverImage: 'assets/images/trips/balloon/2003/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2003/${i + 1}.webp`),
    shortDescription: 'Start the day in the sky above ancient Thebes, then descend for a comprehensive guided tour of the Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon[cite: 5, 6].',
    highlights: ['Sunrise hot air balloon flight[cite: 5, 6]', 'Guided tour inside 3 royal tombs[cite: 5, 6]', 'Temple of Queen Hatshepsut & Memnon Colossi[cite: 5, 6]'],
    itinerary: [
      { title: 'Sunrise Balloon', description: 'Soar above Luxor’s West Bank for 45 minutes[cite: 5, 6].' },
      { title: 'Archaeological Tour', description: 'Meet Egyptologist guide to explore tombs and temples on the ground[cite: 5, 6].' },
      { title: 'Return Transfer', description: 'Comfortable transfer back to hotel or cruise ship[cite: 5, 6].' }
    ],
    includes: ['Balloon flight[cite: 5, 6]', 'Private car & driver[cite: 5, 6]', 'Egyptologist guide[cite: 5, 6]', 'Bottled water[cite: 5, 6]'],
    excludes: ['Tomb entrance tickets[cite: 5, 6]', 'Lunch[cite: 5, 6]', 'Tips[cite: 5, 6]']
  },
  {
    id: 2004,
    title: 'Deluxe Small Group Hot Air Balloon Ride',
    slug: 'deluxe-small-group-balloon-luxor',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'Small Group', 'Sunrise'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 110,
    oldPrice: 145,
    rating: 4.8,
    reviews: 125,
    coverImage: 'assets/images/trips/balloon/2004/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2004/${i + 1}.webp`),
    shortDescription: 'Experience the magic of sunrise flight with reduced passenger capacity per basket for better comfort and unrestricted 360-degree photography.',
    highlights: ['Limited capacity basket for extra comfort', 'Unobstructed photographic angles of ancient sites', 'Coffee and tea before launch'],
    itinerary: [
      { title: 'Lounge Reception', description: 'Enjoy warm tea and pastries at the West Bank staging lounge.' },
      { title: 'Sunrise Drift', description: 'Glide over the Nile and Theban mountains.' },
      { title: 'Landing Ceremony', description: 'Flight certificate handover and return transfer.' }
    ],
    includes: ['Transfers', 'Small group balloon flight', 'Light refreshments', 'Certificate'],
    excludes: ['Tips', 'Personal expenses']
  },
  {
    id: 2005,
    title: 'Sunrise Balloon Flight & East Bank Temples Tour',
    slug: 'balloon-flight-east-bank-temples-tour',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'Full Day', 'Temples'],
    duration: { value: 7, unit: 'hours', text: '7 Hours' },
    price: 150,
    oldPrice: 185,
    rating: 4.9,
    reviews: 140,
    coverImage: 'assets/images/trips/balloon/2005/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2005/${i + 1}.webp`),
    shortDescription: 'Witness dawn from the skies above Luxor, followed by a guided historical exploration of Karnak Temple Complex and Luxor Temple[cite: 5, 6].',
    highlights: ['Sunrise flight over Luxor[cite: 5, 6]', 'Explore the Great Hypostyle Hall at Karnak[cite: 5, 6]', 'Stroll along the Avenue of Sphinxes[cite: 5, 6]'],
    itinerary: [
      { title: 'Dawn Flight', description: 'Hot air balloon excursion over the Nile Valley[cite: 5, 6].' },
      { title: 'Karnak & Luxor Temples', description: 'Guided walking tour through Karnak and Luxor temples[cite: 5, 6].' }
    ],
    includes: ['Balloon ride[cite: 5, 6]', 'Egyptologist guide[cite: 5, 6]', 'Private transport[cite: 5, 6]'],
    excludes: ['Temple tickets[cite: 5, 6]', 'Lunch[cite: 5, 6]', 'Tipping[cite: 5, 6]']
  },
  {
    id: 2006,
    title: 'Honeymoon Sunrise Balloon & Champagne Breakfast',
    slug: 'honeymoon-balloon-champagne-breakfast',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'Honeymoon', 'Luxury'],
    duration: { value: 4, unit: 'hours', text: '4 Hours' },
    price: 280,
    oldPrice: 340,
    rating: 5.0,
    reviews: 65,
    coverImage: 'assets/images/trips/balloon/2006/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2006/${i + 1}.webp`),
    shortDescription: 'A romantic morning flight designed for couples, complete with a post-flight Egyptian breakfast in a tranquil West Bank garden.',
    highlights: ['Romantic flight at sunrise', 'Champagne-style sparkling toast', 'Gourmet garden breakfast after landing'],
    itinerary: [
      { title: 'Morning Pickup', description: 'Private transfer for two to the launch field.' },
      { title: 'Scenic Flight', description: 'Take in panoramic vistas across the ancient city.' },
      { title: 'Garden Breakfast', description: 'Relax with fresh juice, fruits, and Egyptian pastries.' }
    ],
    includes: ['Flight ticket for couple', 'Breakfast', 'Private transfers', 'Certificate'],
    excludes: ['Gratuities']
  },
  {
    id: 2007,
    title: 'Sunrise Balloon Flight with Banana Island Felucca Sail',
    slug: 'balloon-flight-banana-island-sail',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'Sailing', 'Nature'],
    duration: { value: 5, unit: 'hours', text: '5 Hours' },
    price: 135,
    oldPrice: 170,
    rating: 4.8,
    reviews: 90,
    coverImage: 'assets/images/trips/balloon/2007/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2007/${i + 1}.webp`),
    shortDescription: 'Fly high above Luxor at dawn, then wind down with a traditional Nile felucca sail to Banana Island to taste fresh seasonal fruit[cite: 6].',
    highlights: ['45-min sunrise flight[cite: 5, 6]', 'Traditional wooden felucca sailing[cite: 6]', 'Visit banana and tropical fruit groves[cite: 6]'],
    itinerary: [
      { title: 'Balloon Takeoff', description: 'Watch sunrise over the Valley of the Kings[cite: 5, 6].' },
      { title: 'Felucca Cruise', description: 'Board felucca to sail across the Nile to Banana Island[cite: 6].' }
    ],
    includes: ['Balloon flight[cite: 5, 6]', 'Private felucca ride[cite: 6]', 'Fresh fruit tasting[cite: 6]', 'Transfers[cite: 6]'],
    excludes: ['Tips[cite: 6]', 'Personal expenses[cite: 6]']
  },
  {
    id: 2008,
    title: 'Photographers Sunrise Aerial Balloon Workshop',
    slug: 'photographers-aerial-balloon-flight',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'Photography', 'Scenic'],
    duration: { value: 3, unit: 'hours', text: '3 Hours' },
    price: 140,
    oldPrice: 180,
    rating: 4.9,
    reviews: 55,
    coverImage: 'assets/images/trips/balloon/2008/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2008/${i + 1}.webp`),
    shortDescription: 'Tailored for photographers wanting optimal lighting conditions, corner basket positions, and guidance on identifying historical angles from above.',
    highlights: ['Priority corner positioning in basket', 'Extended airtime (weather permitting)', 'Ideal dawn golden-hour lighting'],
    itinerary: [
      { title: 'Early Check-in', description: 'Board early to secure prime camera positions.' },
      { title: 'Aerial Photography', description: 'Capture dramatic shadows of the limestone cliffs and monuments.' }
    ],
    includes: ['Flight ticket', 'Priority placement', 'Transfers'],
    excludes: ['Camera gear rental', 'Tips']
  },
  {
    id: 2009,
    title: 'Sunrise Balloon & Medinet Habu Guided Tour',
    slug: 'balloon-ride-medinet-habu-tour',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'Historical', 'Culture'],
    duration: { value: 6, unit: 'hours', text: '5–6 Hours' },
    price: 145,
    oldPrice: 180,
    rating: 4.9,
    reviews: 70,
    coverImage: 'assets/images/trips/balloon/2009/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2009/${i + 1}.webp`),
    shortDescription: 'Combine an aerial view of the Theban necropolis with an unhurried walking tour of Medinet Habu, Ramesses III’s vibrant temple[cite: 6].',
    highlights: ['Sunrise balloon flight[cite: 5, 6]', 'Vivid reliefs and fortified walls of Medinet Habu[cite: 6]', 'Valley of the Queens visit[cite: 6]'],
    itinerary: [
      { title: 'Balloon Experience', description: 'Fly over Luxor at dawn[cite: 5, 6].' },
      { title: 'Medinet Habu Temple', description: 'Explore deep-carved reliefs and royal history with guide[cite: 6].' }
    ],
    includes: ['Balloon ride[cite: 5, 6]', 'Private car & guide[cite: 6]', 'Transfers[cite: 6]'],
    excludes: ['Entrance tickets[cite: 6]', 'Tips[cite: 6]']
  },
  {
    id: 2010,
    title: 'Executive Sunrise Balloon & Private Nile Yacht Sail',
    slug: 'executive-balloon-private-yacht-sail',
    destination: { id: 3, name: 'Luxor', slug: 'luxor' },
    type: ['Hot Air Balloon', 'VIP', 'Yacht'],
    duration: { value: 5, unit: 'hours', text: '5 Hours' },
    price: 240,
    oldPrice: 300,
    rating: 5.0,
    reviews: 40,
    coverImage: 'assets/images/trips/balloon/2010/cover.webp',
    images: Array.from({ length: 6 }, (_, i) => `assets/images/trips/balloon/2010/${i + 1}.webp`),
    shortDescription: 'A premium morning that pairs the thrill of a sunrise balloon flight with a private motor yacht cruise along the Nile serving breakfast.',
    highlights: ['VIP balloon flight arrangement', 'Private motor yacht charter with breakfast', 'Smooth luxury transfers'],
    itinerary: [
      { title: 'Sunrise Ballooning', description: 'Ascend over the West Bank monuments.' },
      { title: 'Nile Yacht Brunch', description: 'Board a private yacht to cruise the Nile and dine in comfort.' }
    ],
    includes: ['Balloon ride', 'Private yacht charter', 'Breakfast & drinks', 'VIP transport'],
    excludes: ['Personal items', 'Tips']
  }
];
