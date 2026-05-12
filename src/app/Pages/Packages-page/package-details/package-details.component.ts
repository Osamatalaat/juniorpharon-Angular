import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PackagesService } from '../../../core/Services/Packages.service';

import { PackageDetails } from '../../../core/models/Details/PackageDetails';
import { PackageTrip } from '../../../core/models/Details/PackageTrip';
import { ReviewMedia } from '../../../core/models/Details/ReviewMedia';
import { Package } from '../../../core/models/Details/Package';


@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
  standalone: false
})
export class PackageDetailsComponent implements OnInit {

  packageDetails?: PackageDetails;

  relatedPackages: Package[] = [];

 mediaReviews: ReviewMedia[] = [];

  loading = false;

  // 🖼️ Viewer
  isViewerOpen = false;
  selectedImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private packagesService: PackagesService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      this.getPackageById(id);

    });
  }

  getPackageById(id: number): void {

    this.loading = true;

    this.packagesService.getPackageDetails().subscribe({

      next: (res: PackageDetails[]) => {

        // 📦 Current Package
        this.packageDetails =
          res.find(p => p.id === id);

        // ⭐ Media Reviews
        this.mediaReviews =
          this.packageDetails?.mediaReviews || [];

        // 📦 Related Packages
        this.loadRelatedPackages();

        console.log('Package Details:', this.packageDetails);

      },

      error: (err) => {

        console.error(
          'Error fetching package details:',
          err
        );

        this.loading = false;
      }
    });
  }

  // ====================================
  // 📦 Load Related Packages
  // ====================================

  loadRelatedPackages(): void {

    if (!this.packageDetails?.relatedPackagesIds?.length) {

      this.loading = false;

      return;
    }

    this.packagesService.getPackages().subscribe({

      next: (res: Package[]) => {

        this.relatedPackages = res.filter(pkg =>

          this.packageDetails
            ?.relatedPackagesIds
            ?.includes(pkg.id)

        );

        this.loading = false;

        console.log(
          'Related Packages:',
          this.relatedPackages
        );
      },

      error: (err) => {

        console.error(
          'Error fetching related packages:',
          err
        );

        this.loading = false;
      }

    });
  }

  // ====================================
  // 🖼️ Viewer Functions
  // ====================================

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
    ) return;

    this.selectedImageIndex =
      (this.selectedImageIndex + 1) %
      this.packageDetails.images.length;
  }

  prevImage(): void {

    if (
      !this.packageDetails ||
      !this.packageDetails.images?.length
    ) return;

    this.selectedImageIndex =
      (
        this.selectedImageIndex - 1 +
        this.packageDetails.images.length
      ) %
      this.packageDetails.images.length;
  }

  showBookingModal = false;

openBooking(): void {

  this.showBookingModal = true;
}

closeBooking(): void {

  this.showBookingModal = false;
}
}
