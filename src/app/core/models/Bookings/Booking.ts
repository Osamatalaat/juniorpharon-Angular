// core/models/Bookings/Booking.ts

export interface Booking {

  // 🆔
  id?: number;

  // 📅 Dates
  bookingDate?: string;

  startDate: string;

  endDate?: string;

  // 👥 People
  numberOfPeople: number;

  // 💰 Pricing
  pricePerPerson: number;

  totalPrice: number;

  // 📦 Booking Type
  type: 'trip' | 'package';

  // 🎯 Selected Item
  tripId?: number;

  packageId?: number;

  title: string;

  image: string;

  durationInDays: number;

  location?: string;

  // 👤 Customer Info
  customerName: string;

  customerPhone: string;

  customerEmail?: string;

  notes?: string;

  // 📌 Status
  status?: 'pending' | 'confirmed' | 'cancelled';
}
