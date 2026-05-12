import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-layout',
  templateUrl: './booking-layout.component.html',
  styleUrls: ['./booking-layout.component.css'],
  standalone: false
})
export class BookingLayoutComponent {

  @Input() item: any;

  isOpen = false;

  openModal(): void {

    this.isOpen = true;

    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {

    this.isOpen = false;

    document.body.style.overflow = 'auto';
  }
}
