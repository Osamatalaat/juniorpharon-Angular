import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home-Page/home/home.component';
import { HeroSectionComponent } from './Home-Page/hero-section/hero-section.component';
import { share } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    HeroSectionComponent,


  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
