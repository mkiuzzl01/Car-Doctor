import { useEffect, useState } from "react";
import BookingData from "./BookingData";
import useAxiosSecure from "../../utility/useAxiosSecure";
import useAuth from "../../utility/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [booking, setBooking] = useState([]);

  const url =`/Booking?email=${user?.email}`;
  
  useEffect(() => {
    axiosSecure.get(url).then((res) => setBooking(res.data));
  }, [url,axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you Sure want to Delete?");
    if (proceed) {
      fetch(`http://localhost:5000/Booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Service Delete Successful");
            const remaining = booking.filter((book) => book._id !== id);
            setBooking(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    const proceed = confirm("Are you sure want to change status");
    if (proceed) {
      fetch(`http://localhost:5000/Booking/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.matchedCount > 0) {
            const remaining = booking.filter((book) => book._id !== id);
            console.log(remaining);
            const updated = booking.find((book) => book._id === id);
            console.log(updated);
            updated.status = "confirm";
            const newBooking = [updated, ...remaining];
            console.log(newBooking);
            setBooking(newBooking);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Your Booking:{booking.length}</h1>
      <div className="my-8">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>SL</th>
                <th>Image</th>
                <th>customerName</th>
                <th>customerEmail</th>
                <th>serviceName</th>
                <th>serviceId</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book, idx) => (
                <BookingData
                  key={book._id}
                  book={book}
                  idx={idx}
                  handleBookingConfirm={handleBookingConfirm}
                  handleDelete={handleDelete}
                ></BookingData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booking;
