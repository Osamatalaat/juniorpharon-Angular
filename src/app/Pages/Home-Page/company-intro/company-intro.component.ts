import { Component } from '@angular/core';

@Component({
  selector: 'app-company-intro',
  templateUrl: './company-intro.component.html',
  styleUrls: ['./company-intro.component.css'],
  standalone: false
})
export class CompanyIntroComponent {

  features = [

    {
      icon: 'assets/icons/guide.svg',
      title: 'Licensed',
      subtitle: 'Egyptologist Guides'
    },

    {
      icon: 'assets/icons/car.svg',
      title: 'Private',
      subtitle: 'Tours & Transfers'
    },

    {
      icon: 'assets/icons/hotel.svg',
      title: 'Carefully Selected',
      subtitle: 'Hotels'
    },

    {
      icon: 'assets/icons/cruise-ship.svg',
      title: 'Luxury',
      subtitle: 'Nile Cruises'
    },

    {
      icon: 'assets/icons/24-hours-support.svg',
      title: '24/7',
      subtitle: 'Customer Support'
    },

    {
      icon: 'assets/icons/best-price.svg',
      title: 'Best Price',
      subtitle: 'Guarantee'
    }

  ];

}
