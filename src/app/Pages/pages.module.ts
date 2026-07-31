import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './Home-Page/home/home.component';
import { HeroSectionComponent } from './Home-Page/hero-section/hero-section.component';
// import { share } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
// import { RouterModule, Routes } from '@angular/router';
import { ExploreResortsComponent } from './Home-Page/explore-resorts/explore-resorts.component';
import { ResortGuideSectionComponent } from './Home-Page/ResortGuideSection/ResortGuideSection.component';

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
import { HerooSectionComponent } from './Home-Page/heroo-section/heroo-section/heroo-section.component';
import { TripsHeroComponent } from './Trips-page/trips-hero/trips-hero.component';
import { TripsToolbarComponent } from './Trips-page/trips-toolbar/trips-toolbar.component';
import { TripsBreadcrumbComponent } from './Trips-page/trips-breadcrumb/trips-breadcrumb.component';
import { PackagesHeroComponent } from './Packages-page/packages-hero/packages-hero.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CompanyIntroComponent } from './Home-Page/company-intro/company-intro.component';
import { FeaturedCategoriesComponent } from './Home-Page/featured-categories/featured-categories.component';
import { FaqReviewsComponent } from './Home-Page/faq-reviews/faq-reviews.component';
import { ThingsToDoComponent } from './Home-Page/things-to-do/things-to-do.component';
import { WhyChooseUsComponent } from './Home-Page/why-choose-us/why-choose-us.component';
import { TravelGuideCardComponent } from './Home-Page/travel-guide/travel-guide.component';
import { DestinationMapComponent } from './destination-map/destination-map.component';



@NgModule({
   imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
  ],
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    HerooSectionComponent,
    CompanyIntroComponent,
    FeaturedCategoriesComponent,
    WhyChooseUsComponent,
    TravelGuideCardComponent,
    ThingsToDoComponent,
    FaqReviewsComponent,
    ExploreResortsComponent,
    ResortGuideSectionComponent,
    SpecialOffersComponent,
    NewsletterSubscribeComponent,
    TripComponent,
    FilterSidebarComponent,
    TripCardComponent,
    TripDetailsComponent,
    TripsHeroComponent,
    TripsBreadcrumbComponent,
    TripsToolbarComponent,
    PackageLayoutComponent,
    PackagesHeroComponent,
    PackageCardComponent,
    PackageFilterComponent,
    PackageDetailsComponent,
    BookingFormComponent,
    BookingLayoutComponent,
    UserReviewCardComponent,
    MainLayoutComponent,
    DestinationMapComponent
  ],
  exports: [],
})
export class PagesModule {}

