import { Component } from '@angular/core';


interface HeroSlide {

  image: string;

  title: string;

  highlight: string;

  description: string;

}



@Component({

  selector: 'app-day-tour-hero',

  templateUrl: './day-tour-hero.component.html',

  styleUrls: ['./day-tour-hero.component.css'],

  standalone: false

})
export class DayTourHeroComponent {



  readonly hero: HeroSlide = {


    image:
      'assets/images/day-tours/day-tour-hero.jpg',


    title:
      'Discover Egypt',


    highlight:
      'Day Tours',


    description:
      'Explore ancient wonders, breathtaking landscapes and unforgettable experiences with our private Egypt tours.'


  };



}
