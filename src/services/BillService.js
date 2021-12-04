import axios from 'axios'

const BILL_BASE_REST_API_URL = 'http://localhost:8080/bills/'

class BillService{

    createBill(bill){
        return axios.post(BILL_BASE_REST_API_URL + "accounts/bills", bill)
    }

    getBillsByAccountId(id) {
        return axios.get(BILL_BASE_REST_API_URL + "accounts/" + id + "/bills" )
    }

    getSingleBill(id) {
        return axios.get(BILL_BASE_REST_API_URL + id)
    }

    deleteBill(id) {
        return axios.delete(BILL_BASE_REST_API_URL + `/${id}`)
    }
 
    updateBill(id, bill){
        return axios.put(BILL_BASE_REST_API_URL + id, bill);
    }
  
}

export default new BillService();