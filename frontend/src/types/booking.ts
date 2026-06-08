export interface Booking {
  id: string;
  booking_reference: string;

  customer_name: string;
  customer_email: string;
  customer_phone: string;

  vehicle_registration_number: string;
  chassis_number: string;

  vehicle_make: string;
  vehicle_model: string;

  manufacturing_year: number;
  mileage: number;

  booking_status: string;

  booking_date: string;

  remarks?: string;

  is_deleted: boolean;
}
