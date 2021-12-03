import axios from "axios";

const WITHDRAWALS_BASE_REST_API_URL = "http://localhost:8080/withdrawals";

class WithdrawalsService {

  postWithdrawals(withdrawals) {
    return axios.post(WITHDRAWALS_BASE_REST_API_URL + "/accounts/withdrawals", withdrawals);
  }

  getEveryWithdrawalByID(id) {
    return axios.get(WITHDRAWALS_BASE_REST_API_URL + `/accounts/${id}/withdrawals`)
  }

  deleteWithdrawal(id) {
    return axios.delete(WITHDRAWALS_BASE_REST_API_URL + id)
  }

}

export default new WithdrawalsService();
