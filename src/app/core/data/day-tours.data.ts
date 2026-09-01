export interface DayTourDestination {

  id: number;

  name: string;

  key: string;

  slug: string;

  image: string;

  description: string;

}



export const DAY_TOUR_DESTINATIONS: DayTourDestination[] = [

  {
    id: 0,
    name: 'All',
    key: 'CITIES.ALL',
    slug: 'all',
    image: 'assets/images/destinations/all-egypt.jpg',
    description:
      'Explore all Egypt tours and travel packages'
  },


  {
    id: 1,
    name: 'Cairo',
    key: 'CITIES.CAIRO',
    slug: 'cairo',
    image: 'assets/images/destinations/cairo.jpg',
    description:
      'Discover pyramids, museums and ancient Cairo'
  },


  {
    id: 2,
    name: 'Giza',
    key: 'CITIES.GIZA',
    slug: 'giza',
    image: 'assets/images/destinations/giza.jpg',
    description:
      'Explore the Great Pyramids and Sphinx'
  },


  {
    id: 3,
    name: 'Luxor',
    key: 'CITIES.LUXOR',
    slug: 'luxor',
    image: 'assets/images/destinations/luxor.jpg',
    description:
      'Discover temples and the Valley of Kings'
  },


  {
    id: 4,
    name: 'Aswan',
    key: 'CITIES.ASWAN',
    slug: 'aswan',
    image: 'assets/images/destinations/aswan.jpg',
    description:
      'Experience Nubian culture and Nile beauty'
  },


  {
    id: 5,
    name: 'Hurghada',
    key: 'CITIES.HURGHADA',
    slug: 'hurghada',
    image: 'assets/images/destinations/hurghada.jpg',
    description:
      'Enjoy beaches, snorkeling and diving adventures'
  },


  {
    id: 6,
    name: 'Sharm El Sheikh',
    key: 'CITIES.SHARM_EL_SHEIKH',
    slug: 'sharm-el-sheikh',
    image: 'assets/images/destinations/sharm.jpg',
    description:
      'Relax on Red Sea beaches and enjoy water activities'
  },


  {
    id: 7,
    name: 'Alexandria',
    key: 'CITIES.ALEXANDRIA',
    slug: 'alexandria',
    image: 'assets/images/destinations/alexandria.jpg',
    description:
      'Explore Mediterranean history and landmarks'
  },


  {
    id: 8,
    name: 'Marsa Alam',
    key: 'CITIES.MARSA_ALAM',
    slug: 'marsa-alam',
    image: 'assets/images/destinations/marsa-alam.jpg',
    description:
      'Discover untouched beaches and marine life'
  }

];
