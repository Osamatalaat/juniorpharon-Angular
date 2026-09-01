import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-faq-search',

  templateUrl: './faq-search.component.html',

  styleUrls: ['./faq-search.component.css'],

  standalone: false,
})
export class FaqSearchComponent {
  searchText = '';

  @Output()
  searchChange = new EventEmitter<string>();

  onSearch() {
    this.searchChange.emit(this.searchText.trim());
  }

  clearSearch() {
    this.searchText = '';

    this.searchChange.emit('');
  }
}
