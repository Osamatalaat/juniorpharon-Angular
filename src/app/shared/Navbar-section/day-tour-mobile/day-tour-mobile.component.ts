import { Component, EventEmitter, Output } from '@angular/core';

import {
  DAY_TOUR_DESTINATIONS,
  DayTourDestination,
} from '../../../core/data/day-tours.data';

@Component({
  selector: 'app-day-tour-mobile',
  templateUrl: './day-tour-mobile.component.html',
  styleUrls: ['./day-tour-mobile.component.css'],
  standalone: false,
})
export class DayTourMobileComponent {
  cities: DayTourDestination[] = DAY_TOUR_DESTINATIONS;

  isOpen = false;

  @Output()
  closeMenu = new EventEmitter<void>();

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selectCity() {
    this.closeMenu.emit();
  }
}
