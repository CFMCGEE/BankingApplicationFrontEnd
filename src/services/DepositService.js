import axios, { Axios } from "axios";
import DepositsComponent from "../components/DepositsComponent";

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
// function getDepositByAccountId(id) {
//   return axios.get(DEPOSITS_BASE_REST_API_URL + "accounts/1/deposits" + id);
// }

// function updateDeposits(id, deposits) {
//   return axios.put(DEPOSITS_BASE_REST_API_URL + "/" + id, deposits);
// }

// function deleteDeposits(id) {
//   return axios.delete(DEPOSITS_BASE_REST_API_URL + "/" + id);
// }
