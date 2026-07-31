import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-guide',
  templateUrl: './travel-guide.component.html',
  styleUrls: ['./travel-guide.component.css'],
  standalone: false
})
export class TravelGuideCardComponent {

  guide = {
    image: 'assets/images/travel-guide.jpg',

    title: 'Egypt Travel Guide',

    description:
      'Everything you need to know before your trip. Discover visa information, destination guides, transportation tips and useful travel advice to help you enjoy Egypt with confidence.',

    button: 'Explore Travel Guide',

    link: '/travel-guide'
  };

}
