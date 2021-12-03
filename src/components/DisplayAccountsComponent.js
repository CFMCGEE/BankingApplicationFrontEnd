import React, {useState, useEffect} from 'react'
import AccountService from '../services/AccountService'
import { Link } from 'react-router-dom'
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';

const DisplayAccountsComponent = () => {

const [account, setaccount] = useState([])
const [search, setSearch] = useState("")

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

    const deleteAccount = (id) => {
        AccountService.deleteAccount(id).then(() =>{
         getAllAccounts();
        }).catch(error =>{
            console.log(error);
        })
         
     }

    return (

        <div>
          <br />
            <h2 className="text-center"> Accounts</h2>
            <Link to="/create-account" className="btn btn-primary mb-2">
              Create Account
            </Link>
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

            <Table className="table table-bordered table-striped">
            <thead> 

                <th>Account ID</th>
                <th>Type</th>
                <th>Nickname</th>
                <th>Rewards</th>
                <th>Balance</th>
                <th>Actions</th>

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
                                <Link className= "btn btn-primary" to={`/update-account/${account.id}`}>Update</Link>
                                <Button className = "btn btn-danger" onClick={() => deleteAccount(account.id)} style={{marginLeft:"10px"}}>Erase</Button>
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

export default DisplayAccountsComponent;