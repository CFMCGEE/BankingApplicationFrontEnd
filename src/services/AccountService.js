import axios from 'axios'

const ACCOUNT_BASE_API = "http://localhost:8080/accounts";

class AccountService { 

    createAccount(account) { 
        return axios.post(ACCOUNT_BASE_API , account)
    }

    getAllAccounts() { 
        return axios.get(ACCOUNT_BASE_API )
    }
    

}

export default new AccountService();
