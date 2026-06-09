import api from "./axios";

import type { Booking, BookingFormData } from "../types/booking";

export const getBookings = async (
  skip = 0,

  limit = 10,
): Promise<Booking[]> => {
  const response = await api.get(`/bookings?skip=${skip}&limit=${limit}`);

  return response.data;
};

export const searchBookings = async (query: string): Promise<Booking[]> => {
  const response = await api.get(`/bookings/search?q=${query}`);

  return response.data;
};

export const createBooking = async (
  data: BookingFormData,
): Promise<Booking> => {
  const response = await api.post(
    "/bookings",

    data,
  );

  return response.data;
};

export const getBookingById = async (id: string): Promise<Booking> => {
  const response = await api.get(`/bookings/${id}`);

  return response.data;
};

export const updateBooking = async (
  id: string,

  data: BookingFormData,
): Promise<Booking> => {
  const response = await api.put(
    `/bookings/${id}`,

    data,
  );

  return response.data;
};

export const getArchivedBookings = async () => {
  const response = await api.get("/bookings/archived");

  return response.data;
};

export const archiveBooking = async (id: string) => {
  const response = await api.patch(`/bookings/${id}/archive`);

  return response.data;
};

export const restoreBooking = async (id: string) => {
  const response = await api.patch(`/bookings/${id}/restore`);

  return response.data;
};
