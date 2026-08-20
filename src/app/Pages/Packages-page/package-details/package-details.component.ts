
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Package } from '../../../core/models/package.model';
import { PACKAGES } from '../../../core/data/packages';


@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
  standalone: false
})
export class PackageDetailsComponent implements OnInit {

  // =====================================================
  // PACKAGE
  // =====================================================

  packageDetails?: Package;

  relatedPackages: Package[] = [];

  loading = false;


  // =====================================================
  // IMAGE VIEWER
  // =====================================================

  isViewerOpen = false;

  selectedImageIndex = 0;


  // =====================================================
  // BOOKING MODAL
  // =====================================================

  showBookingModal = false;


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

      const id = Number(params.get('id'));

      this.getPackageById(id);

    });

  }


  // =====================================================
  // GET PACKAGE BY ID
  // =====================================================

  getPackageById(id: number): void {

    this.loading = true;

    const foundPackage =
      PACKAGES.find(pkg => pkg.id === id);

    this.packageDetails = foundPackage;

    if (this.packageDetails) {

      this.loadRelatedPackages();

    } else {

      this.relatedPackages = [];

      this.loading = false;

    }

    console.log(
      'Package Details:',
      this.packageDetails
    );

  }


  // =====================================================
  // RELATED PACKAGES
  // =====================================================

  loadRelatedPackages(): void {

    if (
      !this.packageDetails?.relatedPackagesIds?.length
    ) {

      this.relatedPackages = [];

      this.loading = false;

      return;

    }


    this.relatedPackages =
      PACKAGES.filter(pkg =>
        this.packageDetails
          ?.relatedPackagesIds
          ?.includes(pkg.id)
      );


    this.loading = false;


    console.log(
      'Related Packages:',
      this.relatedPackages
    );

  }


  // =====================================================
  // IMAGE VIEWER
  // =====================================================

  openViewer(index: number): void {

    this.selectedImageIndex = index;

    this.isViewerOpen = true;

  }


  closeViewer(): void {

    this.isViewerOpen = false;

  }


  nextImage(): void {

    if (
      !this.packageDetails ||
      !this.packageDetails.images?.length
    ) {
      return;
    }


    this.selectedImageIndex =
      (
        this.selectedImageIndex + 1
      ) %
      this.packageDetails.images.length;

  }


  prevImage(): void {

    if (
      !this.packageDetails ||
      !this.packageDetails.images?.length
    ) {
      return;
    }


    this.selectedImageIndex =
      (
        this.selectedImageIndex - 1 +
        this.packageDetails.images.length
      ) %
      this.packageDetails.images.length;

  }


  // =====================================================
  // BOOKING
  // =====================================================

  openBooking(): void {

    this.showBookingModal = true;

  }


  closeBooking(): void {

    this.showBookingModal = false;

  }

}
