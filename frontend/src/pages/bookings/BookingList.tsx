import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import BookingTable from "../../components/booking/BookingTable";

import BookingSearch from "../../components/booking/BookingSearch";

import { getBookings, searchBookings } from "../../api/bookingApi";

function BookingList() {
  const [bookings, setBookings] = useState<any[]>([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const data = await getBookings();

    setBookings(data);
  };

  useEffect(() => {
    if (search === "") {
      loadBookings();

      return;
    }

    const searchData = async () => {
      const data = await searchBookings(search);

      setBookings(data);
    };

    searchData();
  }, [search]);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-5">Bookings</h1>

      <BookingSearch value={search} onChange={setSearch} />

      <div className="mt-5">
        <BookingTable bookings={bookings} />
      </div>
    </MainLayout>
  );
}

export default BookingList;
