import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import BookingForm from "../../components/booking/BookingForm";

import type { BookingFormData } from "../../types/booking";

import { getBookingById, updateBooking } from "../../api/bookingApi";

function BookingEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [booking, setBooking] = useState<BookingFormData>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooking();
  }, []);

  const loadBooking = async () => {
    try {
      if (!id) return;

      const data = await getBookingById(id);

      setBooking({
        customer_name: data.customer_name,

        customer_email: data.customer_email,

        customer_phone: data.customer_phone,

        vehicle_registration_number: data.vehicle_registration_number,

        chassis_number: data.chassis_number,

        vehicle_make: data.vehicle_make,

        vehicle_model: data.vehicle_model,

        manufacturing_year: data.manufacturing_year,

        mileage: data.mileage,

        booking_status: data.booking_status,

        booking_date: data.booking_date.slice(
          0,

          16,
        ),

        remarks: data.remarks ?? "",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData: BookingFormData) => {
    try {
      if (!id) return;

      await updateBooking(
        id,

        formData,
      );

      alert("Booking updated successfully");

      navigate("/bookings");
    } catch (error) {
      console.error(error);

      alert("Update failed");
    }
  };

  if (loading) {
    return <MainLayout>Loading...</MainLayout>;
  }

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Booking</h1>

        {booking && (
          <BookingForm
            defaultValues={booking}
            buttonText="Update Booking"
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </MainLayout>
  );
}

export default BookingEdit;
