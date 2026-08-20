import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Package } from '../../../core/models/package.model';
import { PACKAGES } from '../../../core/data/packages';



@Component({
  selector: 'app-package-category',
  templateUrl: './package-category.component.html',
  styleUrls: ['./package-category.component.css'],
  standalone: false
})
export class PackageCategoryComponent implements OnInit {

  // =====================================================
  // ALL FILTERED PACKAGES
  // =====================================================

  filteredPackages: Package[] = [];

  // =====================================================
  // PACKAGES CURRENT PAGE
  // =====================================================

  packages: Package[] = [];

  // =====================================================
  // PAGE INFORMATION
  // =====================================================

  pageTitle = '';

  pageDescription = '';

  filterValue = '';

  // =====================================================
  // PAGINATION
  // =====================================================

  currentPage = 1;

  pageSize = 6;

  totalPages = 0;

  pageNumbers: number[] = [];

  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(
    private route: ActivatedRoute
  ) {}

  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const category = params.get('category');

      if (!category) {

        this.filteredPackages = [];

        this.packages = [];

        this.resetPagination();

        return;

      }

      this.filterValue = category.toLowerCase();

      this.filterByType(this.filterValue);

    });

  }

  // =====================================================
  // FILTER BY TYPE
  // =====================================================

  private filterByType(type: string): void {

    // ---------------------------------------------------
    // Get packages from the central static data
    // ---------------------------------------------------

    this.filteredPackages = PACKAGES.filter(packageItem =>

      packageItem.type?.some(
        packageType =>
          packageType.toLowerCase() === type
      )

    );

    // ---------------------------------------------------
    // Page Information
    // ---------------------------------------------------

    this.pageTitle =
      this.formatTitle(type) + ' Packages';

    this.pageDescription =
      `Discover our best ${this.formatTitle(type).toLowerCase()} holiday packages across Egypt.`;

    // ---------------------------------------------------
    // Reset Pagination
    // ---------------------------------------------------

    this.currentPage = 1;

    this.updatePagination();

  }

  // =====================================================
  // UPDATE PAGINATION
  // =====================================================

  private updatePagination(): void {

    // ---------------------------------------------------
    // Calculate Total Pages
    // ---------------------------------------------------

    this.totalPages = Math.ceil(
      this.filteredPackages.length / this.pageSize
    );

    // ---------------------------------------------------
    // Make sure Current Page is Valid
    // ---------------------------------------------------

    if (this.totalPages === 0) {

      this.currentPage = 1;

    }
    else if (this.currentPage > this.totalPages) {

      this.currentPage = this.totalPages;

    }

    // ---------------------------------------------------
    // Calculate Start / End
    // ---------------------------------------------------

    const startIndex =
      (this.currentPage - 1) * this.pageSize;

    const endIndex =
      startIndex + this.pageSize;

    // ---------------------------------------------------
    // Packages For Current Page
    // ---------------------------------------------------

    this.packages =
      this.filteredPackages.slice(
        startIndex,
        endIndex
      );

    // ---------------------------------------------------
    // Page Numbers
    // ---------------------------------------------------

    this.pageNumbers =
      Array.from(
        { length: this.totalPages },
        (_, index) => index + 1
      );

  }

  // =====================================================
  // GO TO PAGE
  // =====================================================

  goToPage(page: number): void {

    if (
      page < 1 ||
      page > this.totalPages ||
      page === this.currentPage
    ) {
      return;
    }

    this.currentPage = page;

    this.updatePagination();

    // Optional:
    // Scroll to packages section

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  // =====================================================
  // PREVIOUS PAGE
  // =====================================================

  previousPage(): void {

    if (this.currentPage <= 1) {
      return;
    }

    this.currentPage--;

    this.updatePagination();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  // =====================================================
  // NEXT PAGE
  // =====================================================

  nextPage(): void {

    if (this.currentPage >= this.totalPages) {
      return;
    }

    this.currentPage++;

    this.updatePagination();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  // =====================================================
  // CHANGE PAGE SIZE
  // =====================================================

  changePageSize(): void {

    this.currentPage = 1;

    this.updatePagination();

  }

  // =====================================================
  // RESET PAGINATION
  // =====================================================

  private resetPagination(): void {

    this.currentPage = 1;

    this.totalPages = 0;

    this.pageNumbers = [];

  }

  // =====================================================
  // FORMAT TITLE
  // =====================================================

  private formatTitle(value: string): string {

    return value
      .split('-')
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(' ');

  }

}
