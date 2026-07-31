import { Component } from '@angular/core';

interface Place {
  name: string;
  type: string;
}

interface City {
  id: number;
  name: string;
  image: string;
  description: string;
  x: string;
  y: string;
  places: Place[];
}

@Component({
  selector: 'app-destination-map',
  templateUrl: './destination-map.component.html',
  styleUrls: ['./destination-map.component.css'],
  standalone: false
})
export class DestinationMapComponent {

  cities: City[] = [

    {
      id: 1,
      name: 'Alexandria',
      image: 'assets/images/destinations/alexandria.jpg',
      description:
        'The pearl of the Mediterranean, famous for its history, beaches and the Bibliotheca Alexandrina.',
      x: '20%',
      y: '15%',
      places: [
        { name: 'Bibliotheca Alexandrina', type: 'Library' },
        { name: 'Citadel of Qaitbay', type: 'Fortress' },
        { name: 'Montaza Palace', type: 'Palace' },
        { name: 'Pompey’s Pillar', type: 'Monument' }
      ]
    },

    {
      id: 2,
      name: 'Cairo',
      image: 'assets/images/destinations/cairo.jpg',
      description:
        'Egypt’s capital city, full of museums, mosques and Islamic heritage.',
      x: '45%',
      y: '27%',
      places: [
        { name: 'Egyptian Museum', type: 'Museum' },
        { name: 'Khan El Khalili', type: 'Market' },
        { name: 'Citadel of Saladin', type: 'Fortress' },
        { name: 'Al Azhar Mosque', type: 'Mosque' }
      ]
    },

    {
      id: 3,
      name: 'Giza',
      image: 'assets/images/destinations/giza.jpg',
      description:
        'Home of the Great Pyramids and the legendary Sphinx.',
      x: '42%',
      y: '31%',
      places: [
        { name: 'Great Pyramid', type: 'Pyramid' },
        { name: 'Sphinx', type: 'Monument' },
        { name: 'Saqqara', type: 'Necropolis' }
      ]
    },

    {
      id: 4,
      name: 'Luxor',
      image: 'assets/images/destinations/luxor.jpg',
      description:
        'The world’s greatest open-air museum with magnificent ancient temples.',
      x: '55%',
      y: '58%',
      places: [
        { name: 'Karnak Temple', type: 'Temple' },
        { name: 'Luxor Temple', type: 'Temple' },
        { name: 'Valley of the Kings', type: 'Historical Site' },
        { name: 'Hatshepsut Temple', type: 'Temple' }
      ]
    },

    {
      id: 5,
      name: 'Aswan',
      image: 'assets/images/destinations/aswan.jpg',
      description:
        'Discover Nubian culture, the Nile and breathtaking ancient temples.',
      x: '60%',
      y: '78%',
      places: [
        { name: 'Abu Simbel', type: 'Temple' },
        { name: 'Philae Temple', type: 'Temple' },
        { name: 'Kom Ombo Temple', type: 'Temple' },
        { name: 'High Dam', type: 'Landmark' },
        { name: 'Nubian Village', type: 'Village' }
      ]
    },

    {
      id: 6,
      name: 'Hurghada',
      image: 'assets/images/destinations/hurghada.jpg',
      description:
        'Crystal-clear water, diving and luxury Red Sea resorts.',
      x: '73%',
      y: '55%',
      places: [
        { name: 'Giftun Island', type: 'Island' },
        { name: 'Marina', type: 'Harbor' },
        { name: 'Desert Safari', type: 'Adventure' }
      ]
    },

    {
      id: 7,
      name: 'Sharm El Sheikh',
      image: 'assets/images/destinations/sharm.png',
      description:
        'One of the best diving and beach destinations in the world.',
      x: '86%',
      y: '52%',
      places: [
        { name: 'Ras Mohammed', type: 'National Park' },
        { name: 'Naama Bay', type: 'Beach' },
        { name: 'SOHO Square', type: 'Entertainment' }
      ]
    }

  ];

  selectedCity: City = this.cities[4];

  selectCity(city: City): void {
    this.selectedCity = city;
  }

}
