import { useForm } from "react-hook-form";

import type { BookingFormData } from "../../types/booking";

interface Props {
  defaultValues?: BookingFormData;

  onSubmit: (data: BookingFormData) => void;

  buttonText: string;
}

function BookingForm({
  defaultValues,

  onSubmit,

  buttonText,
}: Props) {
  const {
    register,

    handleSubmit,
  } = useForm<BookingFormData>({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-5">Customer Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            {...register("customer_name")}
            placeholder="Customer Name"
            className="border rounded p-3"
          />

          <input
            {...register("customer_email")}
            placeholder="Customer Email"
            className="border rounded p-3"
          />

          <input
            {...register("customer_phone")}
            placeholder="Customer Phone"
            className="border rounded p-3"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-5">Vehicle Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            {...register("vehicle_registration_number")}
            placeholder="Registration Number"
            className="border rounded p-3"
          />

          <input
            {...register("chassis_number")}
            placeholder="Chassis Number"
            className="border rounded p-3"
          />

          <input
            {...register("vehicle_make")}
            placeholder="Vehicle Make"
            className="border rounded p-3"
          />

          <input
            {...register("vehicle_model")}
            placeholder="Vehicle Model"
            className="border rounded p-3"
          />

          <input
            type="number"
            {...register("manufacturing_year", {
              valueAsNumber: true,
            })}
            placeholder="Manufacturing Year"
            className="border rounded p-3"
          />

          <input
            type="number"
            {...register("mileage", {
              valueAsNumber: true,
            })}
            placeholder="Mileage"
            className="border rounded p-3"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-5">Booking Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="datetime-local"
            {...register("booking_date")}
            className="border rounded p-3"
          />

          <select
            {...register("booking_status")}
            className="border rounded p-3"
          >
            <option value="PENDING">Pending</option>

            <option value="CONFIRMED">Confirmed</option>

            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <textarea
          {...register("remarks")}
          placeholder="Remarks"
          className="border rounded p-3 w-full mt-4"
          rows={4}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
