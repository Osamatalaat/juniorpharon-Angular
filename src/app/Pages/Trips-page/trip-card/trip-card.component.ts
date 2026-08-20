import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../../../core/models/trip.model';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css'],
  standalone: false
})
export class TripCardComponent {

  @Input() trip!: Trip;
  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/trips', this.trip.id]);
  }
}
