import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home-Page/home/home.component';
import { HeroSectionComponent } from './Home-Page/hero-section/hero-section.component';
import { share } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ExploreResortsComponent } from './Home-Page/explore-resorts/explore-resorts.component';
import { ResortGuideSectionComponent } from './Home-Page/ResortGuideSection/ResortGuideSection.component';
import { spec } from 'node:test/reporters';
import { SpecialOffersComponent } from './Home-Page/special-offers/special-offers.component';
import { NewsletterSubscribeComponent } from './Home-Page/newsletter-subscribe/newsletter-subscribe.component';
import { TripComponent } from './Trips-page/Trip/Trip.component';
import { TripCardComponent } from './Trips-page/trip-card/trip-card.component';
import { FilterSidebarComponent } from './Trips-page/filter-sidebar/filter-sidebar.component';
import { TripDetailsComponent } from './Trips-page/trip-details/trip-details.component';
import { UserReviewCardComponent } from './Trips-page/user-review-card/user-review-card.component';
import { PackageLayoutComponent } from './Packages-page/package-layout/package-layout.component';
import { PackageCardComponent } from './Packages-page/package-card/package-card.component';
import { PackageFilterComponent } from './Packages-page/package-filter/package-filter.component';
import { PackageDetailsComponent } from './Packages-page/package-details/package-details.component';
import { BookingFormComponent } from './Booking-Page/booking-form/booking-form.component';
import { BookingLayoutComponent } from './Booking-Page/booking-layout/booking-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'trips',
    component: TripComponent,
  },
    {
    path: 'trips/:id',
    component: TripDetailsComponent,
  },
  {
    path: 'packages',
    component: PackageLayoutComponent,
  },
  {
    path: 'packages/:id',
    component: PackageDetailsComponent,
  },
  {
    path: 'booking',
    component: BookingLayoutComponent,
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    ExploreResortsComponent,
    ResortGuideSectionComponent,
    SpecialOffersComponent,
    NewsletterSubscribeComponent,
    TripComponent,
    FilterSidebarComponent,
    TripCardComponent,
    TripDetailsComponent,
    PackageLayoutComponent,
    PackageCardComponent,
    PackageFilterComponent,
    PackageDetailsComponent,
    BookingFormComponent,
    BookingLayoutComponent,
    UserReviewCardComponent
  ],
  exports: [RouterModule],
})
export class PagesModule {}
