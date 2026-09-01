import { Component } from '@angular/core';


@Component({

  selector:'app-faq-hero',

  templateUrl:'./faq-hero.component.html',

  styleUrls:['./faq-hero.component.css'],

  standalone:false

})

export class FaqHeroComponent {


  hero = {

    image:
    'assets/images/faq/faq-hero.jpg',


    badge:
    'Need Help?',


    title:
    'Frequently Asked Questions',


    description:
    'Find answers to common questions about our tours, packages, booking process and travel experiences in Egypt.'

  };


}
