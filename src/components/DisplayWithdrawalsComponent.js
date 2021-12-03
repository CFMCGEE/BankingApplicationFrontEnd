import React, {useState, useEffect} from 'react'
import WithdrawalsService from '../services/WithdrawalsService'
import { Link, useParams } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap';

const DisplayWithdrawalsComponent = () => {

    const [withdrawals, setWithdrawals] = useState([])
    const { id } = useParams();

    useEffect(() => {

        getEveryWithdrawalByID();

    }, [])

    const getEveryWithdrawalByID = () => {

        WithdrawalsService.getEveryWithdrawalByID(id).then((response) => {
            setWithdrawals(response.data.data)
            console.log(response.data.data)
        }).catch(error =>{
            console.log(error);
        })
        
    }

    const completeTransaction = () => {

        WithdrawalsService.deleteWithdrawal(id).then((response) => {
            getEveryWithdrawalByID();
            console.log(response.data.data)
        }).catch(error =>{
            console.log(error);
        })

    }

    return (

        <div>
          <br />
            <h2 className="text-center">Withdrawals</h2>
            <Link to="/create-account" className="btn btn-primary mb-2">
              Create Withdrawal
            </Link>
            <Table className="table table-bordered table-striped">
            <thead> 

                <th>Withdrawal ID</th>
                <th>Acount ID</th>
                <th>Medium</th>
                <th>Transaction Date</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Status</th>
                <th>Payer ID</th>
                <th>Type</th>
                

            </thead>
            <tbody>
            {/*eslint-disable-next-line*/}
            {withdrawals.map(withdrawals => {

                        return (      

                        <tr key = {withdrawals.id}>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.id}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.account.id}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.medium}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.transaction_date}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{withdrawals.balance}</td>
                            <td class="bg-info">                             
                                <Button className = "btn btn-danger" onClick={() => completeTransaction(withdrawals.id)} style={{marginLeft:"10px"}}>Complete Transaction</Button>
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
