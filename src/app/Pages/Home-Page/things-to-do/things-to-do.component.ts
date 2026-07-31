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
      image: 'assets/images/things/nile.jpg',
      link: '/nile-cruises'
    },

    {
      title: 'Hot Air Balloon',
      image: 'assets/images/things/ballon.jpg',
      link: '/hot-air-balloon'
    },

    {
      title: 'Camel Riding',
      image: 'assets/images/things/camel.jpg',
      link: '/camel-riding'
    },

    {
      title: 'Desert Safari',
      image: 'assets/images/things/desert.jpg',
      link: '/desert-safari'
    },

    {
      title: 'Snorkeling',
      image: 'assets/images/things/snokeling.jpg',
      link: '/snorkeling'
    },

    {
      title: 'Scuba Diving',
      image: 'assets/images/things/scubadiving.jpg',
      link: '/scuba-diving'
    },

    {
      title: 'Dinner Cruise',
      image: 'assets/images/things/dinner.jpg',
      link: '/dinner-cruise'
    },

    {
      title: 'Sound & Light Show',
      image: 'assets/images/things/philae3.webp',
      link: '/sound-light-show'
    }

  ];

}
