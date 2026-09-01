import { Component } from '@angular/core';


interface BreadcrumbItem {
  label: string;
  url: string;
}


@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.css'],
  standalone: false,
})
export class AboutHeroComponent {


  readonly breadcrumbs: BreadcrumbItem[] = [

    {
      label: 'Home',
      url: '/',
    },

    {
      label: 'About Us',
      url: '/about-us',
    },

  ];

}
