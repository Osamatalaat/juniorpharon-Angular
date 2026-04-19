import { Component, Input, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-review-card',
  templateUrl: './user-review-card.component.html',
  styleUrls: ['./user-review-card.component.css'],
  standalone: false
})
export class UserReviewCardComponent implements OnInit, OnDestroy {

  @Input() reviews: any[] = [];

  currentIndex = 0;
  visibleCards = 3;

  intervalId: any;
  resizeObserver: any;

  direction: 'forward' | 'backward' = 'forward';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {

    this.updateVisibleCards();

    if (isPlatformBrowser(this.platformId)) {

      // Auto slide
      this.startAutoSlide();

      // Responsive resize (safe)
      this.resizeObserver = () => {
        this.updateVisibleCards();
        this.fixIndexBounds();
      };

      window.addEventListener('resize', this.resizeObserver);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeObserver);
    }
  }

  // 🎯 Responsive cards
  updateVisibleCards() {
    if (!isPlatformBrowser(this.platformId)) return;

    const width = window.innerWidth;

    if (width < 640) {
      this.visibleCards = 1;
    } else if (width < 1024) {
      this.visibleCards = 2;
    } else {
      this.visibleCards = 3;
    }
  }

  // 🎯 Prevent index overflow after resize
  fixIndexBounds() {
    const maxIndex = Math.max(this.reviews.length - this.visibleCards, 0);

    if (this.currentIndex > maxIndex) {
      this.currentIndex = maxIndex;
    }
  }

  // 🔁 Auto slider
  startAutoSlide() {

    this.intervalId = setInterval(() => {

      const maxIndex = Math.max(this.reviews.length - this.visibleCards, 0);

      if (this.direction === 'forward') {

        if (this.currentIndex < maxIndex) {
          this.currentIndex++;
        } else {
          this.direction = 'backward';
          this.currentIndex--;
        }

      } else {

        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.direction = 'forward';
          this.currentIndex++;
        }

      }

    }, 4000);
  }

  // ⏭️ Next
  next() {
    this.direction = 'forward';

    const maxIndex = Math.max(this.reviews.length - this.visibleCards, 0);

    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    }
  }

  // ⏮️ Prev
  prev() {
    this.direction = 'backward';

    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // ⭐ Stars
   getStars(rating: number) {
    return Array(5).fill(0);
  }
}
