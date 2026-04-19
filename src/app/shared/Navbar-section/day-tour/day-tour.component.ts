import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-tour',
  templateUrl: './day-tour.component.html',
  styleUrls: ['./day-tour.component.css'],
  standalone: false
})
export class DayTourComponent {

  cities = [
    { name: 'Cairo', slug: 'cairo' },
    { name: 'Luxor', slug: 'luxor' },
    { name: 'Aswan', slug: 'aswan' },
    { name: 'Hurghada', slug: 'hurghada' },
    { name: 'Sharm El Sheikh', slug: 'sharm' },
    { name: 'Alexandria', slug: 'alexandria' },
    { name: 'Marsa Alam', slug: 'marsa-alam' },
    { name: 'Dahab', slug: 'dahab' }
  ];

}
