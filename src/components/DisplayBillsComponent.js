// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import BillService from '../services/BillService';
import { useParams } from 'react-router-dom'

const DisplayBillsComponent = () => {

 
    const[bills, setBills] = useState([]);
    const {id} = useParams();

    useEffect(() => {

        getBillsByAccountId();

     }, []);

     const getBillsByAccountId = () => {
         BillService.getBillsByAccountId(id).then((response) => {
             setBills(response.data.data);
             console.log(response.data.data);
         }).catch(error => {
             console.log(error)
         })
     }


    return (
        <div>
            <h2 className="text-center mt-5">Bills</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Bill ID</th>
                    <th>Status</th>
                    <th>Payee</th>
                    <th>Nickname</th>
                    <th>Creation Date</th>
                    <th>Payment Date</th>
                    <th>Recurring Date</th>
                    <th>Upcoming Payment</th>
                    <th>Payment Amount</th>
                    <th>Account</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        
                        bills.map(bill =>
                                <tr key={bill.id}>
                                    <td>{bill.id}</td>
                                    <td>{bill.status}</td>
                                    <td>{bill.payee}</td>
                                    <td>{bill.nickname}</td>
                                    <td>{bill.creation_date}</td>
                                    <td>{bill.payment_date}</td>
                                    <td>{bill.recurring_date}</td>
                                    <td>{bill.upcoming_payment_date}</td>
                                    <td>{bill.payment_amount}</td>
                                    
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayBillsComponent;