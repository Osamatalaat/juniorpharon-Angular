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
import { NavbarComponent } from './Navbar/Navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    FooterComponent
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AccountLayoutComponent,
    TranslateModule,
    NavbarComponent,
    FooterComponent

  ]
})
export class SharedModule {}
