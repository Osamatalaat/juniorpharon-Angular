import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-tour',
  templateUrl: './day-tour.component.html',
  styleUrls: ['./day-tour.component.css'],
  standalone: false
})
export class DayTourComponent {

 cities = [
  { slug: 'cairo', key: 'CITIES.CAIRO' },
  { slug: 'luxor', key: 'CITIES.LUXOR' },
  { slug: 'aswan', key: 'CITIES.ASWAN' },
  { slug: 'hurghada', key: 'CITIES.HURGHADA' },
  { slug: 'sharm', key: 'CITIES.SHARM_EL_SHEIKH' },
  { slug: 'alexandria', key: 'CITIES.ALEXANDRIA' },
  { slug: 'marsa-alam', key: 'CITIES.MARSA_ALAM' },
  { slug: 'dahab', key: 'CITIES.DAHAB' }
];

}
