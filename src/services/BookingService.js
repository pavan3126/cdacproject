import axios from "axios";

const BOOKING_BASE_REST_API_URL = "https://localhost:44364/api/bookingheaders";

class BookingService {
  getAllBookings() {
    return axios.get(BOOKING_BASE_REST_API_URL);
  }

  createBooking(booking) {
    return axios.post(BOOKING_BASE_REST_API_URL, booking);
  }

  getBookingById(bookingid) {
    return axios.get(BOOKING_BASE_REST_API_URL + "/" + bookingid);
  }

  updateBooking(bookingid, booking) {
    return axios.put(BOOKING_BASE_REST_API_URL + "/" + bookingid, booking);
  }

  updateHubBooking(bookingid, booking) {
    return axios.put(BOOKING_BASE_REST_API_URL + "/hub/" + bookingid, booking);
  }

  deleteBooking(bookingid) {
    return axios.delete(BOOKING_BASE_REST_API_URL + "/" + bookingid);
  }
}

export default new BookingService();
