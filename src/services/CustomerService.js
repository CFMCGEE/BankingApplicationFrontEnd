import axios from "axios";

const CUSTOMER_BASE_REST_API_URL = "http://localhost:8080/customers";

class CustomerService {
  // Get all customers using axios get request
  getAllCustomers() {
    return axios.get(CUSTOMER_BASE_REST_API_URL);
  }

  // Create new customer using axios post request
  createCustomer(customer) {
    //customer object contains form data
    return axios.post(CUSTOMER_BASE_REST_API_URL, customer);
  }

  // Get customer by id using axios get request
  getCustomerById(customerId) {
    return axios.get(CUSTOMER_BASE_REST_API_URL + "/" + customerId);
  }

  // Update customer by id using axios put request
  updateCustomer(customerId, customer) {
    return axios.put(CUSTOMER_BASE_REST_API_URL + "/" + customerId, customer);
  }

}

export default new CustomerService();
