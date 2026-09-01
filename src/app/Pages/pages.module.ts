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
import { PackageCategoryComponent } from './Packages-page/package-category/package-category.component';
import { TripActivityComponent } from './Trips-page/trip-activity/trip-activity.component';

import { AboutUsLayoutComponent } from './About-Us/about-us-layout/about-us-layout.component';
import { AboutHeroComponent } from './About-Us/components/about-hero/about-hero.component';
import { AboutCompanyComponent } from './About-Us/components/about-company/about-company.component';
import { AboutDestinationsComponent } from './About-Us/components/about-destinations/about-destinations.component';
import { AboutServicesComponent } from './About-Us/components/about-services/about-services.component';
import { AboutWhyUsComponent } from './About-Us/components/about-why-us/about-why-us.component';
import { AboutFaqComponent } from './About-Us/components/about-faq/about-faq.component';
import { AboutCtaComponent } from './About-Us/components/about-cta/about-cta.component';
import { AboutValuesComponent } from './About-Us/components/about-values/about-values.component';
import { TripCategoryPageComponent } from './Trips-page/trip-category-page/trip-category-page.component';
import { DayToursLayoutComponent } from './day-tours/day-tours-layout/day-tours-layout.component';
import { DestinationFilterComponent } from './day-tours/components/destination-filter/destination-filter.component';
import { DayTourTripsComponent } from './day-tours/components/day-tour-trips/day-tour-trips.component';
import { DayTourPackagesComponent } from './day-tours/components/day-tour-packages/day-tour-packages.component';
import { DayTourHeroComponent } from './day-tours/components/day-tour-hero/day-tour-hero.component';
import { HomeFaqComponent } from './Home-Page/home-faq/home-faq.component';
import { FaqHeroComponent } from './faq/components/faq-hero/faq-hero.component';
import { FaqLayoutComponent } from './faq/faq-layout/faq-layout.component';
import { FaqContactComponent } from './faq/components/faq-contact/faq-contact.component';
import { FaqListComponent } from './faq/components/faq-list/faq-list.component';
import { FaqSearchComponent } from './faq/components/faq-search/faq-search.component';
import { FaqCategoryFilterComponent } from './faq/components/faq-category-filter/faq-category-filter.component';



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
    HomeFaqComponent,
    WhyChooseUsComponent,
    TravelGuideCardComponent,
    ThingsToDoComponent,
    FaqReviewsComponent,
    ExploreResortsComponent,
    ResortGuideSectionComponent,
    SpecialOffersComponent,
    NewsletterSubscribeComponent,
    TripComponent,
    TripCategoryPageComponent,
    FilterSidebarComponent,
    TripCardComponent,
    TripDetailsComponent,
    TripsHeroComponent,
    TripsBreadcrumbComponent,
    TripsToolbarComponent,
    TripActivityComponent,
    PackageLayoutComponent,
    PackagesHeroComponent,
    PackageCardComponent,
    PackageFilterComponent,
    PackageDetailsComponent,
    PackageCategoryComponent,
    BookingFormComponent,
    BookingLayoutComponent,
    UserReviewCardComponent,
    MainLayoutComponent,
    DestinationMapComponent,
    AboutUsLayoutComponent,
    AboutHeroComponent,
    AboutCompanyComponent,
    AboutDestinationsComponent,
    AboutServicesComponent,
    AboutWhyUsComponent,
    AboutFaqComponent,
    AboutCtaComponent,
    AboutValuesComponent,
    DayTourHeroComponent,
    DayTourPackagesComponent,
    DayTourTripsComponent,
    DestinationFilterComponent,
    DayToursLayoutComponent,
    //faq
    FaqReviewsComponent,
    FaqLayoutComponent,
    FaqHeroComponent,
    FaqContactComponent,
    FaqListComponent,
    FaqSearchComponent,
    FaqCategoryFilterComponent,



  ],
  exports: [],
})
export class PagesModule {}

