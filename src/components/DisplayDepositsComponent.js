import React, {useState, useEffect} from 'react'
import DepositService from '../services/DepositService'
import { Link, useParams } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap';

const DisplayDepositsComponent = () => {

    const [deposits, setDeposits] = useState([])
    const { id } = useParams();

    useEffect(() => {

        getDepositsByAccountId();

       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDepositsByAccountId = () => {

        DepositService.getDepositsByAccountId(id).then((response) => {
            setDeposits(response.data.data)
            console.log(response.data.data)
        }).catch(error =>{
            console.log(error);
        })
        
    }

    const completeTransaction = (id) => {

        DepositService.deleteDeposits(id).then(() => {

                console.log(id)
                
                getDepositsByAccountId();

            }).catch(error =>{
                console.log(error);
            })

    }

    return (

        <div>
          <br />
            <h2 className="text-center">Deposits</h2>
            <Link to="/accounts" className="btn btn-secondary mb-2">
             Return To Accounts
            </Link>
            <br />
            <Table className="table table-bordered table-striped">
            <thead> 

                <th>Deposit ID</th>
                <th>Medium</th>
                <th>Transaction Date</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Status</th>
                <th>Payee ID</th>
                <th>Type</th>
                <th>Transaction Options</th>
                

            </thead>
            <tbody>
            {deposits.map(deposit => {

                        return (      

                        <tr key = {deposit.id}>

                            <td style={{ color: "#FFFFFF" }} class="bg-info">{deposit.id}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{deposit.medium}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{deposit.transaction_date}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{deposit.amount}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{deposit.description}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{deposit.status}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{deposit.payee_id}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{deposit.type}</td>
                            <td class="bg-info">                             
                                <Button onClick={() => completeTransaction(deposit.id)} style={{ marginLeft: "10px", backgroundColor: "#F8C8DC", borderColor: "#F8C8DC" }}>Complete Deposit</Button>
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

export default DisplayDepositsComponent;
