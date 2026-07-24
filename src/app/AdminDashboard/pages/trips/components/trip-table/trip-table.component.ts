import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trip } from '../../../../../core/models/Details/Trip';

@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrls: ['./trip-table.component.css'],
  standalone: false
})
export class TripTableComponent {

  @Input() trips: Trip[] = [];

  @Output() deleteTrip = new EventEmitter<number>();

}
