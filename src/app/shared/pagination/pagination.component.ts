import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: false
})
export class PaginationComponent {

  @Input() currentPage = 1;

  @Input() totalPages = 1;

  @Output() pageChanged = new EventEmitter<number>();

  changePage(page: number): void {

    if (page < 1 || page > this.totalPages) {
      return;
    }

    if (page === this.currentPage) {
      return;
    }

    this.currentPage = page;

    this.pageChanged.emit(page);

  }

  get pages(): number[] {

    return Array.from(
      { length: Math.max(this.totalPages, 1) },
      (_, i) => i + 1
    );

  }

  get isFirstPage(): boolean {

    return this.currentPage === 1;

  }

  get isLastPage(): boolean {

    return this.currentPage === this.totalPages;

  }

}
