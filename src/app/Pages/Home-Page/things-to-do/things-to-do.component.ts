import { Component } from '@angular/core';


interface ActivityItem {

  title: string;

  slug: string;

  image: string;

}



@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.css'],
  standalone: false
})
export class ThingsToDoComponent {



  readonly activities: ActivityItem[] = [

    {
      title: 'Nile Cruises',
      slug: 'nile-cruises',
      image: 'assets/images/things/nile.jpg'
    },


    {
      title: 'Hot Air Balloon',
      slug: 'hot-air-balloon',
      image: 'assets/images/things/ballon.jpg'
    },


    {
      title: 'Camel Riding',
      slug: 'camel-riding',
      image: 'assets/images/things/camel.jpg'
    },


    {
      title: 'Desert Safari',
      slug: 'desert-safari',
      image: 'assets/images/things/desert.jpg'
    },


    {
      title: 'Snorkeling',
      slug: 'snorkeling',
      image: 'assets/images/things/snokeling.jpg'
    },


    {
      title: 'Scuba Diving',
      slug: 'scuba-diving',
      image: 'assets/images/things/scubadiving.jpg'
    },


    {
      title: 'Dinner Cruise',
      slug: 'dinner-cruise',
      image: 'assets/images/things/dinner.jpg'
    },


    {
      title: 'Sound & Light Show',
      slug: 'sound-light-show',
      image: 'assets/images/things/philae3.webp'
    }


  ];



}
