import React, {useState, useEffect} from 'react'
import WithdrawalsService from '../services/WithdrawalsService'
import { Link, useParams } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap';

const DisplayWithdrawalsComponent = () => {

    const [withdrawals, setWithdrawals] = useState([])
    const { id } = useParams();

    useEffect(() => {

        getEveryWithdrawalByID();

       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getEveryWithdrawalByID = () => {

        WithdrawalsService.getEveryWithdrawalByID(id).then((response) => {
            setWithdrawals(response.data.data)
            console.log(response.data.data)
        }).catch(error =>{
            console.log(error);
        })
        
    }

    const completeTransaction = (id) => {

            WithdrawalsService.deleteWithdrawal(id).then(() => {

                console.log(id)

                getEveryWithdrawalByID();

            }).catch(error =>{
                console.log(error);
            })

    }

    return (

        <div>
          <br />
            <h2 className="text-center">Withdrawals</h2>
            <Link to="/accounts" className="btn btn-secondary mb-2">
             Return To Accounts
            </Link>
            <br />
            <Table className="table table-bordered table-striped">
            <thead> 

                <th>Withdrawal ID</th>
                <th>Medium</th>
                <th>Transaction Date</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Status</th>
                <th>Payer ID</th>
                <th>Type</th>
                <th>Transaction Options</th>
                

            </thead>
            <tbody>
            {/*eslint-disable-next-line*/}
            {withdrawals.map(withdrawals => {

                        return (      

                        <tr key = {withdrawals.id}>

                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.id}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.medium}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.transaction_date}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.amount}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.description}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.status}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.payer_id}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.type}</td>
                            <td class="bg-info">                             
                                <Button onClick={() => completeTransaction(withdrawals.id)} style={{ marginLeft: "10px", backgroundColor: "#F8C8DC", borderColor: "#F8C8DC" }}>Complete Withdrawal</Button>
                            </td>
                            </tr>
                           )
                        })
                    }
                </tbody>
            </Table>
        </div>

    )
}

export default DisplayWithdrawalsComponent;
