import {
  Component,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

import {
  DAY_TOUR_DESTINATIONS,
  DayTourDestination
} from '../../../../core/data/day-tours.data';


@Component({
  selector: 'app-destination-filter',
  templateUrl: './destination-filter.component.html',
  styleUrls: ['./destination-filter.component.css'],
  standalone: false
})
export class DestinationFilterComponent {


  destinations: DayTourDestination[] =
    DAY_TOUR_DESTINATIONS;



  @Input()
  selectedDestination = 'all';



  @Output()
  destinationChange =
    new EventEmitter<string>();




  selectDestination(destination: DayTourDestination) {


    this.selectedDestination =
      destination.slug;



    this.destinationChange.emit(
      destination.slug
    );

  }


}
