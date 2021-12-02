import axios from 'axios'



const BILL_BASE_REST_API_URL = 'http://localhost:8080/bills'

class BillService{
    createBill(bill){
        return axios.post(BILL_BASE_REST_API_URL  + bill)
    }
    deleteBill(id, bill) {
        return axios.delete(BILL_BASE_REST_API_URL + id + bill)
    }
 
    editBill(id){
        return axios.put(BILL_BASE_REST_API_URL + id);
    }


  
}
export default new BillService();