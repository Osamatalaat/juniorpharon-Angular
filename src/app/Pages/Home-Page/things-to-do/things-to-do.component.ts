import { Component } from '@angular/core';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.css'],
  standalone: false
})
export class ThingsToDoComponent {

  activities = [

    {
      title: 'Nile Cruises',
      image: 'assets/images/things/1.jpg',
      link: '/nile-cruises'
    },

    {
      title: 'Hot Air Balloon',
      image: 'assets/images/things/1.jpg',
      link: '/hot-air-balloon'
    },

    {
      title: 'Camel Riding',
      image: 'assets/images/things/1.jpg',
      link: '/camel-riding'
    },

    {
      title: 'Desert Safari',
      image: 'assets/images/things/1.jpg',
      link: '/desert-safari'
    },

    {
      title: 'Snorkeling',
      image: 'assets/images/things/1.jpg',
      link: '/snorkeling'
    },

    {
      title: 'Scuba Diving',
      image: 'assets/images/things/1.jpg',
      link: '/scuba-diving'
    },

    {
      title: 'Dinner Cruise',
      image: 'assets/images/things/1.jpg',
      link: '/dinner-cruise'
    },

    {
      title: 'Sound & Light Show',
      image: 'assets/images/things/1.jpg',
      link: '/sound-light-show'
    }

  ];

}
