import api from "./axios";

export const getBookings = async (skip = 0, limit = 10) => {
  const response = await api.get(`/bookings?skip=${skip}&limit=${limit}`);

  return response.data;
};

export const searchBookings = async (query: string) => {
  const response = await api.get(`/bookings/search?q=${query}`);

  return response.data;
};
