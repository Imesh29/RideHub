import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import BookingForm from "../../components/booking/BookingForm";

import type { BookingFormData } from "../../types/booking";

import { createBooking } from "../../api/bookingApi";

function BookingCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (data: BookingFormData) => {
    try {
      await createBooking(data);

      alert("Booking created successfully");

      navigate("/bookings");
    } catch (error) {
      console.error(error);

      alert("Failed to create booking");
    }
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Create Booking</h1>
        </div>

        <BookingForm buttonText="Save Booking" onSubmit={handleSubmit} />
      </div>
    </MainLayout>
  );
}

export default BookingCreate;
