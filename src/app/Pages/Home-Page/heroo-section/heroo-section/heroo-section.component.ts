import { Component, OnInit } from '@angular/core';
interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-heroo-section',
  templateUrl: './heroo-section.component.html',
  styleUrls: ['./heroo-section.component.css'],
  standalone: false
})




export class HerooSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  slides: HeroSlide[] = [
  {
    id: 1,
    title: 'Paris',
    description: 'City of Love',
    image: 'assets/images/hero/pic1.jpg'
  },
  {
    id: 2,
    title: 'Dubai',
    description: 'Luxury Travel',
    image: 'assets/images/hero/pic2.jpg'
  },
  {
    id: 3,
    title: 'Maldives',
    description: 'Blue Ocean',
    image: 'assets/images/hero/pic3.jpg'
  },
  {
    id: 4,
    title: 'Switzerland',
    description: 'Nature',
    image: 'assets/images/hero/pic4.jpg'
  }
];

selectedSlide = this.slides[0];

changeSlide(slide: HeroSlide) {
  this.selectedSlide = slide;
}

currentIndex = 0;

next() {
  this.currentIndex =
    (this.currentIndex + 1) % this.slides.length;

  this.selectedSlide = this.slides[this.currentIndex];
}

prev() {
  this.currentIndex =
    (this.currentIndex - 1 + this.slides.length) % this.slides.length;

  this.selectedSlide = this.slides[this.currentIndex];
}

}
