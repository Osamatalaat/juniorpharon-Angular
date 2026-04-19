import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
  standalone: false,
})
export class TripDetailsComponent implements OnInit {
  trip: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // Mock Data
    this.trip = {
      id: id,
      title: 'Luxor Historical Tour',
      city: 'Luxor',
      location: 'Karnak & Valley of the Kings',
      price: 1200,
      oldPrice: 1500,
      discount: 20,
      durationInDays: 3,
      rating: 4.7,
      description:
        'Explore the ancient temples of Luxor and discover the history of the Pharaohs.',
      images: [
        'https://images.unsplash.com/photo-1587135941948-670b381f08ce',
        'https://images.unsplash.com/photo-1548786811-dd6e453ccca7',
        'https://images.unsplash.com/photo-1579606032821-4e6161c7f6c4',
        'https://images.unsplash.com/photo-1548786811-dd6e453ccca7',
        'https://images.unsplash.com/photo-1548786811-dd6e453ccca7',
        'https://images.unsplash.com/photo-1548786811-dd6e453ccca7',
        'https://images.unsplash.com/photo-1548786811-dd6e453ccca7',
        'https://images.unsplash.com/photo-1548786811-dd6e453ccca7',
        'https://images.unsplash.com/photo-1548786811-dd6e453ccca7',
        'https://images.unsplash.com/photo-1548786811-dd6e453ccca7',
      ],
    };
  }

reviews = [
  {
    user: 'Ahmed Ali',
    rating: 5,
    comment: 'Amazing experience, everything was perfect!',
    image: 'https://i.pravatar.cc/100?img=1',
    date: '2 days ago'
  },
  {
    user: 'Sara Mohamed',
    rating: 4,
    comment: 'Very good trip but a bit crowded.',
    image: 'https://i.pravatar.cc/100?img=2',
    date: '1 week ago'
  },
  {
    user: 'Omar Hassan',
    rating: 5,
    comment: 'Best trip ever! Highly recommend.',
    image: 'https://i.pravatar.cc/100?img=3',
    date: '3 days ago'
  },
  {
     user: 'Omar Hassan',
    rating: 5,
    comment: 'Best trip ever! Highly recommend.',
    image: 'https://i.pravatar.cc/100?img=3',
    date: '3 days ago'
  },
    {
    user: 'Ahmed Ali',
    rating: 5,
    comment: 'Amazing experience, everything was perfect!',
    image: 'https://i.pravatar.cc/100?img=1',
    date: '2 days ago'
  },
    {
    user: 'Ahmed Ali',
    rating: 5,
    comment: 'Amazing experience, everything was perfect!',
    image: 'https://i.pravatar.cc/100?img=1',
    date: '2 days ago'
  },
    {
    user: 'Ahmed Ali',
    rating: 5,
    comment: 'Amazing experience, everything was perfect!',
    image: 'https://i.pravatar.cc/100?img=1',
    date: '2 days ago'
  },
];

itinerary = [
  {
    title: 'Arrival To Egypt',
    description: 'Meet at airport and transfer to hotel.',
    image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce',
    activities: [
      'Airport pickup',
      'Check-in hotel',
      'Dinner'
    ],
    open: true
  },
  {
    title: 'Pyramids & Museum',
    description: 'زيارة الأهرامات والمتحف المصري',
    image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020',
    activities: [
      'Visit Giza pyramids',
      'Camel ride',
      'Museum tour'
    ],
    open: false
  }
];

  relatedTrips = [
    {
      id: 2,
      title: 'Aswan Nile Experience',
      city: 'Aswan',
      price: 1200,
      oldPrice: 1500,
      durationInDays: 2,
      coverImage:
        'https://images.unsplash.com/photo-1590080875515-8c9c4c6b2f5d',
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Cairo Pyramids Adventure',
      city: 'Cairo',
      price: 1800,
      oldPrice: 2200,
      durationInDays: 2,
      coverImage:
        'https://images.unsplash.com/photo-1568322445389-f64ac2515020',
      rating: 4.8,
    },
    {
      id: 4,
      title: 'Hurghada Beach Holiday',
      city: 'Hurghada',
      price: 2000,
      durationInDays: 4,
      coverImage:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      rating: 4.6,
    },
  ];


  selectedImageIndex: number = 0;
isViewerOpen: boolean = false;

openViewer(index: number) {
  this.selectedImageIndex = index;
  this.isViewerOpen = true;
}

closeViewer() {
  this.isViewerOpen = false;
}

nextImage() {
  if (this.trip?.images?.length) {
    this.selectedImageIndex =
      (this.selectedImageIndex + 1) % this.trip.images.length;
  }
}

prevImage() {
  if (this.trip?.images?.length) {
    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.trip.images.length) %
      this.trip.images.length;
  }
}
}
