import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trip-filter',
  templateUrl: './trip-filter.component.html',
  styleUrls: ['./trip-filter.component.css'],
  standalone: false,
})
export class TripFilterComponent {
  filter = {
    search: '',
    cities: [] as string[],
    ratings: [] as number[],
    durations: [] as string[],
  };

  @Output() filterChanged = new EventEmitter<any>();

  apply() {
    this.filterChanged.emit(this.filter);
  }

  toggleCity(city: string, event: any) {
    if (event.target.checked) this.filter.cities.push(city);
    else this.filter.cities = this.filter.cities.filter((x) => x != city);

    this.apply();
  }

  toggleRating(rate: number, event: any) {
    if (event.target.checked) this.filter.ratings.push(rate);
    else this.filter.ratings = this.filter.ratings.filter((x) => x != rate);

    this.apply();
  }

  toggleDuration(duration: string, event: any) {
    if (event.target.checked) this.filter.durations.push(duration);
    else
      this.filter.durations = this.filter.durations.filter(
        (x) => x != duration,
      );

    this.apply();
  }


  resetFilters() {

  this.filter = {
    search: '',
    cities: [],
    ratings: [],
    durations: [],
  };

  this.apply();

}
}
