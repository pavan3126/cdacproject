import axios from "axios";

const CUSTOMER_BASE_REST_API_URL = "http://localhost:44364/customer";

class CustomerService {
  getAllCustomers() {
    return axios.get(CUSTOMER_BASE_REST_API_URL);
  }

  createCustomer(customer) {
    return axios.post(CUSTOMER_BASE_REST_API_URL, customer);
  }

  getCustomerById(customerid) {
    return axios.get(CUSTOMER_BASE_REST_API_URL + "/" + customerid);
  }

  updateCustomer(customerid, customer) {
    return axios.put(CUSTOMER_BASE_REST_API_URL + "/" + customerid, customer);
  }

  deleteCustomer(customerid) {
    return axios.delete(CUSTOMER_BASE_REST_API_URL + "/" + customerid);
  }
}

export default new CustomerService();
