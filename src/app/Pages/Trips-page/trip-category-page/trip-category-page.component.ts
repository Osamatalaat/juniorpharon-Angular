import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TRIPS_BY_CATEGORY } from '../../../core/data/trips/index';
import { Trip } from '../../../core/models/trip.model';

interface CategoryHero {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-trip-category-page',
  templateUrl: './trip-category-page.component.html',
  styleUrls: ['./trip-category-page.component.css'],
  standalone: false
})
export class TripCategoryPageComponent implements OnInit {

  category = '';
  title = '';
  hero!: CategoryHero;

  allTrips: Trip[] = [];
  trips: Trip[] = [];

  // Pagination
  currentPage = 1;
  pageSize = 8;
  totalPages = 0;

  readonly heroes: Record<string, CategoryHero> = {
    'nile-cruises': {
      title: 'Nile Cruises in Egypt',
      description: 'Discover the magic of Egypt through unforgettable Nile cruise experiences between Luxor and Aswan.',
      image: 'assets/images/things/nile.jpg'
    },
    'hot-air-balloon': {
      title: 'Hot Air Balloon Egypt',
      description: 'Enjoy breathtaking sunrise views above Luxor and discover Egypt from the sky.',
      image: 'assets/images/things/ballon.jpg'
    },
    'camel-riding': {
      title: 'Camel Riding Tours in Egypt',
      description: 'Experience traditional camel treks across the Sahara desert dunes and ancient monuments.',
      image: 'assets/images/things/camel.jpg'
    },
    'desert-safari': {
      title: 'Egypt Desert Safari Adventures',
      description: 'Experience the Egyptian desert with exciting safari trips, dunes, quad biking, and Bedouin camps.',
      image: 'assets/images/things/desert.jpg'
    },
    'snorkeling': {
      title: 'Snorkeling Tours in Egypt',
      description: 'Explore the Red Sea underwater world with amazing snorkeling experiences and pristine coral reefs.',
      image: 'assets/images/things/snokeling.jpg'
    },
    'scuba-diving': {
      title: 'Scuba Diving Excursions in Egypt',
      description: 'Discover world-class dive sites, deep drop-off walls, and shipwrecks across the Red Sea.',
      image: 'assets/images/things/scubadiving.jpg'
    },
    'dinner-cruise': {
      title: 'Dinner Cruises in Egypt',
      description: 'Enjoy enchanting evening river and sea cruises with delicious dining and folklore entertainment.',
      image: 'assets/images/things/dinner.jpg'
    },
    'sound-light-show': {
      title: 'Sound & Light Shows in Egypt',
      description: 'Watch ancient monuments illuminated by night with dramatic narrations and musical performances.',
      image: 'assets/images/things/philae3.webp'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') ?? '';
      this.loadCategory();
    });
  }

  loadCategory(): void {
    const key = this.category.toLowerCase();

    this.hero = this.heroes[key] || {
      title: this.formatTitle(this.category),
      description: `Discover amazing ${this.formatTitle(this.category)} experiences in Egypt.`,
      image: 'assets/images/things/default.jpg'
    };

    this.title = this.hero.title;

    // استدعاء مباشر O(1) من الملف الخاص بالتصنيف
    this.allTrips = TRIPS_BY_CATEGORY[key] || [];

    this.totalPages = Math.ceil(this.allTrips.length / this.pageSize);
    this.changePage(1);
  }

  changePage(page: number): void {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    this.trips = this.allTrips.slice(start, start + this.pageSize);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  formatTitle(value: string): string {
    return value
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
