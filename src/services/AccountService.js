import axios from 'axios'

const ACCOUNT_BASE_API = "http://localhost:8080/accounts";

class AccountService { 

    createAccount(account) { 
        return axios.post(ACCOUNT_BASE_API, account)
    }

    getSingleAccount(id) {
        return axios.get(ACCOUNT_BASE_API + '/' + id)
    }

    getAllAccounts() { 
        return axios.get(ACCOUNT_BASE_API)
    }

    updateAccount(id, account) {
        return axios.put(ACCOUNT_BASE_API + '/' + id, account)
    }

    deleteAccount(id) {
        return axios.delete(ACCOUNT_BASE_API + '/' + id)
    }
    
}

export default new AccountService();

