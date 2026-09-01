import { Component } from '@angular/core';

import {
  DAY_TOUR_DESTINATIONS
} from '../../../core/data/day-tours.data';



@Component({

  selector: 'app-day-tour',

  templateUrl: './day-tour.component.html',

  styleUrls: ['./day-tour.component.css'],

  standalone:false

})
export class DayTourComponent {



  cities = DAY_TOUR_DESTINATIONS;



}
