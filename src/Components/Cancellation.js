import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookingService from "../services/BookingService";

const AllBooking = () => {
  const [Bookings, setBookings] = useState([]);

  useEffect(() => {
    getAllBookings();
  }, []);

  const getAllBookings = () => {
    BookingService.getAllBookings()
      .then((response) => {
        setBookings(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBooking = (BookingId) => {
    let confirm=prompt("type yes to delete", "");
    
    if(confirm=="yes"| confirm=="YES")
    {
    BookingService.deleteBooking(BookingId)
      .then((response) => {
        getAllBookings();
      })
      .catch((error) => {
        console.log(error);
      });
      alert("booking deleted successfully")
    }
  };

  return (
    <div className="container">
      <Link to="/listemployee" className="btn btn-primary mb-2">
        {" "}
        List Of Host Employee{" "}
      </Link>
      <h2 className="text-center"> List Of Bookings </h2>
      <table className="table table-bordered table-striped">
        {" "}
        <br />
        <thead>
          <th> Booking Id </th>
          <th> Booking Startdate </th>
          <th> Booking EndDate </th>
          <th> Booking customerid </th>
          <th> Actions </th>
        </thead>
        <tbody>
          {Bookings.map((Booking) => (
            <tr key={Booking.bookingid}>
              <td>
                <b> {Booking.bookingid} </b>
              </td>
              <td>
                <b> {Booking.startdate}</b>{" "}
              </td>
              <td>
                <b>{Booking.enddate}</b>
              </td>
              <td>
                <b>{Booking.customerid}</b>
              </td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/usersinfo/${Booking.bookingid}`}
                >
                  Details
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBooking(Booking.bookingid)}
                  style={{ marginLeft: "10px" }}
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/" className="btn btn-danger">
        {" "}
        Back{" "}
      </Link>
      <br />
    </div>
  );
};

export default AllBooking;