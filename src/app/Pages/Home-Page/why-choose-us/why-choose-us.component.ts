import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css'],
  standalone: false
})
export class WhyChooseUsComponent {

  stats = [
  {
    icon: 'assets/icons/user-experience.svg',
    color: 'bg-gold',
    value: '15+',
    title: 'Years of',
    subtitle: 'Experience'
  },
  {
    icon: 'assets/icons/people-travels.svg',
    color: 'bg-gold',
    value: '5,000+',
    title: 'Happy',
    subtitle: 'Travelers'
  },
  {
    icon: 'assets/icons/map.svg',
    color: 'bg-gold',
    value: '300+',
    title: 'Tours &',
    subtitle: 'Excursions'
  },
  {
    icon: 'assets/icons/24-hours-support.svg',
    color: 'bg-gold',
    value: '24/7',
    title: 'Customer',
    subtitle: 'Support'
  },
  {
    icon: 'assets/icons/vip.svg',
    color: 'bg-gold',
    value: '100%',
    title: 'private tours'
  }

];

}
