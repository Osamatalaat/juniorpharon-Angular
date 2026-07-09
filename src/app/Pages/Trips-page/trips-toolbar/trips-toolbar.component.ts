import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trips-toolbar',
  templateUrl: './trips-toolbar.component.html',
  styleUrls: ['./trips-toolbar.component.css'],
  standalone: false
})
export class TripsToolbarComponent {

  // ================= Inputs =================

  @Input() totalTrips = 0;

  @Input() searchText = '';

  @Input() sortBy = 'popular';

  @Input() isGridView = true;

  // ================= Outputs =================

  @Output() searchTextChange = new EventEmitter<string>();

  @Output() sortByChange = new EventEmitter<string>();

  @Output() searchChanged = new EventEmitter<void>();

  @Output() sortChanged = new EventEmitter<void>();

  @Output() viewChanged = new EventEmitter<boolean>();

  // ================= Search =================

  onSearchChange(): void {

    this.searchTextChange.emit(this.searchText);

    this.searchChanged.emit();

  }

  // ================= Sort =================

  onSortChange(): void {

    this.sortByChange.emit(this.sortBy);

    this.sortChanged.emit();

  }

  // ================= View =================

  changeView(isGrid: boolean): void {

    this.isGridView = isGrid;

    this.viewChanged.emit(isGrid);

  }

}
