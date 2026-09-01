import { Routes } from '@angular/router';

import { LoginComponent } from './shared/Account/login/login.component';
import { RegisterComponent } from './shared/Account/register/register.component';
import { AccountLayoutComponent } from './shared/Account/account-layout/account-layout.component';

export const routes: Routes = [
  // Website
  {
    path: '',
    loadChildren: () =>
      import('./Pages/pages.module').then((m) => m.PagesModule),
  },

  // Admin Dashboard
  {
    path: 'admin',
    loadChildren: () =>
      import('./AdminDashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  // Authentication
  // {
  //   path: 'auth',
  //   component: AccountLayoutComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: RegisterComponent,
  //     },
  //     {
  //       path: '',
  //       redirectTo: 'login',
  //       pathMatch: 'full',
  //     },
  //   ],
  // },

  // 404
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
