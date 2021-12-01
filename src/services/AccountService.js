import axios from 'axios'

const ACCOUNT_BASE_API = "http://localhost:8080/accounts";

class AccountService { 

    createAccount(account, customerId) { 
        return axios.post(ACCOUNT_BASE_API + '/customers/' + customerId + '/accounts', account)
    }

}

export default new AccountService();
