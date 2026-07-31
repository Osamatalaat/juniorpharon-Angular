import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.css'],
  standalone: false
})
export class FeaturedCategoriesComponent {

  packages = [

    {
      title: 'Classic Egypt Tours',
      image: 'assets/images/packages/1.jpg',
      link: '/tours/classic'
    },

    {
      title: 'Luxury Egypt Tours',
      image: 'assets/images/packages/2.jpg',
      link: '/tours/luxury'
    },

    {
      title: 'Family Holidays',
      image: 'assets/images/packages/3.jpg',
      link: '/tours/family'
    },

    {
      title: 'Solo Traveller Packages',
      image: 'assets/images/packages/4.jpg',
      link: '/tours/solo'
    },

    {
      title: 'Honeymoon Packages',
      image: 'assets/images/packages/2.jpg',
      link: '/tours/honeymoon'
    },

    {
      title: 'Seasonal Tours',
      image: 'assets/images/packages/3.jpg',
      link: '/tours/seasonal'
    }

  ];

  highlights = [

    {
      title: 'Luxury Nile Cruises',
      image: 'assets/images/highlights/3.jpg',
      description:
        'Sail the legendary Nile River aboard luxury cruises with unforgettable experiences.',
      button: 'Explore Nile Cruises',
      link: '/nile-cruises'
    },

    {
      title: 'Egypt Day Tours',
      image: 'assets/images/highlights/1.jpg',
      description:
        'Private day tours across Cairo, Luxor, Aswan, Alexandria and the Red Sea.',
      button: 'Explore Day Tours',
      link: '/day-tours'
    },

    {
      title: 'Top Destinations',
      image: 'assets/images/highlights/2.jpg',
      description:
        'Explore Egypt’s most beautiful destinations with our expert local guides.',
      button: 'Explore Destinations',
      link: '/destinations'
    }

  ];

}
