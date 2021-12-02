// eslint-disable-next-line
import React, { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import AccountService from "../services/AccountService";
import { useNavigate } from "react-router-dom";

const AccountComponent = () => {
  const [type, settype] = useState("");
  const [nickname, setnickname] = useState("");
  const [rewards, setrewards] = useState("");
  const [balance, setbalance] = useState("");
  const [customer, setcustomer] = useState({ id: 1 });

  // const customerContext= createContext({
  //     customer: '',setcustomer: () =>{}
  // })

  // const [customer, setcustomer] = useContext(customerContext);

  // const bigmanting=() =>{
  //     const { userName, setUserName } = useContext(UserContext);
  //     const changeHandler = event => setUserName(event.target.value);
  //     return (
  //       <input
  //         type="text"
  //         value={userName}
  //         onChange={changeHandler}
  //       />
  //       );
  //   }

  const navigate = useNavigate();

  const createAccount = (e) => {
    e.preventDefault();
    const account = { type, nickname, rewards, balance, customer };

    AccountService.createAccount(account)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {}
            <h2 className="text-center">Add Account</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Type </label>
                  <input
                    type="text"
                    placeholder="Enter Account Type"
                    name="type"
                    className="form-control"
                    value={type}
                    onChange={(e) => settype(e.target.value)}
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
                    onChange={(e) => setnickname(e.target.value)}
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
                    onChange={(e) => setrewards(e.target.value)}
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
                    onChange={(e) => setbalance(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Customer Id </label>
                  <input
                    type="text"
                    placeholder="Enter Customer Id"
                    name="customer"
                    className="form-control"
                    value={customer.id}
                    onChange={(e) => setcustomer(e.target.value)}
                  ></input>
                </div>

                <button className="btn btn-success" onClick={(e) => createAccount(e)}>
                  Summon
                </button>
                <Link to="/" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountComponent;
