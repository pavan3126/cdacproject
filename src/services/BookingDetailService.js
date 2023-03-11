import axios from "axios";

const BOOKINGDETAIL_BASE_REST_API_URL = "https://localhost:44364/api/bookingdetails";

class BookingDetailService {
  getAllBookingdetails() {
    return axios.get(BOOKINGDETAIL_BASE_REST_API_URL);
  }

  createBookingdetail(bookingdetail) {
    return axios.post(BOOKINGDETAIL_BASE_REST_API_URL, bookingdetail);
  }

  getBookingdetailById(bookingdetailid) {
    return axios.get(BOOKINGDETAIL_BASE_REST_API_URL + "/" + bookingdetailid);
  }

  getBookingdetailsById(bookingdetailid) {
    return axios.get(BOOKINGDETAIL_BASE_REST_API_URL + "s/"+bookingdetailid);
  }

  updateBookingdetail(bookingdetailid, bookingdetail) {
    return axios.put(BOOKINGDETAIL_BASE_REST_API_URL + "/"+bookingdetailid,bookingdetail);
    // return axios.put(
    //   BOOKINGDETAIL_BASE_REST_API_URL + "/" + bookingdetailId,
    //   bookingdetail
    // );
  }

  deleteBookingdetail(bookingdetailId) {
    return axios.delete(
      BOOKINGDETAIL_BASE_REST_API_URL + "/" + bookingdetailId
    );
  }
}

export default new BookingDetailService();
