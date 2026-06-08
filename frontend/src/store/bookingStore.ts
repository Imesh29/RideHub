import { create } from "zustand";

interface Booking {
  id: string;

  booking_reference: string;

  customer_name: string;

  booking_status: string;
}

interface BookingStore {
  bookings: Booking[];

  setBookings: (bookings: Booking[]) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  bookings: [],

  setBookings: (bookings) =>
    set({
      bookings,
    }),
}));
