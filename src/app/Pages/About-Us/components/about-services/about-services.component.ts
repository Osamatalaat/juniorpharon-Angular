import { Component } from '@angular/core';


interface ServiceItem {

  icon: string;

  title: string;

  description: string;

}



@Component({

  selector: 'app-about-services',

  templateUrl: './about-services.component.html',

  styleUrls: ['./about-services.component.css'],

  standalone: false,

})
export class AboutServicesComponent {



  readonly services: ServiceItem[] = [


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
        'Professional Egyptologist guides for historical attractions and cultural experiences.',
    },


    {
      icon: 'fa-solid fa-calendar-check',
      title: 'Custom Packages',
      description:
        'Tailor-made Egypt vacations created around your interests and travel plans.',
    },


  ];



}
