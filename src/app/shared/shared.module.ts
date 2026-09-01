// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Components
import { RegisterComponent } from './Account/register/register.component';
import { LoginComponent } from './Account/login/login.component';
import { AccountLayoutComponent } from './Account/account-layout/account-layout.component';

// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomTranslateLoader } from './custom-translate-loader';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './Navbar-section/Navbar/Navbar.component';
import { DayTourComponent } from './Navbar-section/day-tour/day-tour.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DayTourMobileComponent } from './Navbar-section/day-tour-mobile/day-tour-mobile.component';
// PrimeNG Modules
// import { MenuModule } from 'primeng/menu';
// import { ButtonModule } from 'primeng/button';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,


    // BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // Translation Module
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],

  declarations: [
    AccountLayoutComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DayTourComponent,
    DayTourMobileComponent,
    PaginationComponent,
    BreadcrumbComponent
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AccountLayoutComponent,
    TranslateModule,
    PaginationComponent,
    // MenuModule,
    // ButtonModule,

    // BrowserAnimationsModule,
    NavbarComponent,
    FooterComponent,


  ]
})
export class SharedModule {}
