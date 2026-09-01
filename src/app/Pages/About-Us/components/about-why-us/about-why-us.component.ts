import { Component } from '@angular/core';

import {
  ABOUT_REASONS,
  ReasonItem,
} from '../../data/about-us.data';



@Component({
  selector: 'app-about-why-us',
  templateUrl: './about-why-us.component.html',
  styleUrls: ['./about-why-us.component.css'],
  standalone: false,
})
export class AboutWhyUsComponent {



  readonly reasons: ReasonItem[] =
    ABOUT_REASONS;



  trackById(
    _index: number,
    item: ReasonItem
  ): string {

    return item.id;

  }


}
