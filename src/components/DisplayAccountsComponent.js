import React, {useState, useEffect} from 'react'
import AccountService from '../services/AccountService'
// eslint-disable-next-line 
// import PieChart from './PieChart'
import { Link } from 'react-router-dom'
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';

const DisplayAccountsComponent = () => {

const [account, setAccount] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {

    getAllAccounts();

}, [])

    const getAllAccounts = () => {
        AccountService.getAllAccounts().then((response) => {
            setAccount(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteAccount = (id) => {
        AccountService.deleteAccount(id).then(() =>{
         getAllAccounts();
        }).catch(error =>{
            console.log(error);
        })
         
     }

    // const successfullyDeletedAccount = () => {
    //     alert("Account Successfully Deleted!")
    // }

    return (

        <div>
          <br />
            <h2 className="text-center"> Accounts</h2>
            <br /> 
            {/* <Link to="/create-account" className="btn btn-primary mb-2">
              Create Account
            </Link> */}
            <InputGroup className="mb-3">
                  <FormControl
                   placeholder="Search acounts"
                   aria-label="Default"
                   aria-describedby="inputGroup-sizing-default"
                   onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                 />
                 </InputGroup>
                 <br /> 
            <Table className="table table-bordered table-striped">
            <thead> 

                <th className="ID_adjuster">Account ID</th>
                <th className="TYPE_adjuster">Type</th>
                <th className="NICKNAME_adjuster">Nickname</th>
                <th className="REWARDS_adjuster">Rewards</th>
                <th className="BALANCE_adjuster">Balance</th>
                <th className="ACTIONS_adjuster">Actions</th>

            </thead>
            <tbody>
            {/*eslint-disable-next-line*/}
            {account.filter((accounts) => {
                                if (search === "") {
                                    return accounts;
                                } else if (accounts.nickname.toLowerCase().includes(search.toLowerCase()) || (accounts.type.toLowerCase().includes(search.toLowerCase()))) {
                                    return accounts;
                                }
                            }).map(account => {

                        return (      

                        <tr key = {account.id}>
                            <td style={{ color: "#FFFFFF" }} class="bg-info"> {account.id}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{account.type}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{account.nickname}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{account.rewards}</td>
                            <td style={{ color: "#FFFFFF" }} class="bg-info">{account.balance}</td>
                            <td class="bg-info">                             
                                {/* <Link className= "btn btn-primary" to={`/update-account/${account.id}`}>Update</Link> */}
                                <Link className="btn btn-dark" to={`/view-bills/${account.id}`}  style={{marginLeft:"10px"}}>View Bills</Link>
                                <Link className="btn btn-light" to={`/view-deposits/${account.id}`} style={{marginLeft:"10px"}}>View Deposits</Link>
                                <Link className="btn btn-dark" to={`/view-withdrawals/${account.id}`} style={{marginLeft:"10px"}}>View Withdrawals</Link>
                                <Link className="btn btn-light" to={`/view-account-data-chart/${account.id}`} style={{marginLeft:"10px"}}>View Chart</Link>
                                <Button className="btn btn-danger" onClick={() => deleteAccount(account.id)} style={{marginLeft:"10px"}}>Remove Account</Button>
                            </td>
                            </tr>
                           )
                        })
                    }
                </tbody>
            </Table>
            {/*<PieChart />*/}          
        </div>

    )
}

export default DisplayAccountsComponent;
