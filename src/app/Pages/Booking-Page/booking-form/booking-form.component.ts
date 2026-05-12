import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { PackageDetails } from '../../../core/models/Details/PackageDetails';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
  standalone: false
})
export class BookingFormComponent {

  @Input() item: any;
  // @Input() packageDetails?: PackageDetails;

  @Output()
  close = new EventEmitter<void>();

  booking = {

    customerName: '',

    phoneNumber: '',

    email: '',

    numberOfPeople: 1,

    startDate: ''
  };

  get totalPrice(): number {

    const price =
      this.item?.price ||
      this.item?.pricePerPerson ||
      0;

    return price * this.booking.numberOfPeople;
  }

  confirmBooking(): void {

    const message = `
📌 Booking Request

👤 Name: ${this.booking.customerName}

📞 Phone: ${this.booking.phoneNumber}

📧 Email: ${this.booking.email}

🧳 Trip/Package: ${this.item?.title || this.item?.name}

👥 People: ${this.booking.numberOfPeople}

📅 Start Date: ${this.booking.startDate}

💰 Total Price: ${this.totalPrice} EGP
`;

    const encodedMessage =
      encodeURIComponent(message);

    const phoneNumber = '201111048402';

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      '_blank'
    );
  }

  closeModal(): void {

    this.close.emit();
  }
}
