import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import AccountService from "../services/AccountService";

const AccountComponent = () => {

  const [type, setType] = useState('');
  const [nickname, setNickname] = useState('');
  const [rewards, setRewards] = useState('');
  const [balance, setBalance] = useState('');
  const [customer, setCustomer] = useState({ id: '' });

  const navigate = useNavigate();
  const { id } = useParams();

  const createOrUppdateAccount = (e) => {
    e.preventDefault();

    const account = { type, nickname, rewards, balance, customer };

    if (id) {

    AccountService.updateAccount(id, account).then(() => {
          navigate("/accounts");
        })
        .catch((error) => {
          console.log(error);
        });

    } else {

    AccountService.createAccount(account).then((response) => {
        console.log(response.data);
        navigate("/accounts");
      })
      .catch((error) => {
        console.log(error);
      });

  }

}
  
  const title = () => {

    if (id) {
        return <h2 className="text-center">Update Account</h2>
    } else {
        return <h2 className="text-center">Add Account</h2>
    }
    
}

  useEffect(() => {

    AccountService.getSingleAccount(id).then((response) => {

        setType(response.data.type);
        setNickname(response.data.nickname);
        setRewards(response.data.rewards);
        setBalance(response.data.balance);

      }).catch((e) => {
        console.log(e);
      });

  }, [id]);

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
          <div style={{ backgroundColor: "#343a40", color: "#FFFFFF" }} className="card col-md-6 offset-md-3 offset-md-3">
            { title() }
            <div className="card-body">
              <Form>
                <div className="form-group mb-2">
                  <label className="form-label">Type </label>
                  <input
                    type="text"
                    placeholder="Enter Account Type"
                    name="type"
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Nickname </label>
                  <input
                    type="text"
                    placeholder="Enter Account Nickname"
                    name="nickname"
                    className="form-control"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Rewards </label>
                  <input
                    type="text"
                    placeholder="Enter Reward Points"
                    name="rewards"
                    className="form-control"
                    value={rewards}
                    onChange={(e) => setRewards(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Balance </label>
                  <input
                    type="text"
                    placeholder="Enter Current Balance"
                    name="balance"
                    className="form-control"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Customer Id </label>
                  <input
                    type="text"
                    placeholder="Enter Customer Id"
                    name="customer"
                    className="form-control"
                    onChange={(e) => (customer.id = e.target.value)}
                  ></input>
                </div>

                <Button className="btn btn-success" onClick={(e) => createOrUppdateAccount(e)}>Create</Button>
                <Link to="/accounts" className="btn btn-danger">Cancel</Link>
            
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountComponent
