import React, {useState, useEffect} from 'react'
import AccountService from '../services/AccountService'
import { Link } from 'react-router-dom'

const DisplayAccounts = () => {

const [account, setaccount] =useState([])


useEffect(() => {
    getAllAccounts();
}, [])

    const getAllAccounts = () => {
        AccountService.getAllAccounts().then((response) => {
            setaccount(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }

    //const accountarr = Object.values(account);



    return (
        <div>
            
            <h2 className = "text-center"> Accounts</h2>
            <table className = "table table bordered table-striped">
            <thead>
                <th>Id </th>
                <th>Type</th>
                <th>Nickname</th>
                <th>Rewards</th>
                <th>Balance</th>
                <th>Ops</th>
            </thead>
            <tbody>
                    {
                        account.map(
                            account =>
                        <tr key = {account.id}>
                            <td>{account.id}</td>
                            <td>{account.type}</td>
                            <td>{account.nickname}</td>
                            <td>{account.rewards}</td>
                            <td>{account.balance}</td>
                            <td>
                                <Link className= "btn btn-info" to={`//${account.id}`}>Change</Link>
                                <button className = "btn btn-danger" 
                                // onClick = {() => deletePizza(accounts.id)}
                                style = {{marginLeft:"10px"}}>Erase</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAccounts
