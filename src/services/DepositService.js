import axios from "axios";

const DEPOSITS_BASE_REST_API_URL = "http://localhost:8080/deposits";

class DepositsService {
  createDeposits(deposits) {
    return axios.post(
      DEPOSITS_BASE_REST_API_URL + "/accounts/deposits",
      deposits
    );
  }
}
export default new DepositsService();