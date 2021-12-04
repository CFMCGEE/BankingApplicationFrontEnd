import axios from "axios";

const DEPOSITS_BASE_REST_API_URL = "http://localhost:8080/deposits";

class DepositsService {

  createDeposits(deposits) {
    return axios.post(DEPOSITS_BASE_REST_API_URL + "/accounts/deposits", deposits);
  }

  getDepositsByAccountId(accountId) {
    return axios.get(DEPOSITS_BASE_REST_API_URL + `/accounts/${accountId}/deposits`);
  }

  deleteDeposits(id) {
    return axios.delete(DEPOSITS_BASE_REST_API_URL + `/${id}`);
  }

}

export default new DepositsService();
