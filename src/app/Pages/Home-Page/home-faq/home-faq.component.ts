import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-home-faq',
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.css'],
  standalone: false,
})
export class HomeFaqComponent {
  activeIndex: number | null = null;

  faqs: FaqItem[] = [
    {
      question: 'What is the best time to visit Egypt?',
      answer:
        'The best time to visit Egypt is from October to April when the weather is cooler.',
    },

    {
      question: 'Do you offer private tours?',
      answer:
        'Yes, we provide private tours with professional guides and comfortable transportation.',
    },

    {
      question: 'Can I customize my trip?',
      answer:
        'Yes, our itineraries can be customized according to your interests.',
    },
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
