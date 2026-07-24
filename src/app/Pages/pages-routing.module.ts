import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './Home-Page/home/home.component';
import { TripComponent } from './Trips-page/Trip/Trip.component';
import { TripDetailsComponent } from './Trips-page/trip-details/trip-details.component';
import { PackageLayoutComponent } from './Packages-page/package-layout/package-layout.component';
import { PackageDetailsComponent } from './Packages-page/package-details/package-details.component';

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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
