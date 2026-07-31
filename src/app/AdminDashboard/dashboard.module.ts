import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

// Layout
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

// Shared Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
// import { TripsComponent } from './pages/trips/trips.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { SettingsComponent } from './pages/settings/settings.component';

// Trips
import { TripFormComponent } from './pages/trips/trip-form/trip-form.component';
import { TripDetailsComponent } from './pages/trips/trip-details/trip-details.component';
import { TripTableComponent } from './pages/trips/components/trip-table/trip-table.component';
import { TripFilterComponent } from './pages/trips/components/trip-filter/trip-filter.component';
import { DeleteDialogComponent } from './pages/trips/components/delete-dialog/delete-dialog.component';

// Packages
import { PackageFormComponent } from './pages/packages/package-form/package-form.component';
import { PackageDetailsComponent } from './pages/packages/package-details/package-details.component';
import { PackageTableComponent } from './pages/packages/components/package-table/package-table.component';
import { PackageFilterComponent } from './pages/packages/components/package-filter/package-filter.component';

// Users
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { UserTableComponent } from './pages/users/components/user-table/user-table.component';
import { UserFilterComponent } from './pages/users/components/user-filter/user-filter.component';

// Bookings
import { BookingDetailsComponent } from './pages/bookings/booking-details/booking-details.component';
import { BookingTableComponent } from './pages/bookings/components/booking-table/booking-table.component';
import { BookingFilterComponent } from './pages/bookings/components/booking-filter/booking-filter.component';
import { TripsListComponent } from './pages/trips/trips-list/trips-list.component';
import { TripCreateComponent } from './pages/trips/trip-create/trip-create.component';

@NgModule({
  declarations: [
    // Layout
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,

    // Pages
    DashboardComponent,
    UsersComponent,
    // TripsComponent,
    BookingsComponent,
    PackagesComponent,
    SettingsComponent,

    // Trips
    TripsListComponent,
    TripFormComponent,
    TripDetailsComponent,
    TripTableComponent,
    TripFilterComponent,
    TripCreateComponent,
    DeleteDialogComponent,

    // Packages
    PackageFormComponent,
    PackageDetailsComponent,
    PackageTableComponent,
    PackageFilterComponent,

    // Users
    UserFormComponent,
    UserDetailsComponent,
    UserTableComponent,
    UserFilterComponent,

    // Bookings
    BookingDetailsComponent,
    BookingTableComponent,
    BookingFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
