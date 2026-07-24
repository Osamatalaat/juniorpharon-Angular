import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  standalone: false
})
export class HeroSectionComponent implements OnInit , OnDestroy {
  currentSlide = 0;

  isFading = false;

  interval: any;

  heroSlides = [
    {
      image: 'assets/images/trips-hero/pyramids.png',
      badge: 'Ancient Wonders',
      title1: 'Discover the',
      title2: 'Wonders',
      title3: 'of Egypt',
      description:
        'Explore timeless pyramids, breathtaking Nile cruises and unforgettable adventures.',
    },

    {
      image: 'assets/images/trips-hero/nile.png',
      badge: 'Nile Cruises',
      title1: 'Sail Through',
      title2: 'The Nile',
      title3: 'River',
      description:
        'Experience luxury cruises, beautiful sunsets and the history of Upper Egypt.',
    },

    {
      image: 'assets/images/trips-hero/luxor.png',
      badge: 'Historical Temples',
      title1: 'Walk Inside',
      title2: 'Ancient',
      title3: 'Civilization',
      description:
        'Visit Luxor, Karnak and the Valley of the Kings with professional guides.',
    },

    {
      image: 'assets/images/trips-hero/redsea.png',
      badge: 'Beach Escape',
      title1: 'Relax On',
      title2: 'Red Sea',
      title3: 'Beaches',
      description:
        'Crystal clear water, diving adventures and luxury resorts await you.',
    }
  ];

  ngOnInit(): void {

    this.startSlider();

  }



  startSlider(): void {

    this.interval = setInterval(() => {

      // Fade Out
      this.isFading = true;

      setTimeout(() => {

        // Next Slide
        this.currentSlide =
          (this.currentSlide + 1) % this.heroSlides.length;

        // Fade In
        this.isFading = false;

      }, 700);

    }, 10000);

  }


  previousSlide(): void {

  if (this.interval) {
    clearInterval(this.interval);
  }

  this.isFading = true;

  setTimeout(() => {

    this.currentSlide =
      (this.currentSlide - 1 + this.heroSlides.length) % this.heroSlides.length;

    this.isFading = false;

    this.startSlider();

  }, 700);

}

nextSlide(): void {

  if (this.interval) {
    clearInterval(this.interval);
  }

  this.isFading = true;

  setTimeout(() => {

    this.currentSlide =
      (this.currentSlide + 1) % this.heroSlides.length;

    this.isFading = false;

    this.startSlider();

  }, 700);

}

changeSlide(index: number): void {

  if (index === this.currentSlide) return;

  if (this.interval) {
    clearInterval(this.interval);
  }

  this.isFading = true;

  setTimeout(() => {

    this.currentSlide = index;

    this.isFading = false;

    this.startSlider();

  }, 700);

}

  ngOnDestroy(): void {

    if (this.interval) {
      clearInterval(this.interval);
    }

  }

}


