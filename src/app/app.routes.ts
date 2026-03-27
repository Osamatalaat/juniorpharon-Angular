import { Routes } from '@angular/router';
import { LoginComponent } from './shared/Account/login/login.component';
import { RegisterComponent } from './shared/Account/register/register.component';
import { AccountLayoutComponent } from './shared/Account/account-layout/account-layout.component';

export const routes: Routes = [


  {
    path: '',
    loadChildren: () =>
      import('./Pages/pages.module').then((m) => m.PagesModule),
  },
  {

    path: '',
    component: AccountLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
