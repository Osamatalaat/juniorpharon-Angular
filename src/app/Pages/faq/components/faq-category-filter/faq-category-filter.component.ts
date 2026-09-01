import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-faq-category-filter',

  templateUrl: './faq-category-filter.component.html',

  styleUrls: ['./faq-category-filter.component.css'],

  standalone: false,
})
export class FaqCategoryFilterComponent {
  categories = [
    {
      name: 'All',
      value: 'all',
    },

    {
      name: 'Booking',
      value: 'booking',
    },

    {
      name: 'Tours',
      value: 'tours',
    },

    {
      name: 'Packages',
      value: 'packages',
    },

    {
      name: 'Payments',
      value: 'payments',
    },
  ];

  selectedCategory = 'all';

  @Output()
  categoryChange = new EventEmitter<string>();

  selectCategory(category: string) {
    this.selectedCategory = category;

    this.categoryChange.emit(category);
  }
}
