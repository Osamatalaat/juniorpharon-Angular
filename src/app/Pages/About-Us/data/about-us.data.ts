export interface ValueItem {

  id: string;

  icon: string;

  title: string;

  description: string;

}



export interface DestinationItem {

  name: string;

  url: string;

}



export interface ServiceItem {

  icon: string;

  title: string;

  description: string;

}



export interface ReasonItem {

  id: string;

  icon: string;

  title: string;

  description: string;

}



export interface FaqItem {

  question: string;

  answer: string;

}





/* ============================================================
   VALUES
============================================================ */


export const ABOUT_VALUES: ValueItem[] = [


  {
    id: 'local',
    icon: 'fa-solid fa-user-tie',
    title: 'Local Egypt Experts',
    description:
      'Discover Egypt with professional local guides who understand history, culture and hidden gems.',
  },


  {
    id: 'private',
    icon: 'fa-solid fa-route',
    title: 'Private Experiences',
    description:
      'Enjoy personalized itineraries designed around your interests and travel style.',
  },


  {
    id: 'heritage',
    icon: 'fa-solid fa-landmark',
    title: 'Ancient Heritage',
    description:
      'Explore pyramids, temples and historical sites with knowledgeable Egyptologists.',
  },


  {
    id: 'comfort',
    icon: 'fa-solid fa-shield-heart',
    title: 'Comfort & Safety',
    description:
      'Reliable transportation, selected hotels and complete support during your journey.',
  },


];









/* ============================================================
   DESTINATIONS
============================================================ */


export const ABOUT_DESTINATIONS: DestinationItem[] = [


  {
    name: 'Cairo',
    url: '/destinations/cairo',
  },


  {
    name: 'Giza',
    url: '/destinations/giza',
  },


  {
    name: 'Luxor',
    url: '/destinations/luxor',
  },


  {
    name: 'Aswan',
    url: '/destinations/aswan',
  },


  {
    name: 'Alexandria',
    url: '/destinations/alexandria',
  },


  {
    name: 'Hurghada',
    url: '/destinations/hurghada',
  },


  {
    name: 'Sharm El Sheikh',
    url: '/destinations/sharm-el-sheikh',
  },


  {
    name: 'Marsa Alam',
    url: '/destinations/marsa-alam',
  },


];









/* ============================================================
   SERVICES
============================================================ */


export const ABOUT_SERVICES: ServiceItem[] = [


  {
    icon: 'fa-solid fa-plane-arrival',
    title: 'Airport Transfers',
    description:
      'Private airport pickup and transportation services throughout Egypt.',
  },


  {
    icon: 'fa-solid fa-ship',
    title: 'Nile Cruises',
    description:
      'Experience unforgettable Nile cruises between Luxor and Aswan.',
  },


  {
    icon: 'fa-solid fa-hotel',
    title: 'Hotels & Accommodation',
    description:
      'Carefully selected hotels according to your budget and preferences.',
  },


  {
    icon: 'fa-solid fa-car',
    title: 'Private Transportation',
    description:
      'Comfortable vehicles with professional drivers for all destinations.',
  },


  {
    icon: 'fa-solid fa-map-location-dot',
    title: 'Guided Tours',
    description:
      'Professional Egyptologist guides for historical attractions.',
  },


  {
    icon: 'fa-solid fa-calendar-check',
    title: 'Custom Packages',
    description:
      'Tailor-made Egypt vacations created around your interests.',
  },


];









/* ============================================================
   WHY CHOOSE US
============================================================ */


export const ABOUT_REASONS: ReasonItem[] = [


  {
    id: 'guides',
    icon: 'fa-solid fa-user-tie',
    title: 'Professional Local Guides',
    description:
      'Travel with experienced Egyptologist guides who explain history and culture.',
  },


  {
    id: 'private',
    icon: 'fa-solid fa-route',
    title: 'Private & Personalized Tours',
    description:
      'Flexible itineraries designed around your travel style.',
  },


  {
    id: 'hotels',
    icon: 'fa-solid fa-hotel',
    title: 'Carefully Selected Hotels',
    description:
      'Comfortable accommodation options from trusted hotels.',
  },


  {
    id: 'nile',
    icon: 'fa-solid fa-ship',
    title: 'Nile Cruise Experiences',
    description:
      'Discover the Nile River through unforgettable cruise journeys.',
  },


  {
    id: 'transport',
    icon: 'fa-solid fa-car',
    title: 'Flexible Travel Options',
    description:
      'Transportation, flights and complete travel arrangements.',
  },


  {
    id: 'support',
    icon: 'fa-solid fa-headset',
    title: 'Support During Your Trip',
    description:
      'Our team supports you throughout your Egypt vacation.',
  },


];









/* ============================================================
   FAQ
============================================================ */


export const ABOUT_FAQS: FaqItem[] = [


  {
    question:
      'What type of Egypt tours does JuniorPharon Tours offer?',

    answer:
      'We offer private Egypt tours, Nile cruises, day tours, family vacations, honeymoon packages, and customized travel experiences.',
  },


  {
    question:
      'Can I customize my Egypt tour itinerary?',

    answer:
      'Yes. We create personalized itineraries based on your interests, available time, and budget.',
  },


  {
    question:
      'Do you provide Egyptologist guides?',

    answer:
      'Yes. Our tours include professional local guides who provide historical and cultural insights.',
  },


  {
    question:
      'Which destinations can I visit in Egypt?',

    answer:
      'Our tours cover Cairo, Giza, Luxor, Aswan, Alexandria, Hurghada, Marsa Alam and Sharm El Sheikh.',
  },


];
