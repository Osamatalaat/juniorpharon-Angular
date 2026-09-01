import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './Home-Page/home/home.component';
import { TripComponent } from './Trips-page/Trip/Trip.component';
import { TripDetailsComponent } from './Trips-page/trip-details/trip-details.component';
import { PackageLayoutComponent } from './Packages-page/package-layout/package-layout.component';
import { PackageDetailsComponent } from './Packages-page/package-details/package-details.component';
import { DestinationMapComponent } from './destination-map/destination-map.component';
import { PackageCategoryComponent } from './Packages-page/package-category/package-category.component';
import { AboutUsLayoutComponent } from './About-Us/about-us-layout/about-us-layout.component';
import { TripCategoryPageComponent } from './Trips-page/trip-category-page/trip-category-page.component';
import { DayToursLayoutComponent } from './day-tours/day-tours-layout/day-tours-layout.component';
import { FaqLayoutComponent } from './faq/faq-layout/faq-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,

    children: [
      {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'map',
        component: DestinationMapComponent,
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
        path: 'trips/category/:category',
        component: TripCategoryPageComponent,
      },

      // ==========================
      // Faq
      // ==========================
      {
        path: 'faq',
        component: FaqLayoutComponent,
      },

      // ==========================
      // DAY TOURS
      // ==========================

      {
        path: 'day-tours',
        children: [
          {
            path: '',
            component: DayToursLayoutComponent,
          },

          {
            path: ':destination',
            component: DayToursLayoutComponent,
          },
        ],
      },

      {
        path: 'packages',
        component: PackageLayoutComponent,
      },

      {
        path: 'packages/category/:category',
        component: PackageCategoryComponent,
      },

      {
        path: 'packages/destination/:destination',
        component: PackageCategoryComponent,
      },

      {
        path: 'packages/:id',
        component: PackageDetailsComponent,
      },

      {
        path: 'about-us',
        component: AboutUsLayoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
// export class PagesRoutingModule {}
export class PagesRoutingModule {}
