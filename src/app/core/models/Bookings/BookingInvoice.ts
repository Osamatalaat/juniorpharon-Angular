// core/models/Bookings/BookingInvoice.ts

export interface BookingInvoice {

  bookingId?: number;

  title: string;

  type: 'trip' | 'package';

  numberOfPeople: number;

  startDate: string;

  durationInDays: number;

  pricePerPerson: number;

  totalPrice: number;

  customerName: string;

  customerPhone: string;
}
