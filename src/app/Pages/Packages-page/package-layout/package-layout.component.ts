import {
  Component,
  OnInit
} from '@angular/core';

import { Package } from '../../../core/models/package.model';

import { PackageFilter } from '../../../core/models/Search/package-filter';
import { PACKAGES } from '../../../core/data/packages';



@Component({
  selector: 'app-package-layout',
  templateUrl: './package-layout.component.html',
  styleUrls: ['./package-layout.component.css'],
  standalone: false
})
export class PackageLayoutComponent implements OnInit {


  // =====================================================
  // ALL PACKAGES
  // =====================================================

  private allPackages: Package[] = PACKAGES;


  // =====================================================
  // DISPLAYED PACKAGES
  // =====================================================

  packages: Package[] = [];


  // =====================================================
  // LOADING
  // =====================================================

  loading = false;


  // =====================================================
  // PAGINATION
  // =====================================================

  currentPage = 1;


  // Number of cards displayed per page

  pageSize = 6;


  totalItems = 0;


  totalPages = 0;


  pageNumbers: number[] = [];


  // =====================================================
  // CURRENT FILTER
  // =====================================================

  currentFilter: PackageFilter = {

    pageIndex: 1,

    pageSize: this.pageSize

  };


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    this.loadPackages({

      pageIndex: 1,

      pageSize: this.pageSize

    });

  }


  // =====================================================
  // LOAD PACKAGES
  // =====================================================

  loadPackages(filter: PackageFilter): void {

    this.loading = true;


    // ---------------------------------------------------
    // SAVE FILTER
    // ---------------------------------------------------

    this.currentFilter = {

      ...filter,

      pageIndex:
        filter.pageIndex ?? 1,

      pageSize:
        this.pageSize

    };


    this.currentPage =
      this.currentFilter.pageIndex ?? 1;


    // ---------------------------------------------------
    // START WITH ALL PACKAGES
    // ---------------------------------------------------

    let filteredPackages =
      [...this.allPackages];


    // ===================================================
    // PRICE
    // ===================================================

    if (
      this.currentFilter.minPrice !== undefined
    ) {

      filteredPackages =
        filteredPackages.filter(pkg =>

          pkg.price >=
          this.currentFilter.minPrice!

        );

    }


    if (
      this.currentFilter.maxPrice !== undefined
    ) {

      filteredPackages =
        filteredPackages.filter(pkg =>

          pkg.price <=
          this.currentFilter.maxPrice!

        );

    }


    // ===================================================
    // DURATION
    // ===================================================

    if (
      this.currentFilter.durationMin !== undefined
    ) {

      filteredPackages =
        filteredPackages.filter(pkg => {

          const duration =
            pkg.duration.value;


          const min =
            this.currentFilter.durationMin!;


          const max =
            this.currentFilter.durationMax;


          // ---------------------------------------------
          // UNIT
          // ---------------------------------------------

          if (

            this.currentFilter.durationUnit &&

            pkg.duration.unit !==
            this.currentFilter.durationUnit

          ) {

            return false;

          }


          // ---------------------------------------------
          // MIN
          // ---------------------------------------------

          if (duration < min) {

            return false;

          }


          // ---------------------------------------------
          // MAX
          // ---------------------------------------------

          if (
            max !== undefined &&
            duration > max
          ) {

            return false;

          }


          return true;

        });

    }


    // ===================================================
    // RATING
    // ===================================================

    if (
      this.currentFilter.rating !== undefined
    ) {

      filteredPackages =
        filteredPackages.filter(pkg =>

          pkg.rating >=
          this.currentFilter.rating!

        );

    }


    // ===================================================
    // TOTAL
    // ===================================================

    this.totalItems =
      filteredPackages.length;


    this.totalPages =
      Math.ceil(
        this.totalItems /
        this.pageSize
      );


    // ===================================================
    // VALIDATE CURRENT PAGE
    // ===================================================

    if (
      this.totalPages > 0 &&
      this.currentPage > this.totalPages
    ) {

      this.currentPage =
        this.totalPages;

    }


    if (this.currentPage < 1) {

      this.currentPage = 1;

    }


    // ===================================================
    // PAGINATION
    // ===================================================

    const startIndex =
      (this.currentPage - 1) *
      this.pageSize;


    const endIndex =
      startIndex +
      this.pageSize;


    this.packages =
      filteredPackages.slice(
        startIndex,
        endIndex
      );


    // ===================================================
    // PAGE NUMBERS
    // ===================================================

    this.generatePageNumbers();


    // ===================================================
    // FINISH
    // ===================================================

    this.loading = false;

  }


  // =====================================================
  // CHANGE PAGE SIZE
  // =====================================================

  changePageSize(): void {

    // Always return to first page
    // when changing number of cards.

    this.currentPage = 1;


    this.currentFilter = {

      ...this.currentFilter,

      pageIndex: 1,

      pageSize: this.pageSize

    };


    this.loadPackages(
      this.currentFilter
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


    this.currentFilter = {

      ...this.currentFilter,

      pageIndex: page,

      pageSize: this.pageSize

    };


    this.loadPackages(
      this.currentFilter
    );


    // Scroll slightly to packages

    window.scrollTo({

      top: 350,

      behavior: 'smooth'

    });

  }


  // =====================================================
  // PREVIOUS PAGE
  // =====================================================

  previousPage(): void {

    if (
      this.currentPage <= 1
    ) {

      return;

    }


    this.goToPage(
      this.currentPage - 1
    );

  }


  // =====================================================
  // NEXT PAGE
  // =====================================================

  nextPage(): void {

    if (
      this.currentPage >=
      this.totalPages
    ) {

      return;

    }


    this.goToPage(
      this.currentPage + 1
    );

  }


  // =====================================================
  // GENERATE PAGE NUMBERS
  // =====================================================

  private generatePageNumbers(): void {

    this.pageNumbers = [];


    for (
      let i = 1;
      i <= this.totalPages;
      i++
    ) {

      this.pageNumbers.push(i);

    }

  }

}
