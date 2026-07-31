import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-reviews',
  templateUrl: './faq-reviews.component.html',
  styleUrls: ['./faq-reviews.component.css'],
  standalone: false
})
export class FaqReviewsComponent  {

  reviews = [

    {
      name: 'Sarah M.',
      country: 'United Kingdom',
      image: 'assets/images/reviews/reviewer-1.jpg',
      rating: 5,
      review:
        'Excellent organization and unforgettable experience. Every detail was perfectly arranged, and our Egyptologist guide made history come alive.'
    },

    {
      name: 'David L.',
      country: 'Canada',
      image: 'assets/images/reviews/reviewer-2.jpg',
      rating: 5,
      review:
        'Professional guides, luxury transportation and amazing hotels. Everything exceeded our expectations.'
    },

   {
  name: 'Emily R.',
  country: 'Australia',
  image: 'assets/images/reviews/reviewer-3.jpg',
  rating: 5,
  review: "One of the best travel experiences we've ever had. We will definitely visit Egypt again."
}

  ];

  current = 0;

  next() {
    this.current =
      (this.current + 1) % this.reviews.length;
  }

  prev() {
    this.current =
      (this.current - 1 + this.reviews.length) %
      this.reviews.length;
  }

}
