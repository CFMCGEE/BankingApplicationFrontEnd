import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import DepositsService from "../services/DepositService";

const DepositsComponent = () => {
  // const [deposits, setDeposits] = useState([]);

  // useEffect(() =>{
  //   getDepositsByAccountId();
  // }, []);

  // const deleteDeposits = (depositsId) =>{
  //   DepositsService.deleteDeposits(depositsId).then((response) =>{
  //     getDepositsByAccountId();
  //   }).catch((error) =>{
  //     console.log(error);
  //   });
  // };

  const [medium, setMedium] = useState("");
  const [transaction_date, setTransaction_date] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [payee_id, setPayee_id] = useState("");
  const [type, setType] = useState("");
  const [account, setAccount] = useState({ id: 1 });

  const navigate = useNavigate();
  const createDeposits = (e) => {
    e.preventDefault();

    const deposit = {
      medium,
      transaction_date,
      amount,
      description,
      status,
      payee_id,
      type,
      account,
    };

    DepositsService.createDeposits(deposit)
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
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Medium:</label>
                  <input
                    type="text"
                    placeholder="Enter Medium"
                    name="customerName"
                    className="form-control"
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Transaction Date:</label>
                  <input
                    type="text"
                    placeholder="Transaction Date"
                    name="crustChoice"
                    className="form-control"
                    value={transaction_date}
                    onChange={(e) => setTransaction_date(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Amount to Deposit</label>
                  <input
                    type="text"
                    placeholder="Enter Amount To Deposit"
                    name="toppings"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Description:</label>
                  <input
                    type="text"
                    placeholder="Deposit Description"
                    name="crustChoice"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Status</label>
                  <input
                    type="text"
                    placeholder="Whats the status"
                    name="crustChoice"
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Payee Id</label>
                  <input
                    type="text"
                    placeholder="Enter Payee Id"
                    name="crustChoice"
                    className="form-control"
                    value={payee_id}
                    onChange={(e) => setPayee_id(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Type </label>
                  <input
                    type="text"
                    placeholder="Enter Type"
                    name="crustChoice"
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Account </label>
                  <input
                    type="text"
                    placeholder="Enter Account"
                    name="crustChoice"
                    className="form-control"
                    value={account.id}
                    onChange={(e) => setAccount(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => createDeposits(e)}
                >
                  Submit Deposit
                </button>
                <Link to="/pizza" className="btn btn-danger">
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

export default DepositsComponent;