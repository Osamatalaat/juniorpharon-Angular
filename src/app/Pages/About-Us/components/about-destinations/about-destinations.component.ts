import { Component } from '@angular/core';


interface DestinationItem {

  name: string;

  url: string;

}



@Component({

  selector: 'app-about-destinations',

  templateUrl: './about-destinations.component.html',

  styleUrls: ['./about-destinations.component.css'],

  standalone: false,

})
export class AboutDestinationsComponent {



  readonly destinations: DestinationItem[] = [

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



}
