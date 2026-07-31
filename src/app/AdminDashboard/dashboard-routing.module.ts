import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Trips
import { TripFormComponent } from './pages/trips/trip-form/trip-form.component';
import { TripDetailsComponent } from './pages/trips/trip-details/trip-details.component';

// Packages
import { PackagesComponent } from './pages/packages/packages.component';
import { PackageFormComponent } from './pages/packages/package-form/package-form.component';
import { PackageDetailsComponent } from './pages/packages/package-details/package-details.component';

// Users
import { UsersComponent } from './pages/users/users.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';

// Bookings
import { BookingsComponent } from './pages/bookings/bookings.component';
import { BookingDetailsComponent } from './pages/bookings/booking-details/booking-details.component';

// Settings
import { SettingsComponent } from './pages/settings/settings.component';
import { TripsListComponent } from './pages/trips/trips-list/trips-list.component';
import { TripCreateComponent } from './pages/trips/trip-create/trip-create.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DashboardComponent },

      // Trips
      { path: 'trips', component: TripsListComponent },
      { path: 'trips/new', component: TripCreateComponent },
      { path: 'trips/:id', component: TripDetailsComponent },
      { path: 'trips/:id/edit', component: TripFormComponent },

      // Packages
      { path: 'packages', component: PackagesComponent },
      { path: 'packages/new', component: PackageFormComponent },
      { path: 'packages/:id', component: PackageDetailsComponent },
      { path: 'packages/:id/edit', component: PackageFormComponent },

      // Users
      { path: 'users', component: UsersComponent },
      { path: 'users/new', component: UserFormComponent },
      { path: 'users/:id', component: UserDetailsComponent },
      { path: 'users/:id/edit', component: UserFormComponent },

      // Bookings
      { path: 'bookings', component: BookingsComponent },
      { path: 'bookings/:id', component: BookingDetailsComponent },

      // Settings
      { path: 'settings', component: SettingsComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
