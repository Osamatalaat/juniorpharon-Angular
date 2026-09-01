import { Component, Input, OnChanges } from '@angular/core';

import { FAQ } from '../../../../core/models/faq.model';

import { FAQS } from '../../../../core/data/faqs';

@Component({
  selector: 'app-faq-list',

  templateUrl: './faq-list.component.html',

  styleUrls: ['./faq-list.component.css'],

  standalone: false,
})
export class FaqListComponent implements OnChanges {
  @Input()
  searchValue = '';

  @Input()
  category = 'all';

  faqs: FAQ[] = FAQS;

  filteredFaqs: FAQ[] = [];

  openedId: number | null = null;

  ngOnChanges(): void {
    this.filterFaqs();
  }

  ngOnInit(): void {
    this.filterFaqs();
  }

  filterFaqs() {
    const search = this.searchValue.toLowerCase().trim();

    this.filteredFaqs = this.faqs.filter((faq) => {
      const matchCategory =
        this.category === 'all' || faq.category === this.category;

      const matchSearch =
        !search ||
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search) ||
        faq.category.toLowerCase().includes(search);

      return matchCategory && matchSearch;
    });
  }

  toggle(id: number) {
    if (this.openedId === id) {
      this.openedId = null;
    } else {
      this.openedId = id;
    }
  }
}
