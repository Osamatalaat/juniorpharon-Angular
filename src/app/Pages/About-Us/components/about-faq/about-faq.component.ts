import { Component } from '@angular/core';

import {
  ABOUT_FAQS,
  FaqItem,
} from '../../data/about-us.data';



@Component({
  selector: 'app-about-faq',
  templateUrl: './about-faq.component.html',
  styleUrls: ['./about-faq.component.css'],
  standalone: false,
})
export class AboutFaqComponent {


  readonly faqs: FaqItem[] =
    ABOUT_FAQS;


}
