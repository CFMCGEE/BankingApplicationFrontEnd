import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DepositsService from "../services/DepositService";

const CreateDepositsComponent = () => {

  const [medium, setMedium] = useState("");
  const [transaction_date, setTransaction_date] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [status] = useState("Pending");
  const [payee_id, setPayee_id] = useState("");
  const [type, setType] = useState("");
  const [account] = useState({ id: "" });

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
        navigate("/accounts");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
      <br />
        <div className="row">
          <div style={{ backgroundColor: "#00a86b", color: "#FFFFFF" }} className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Create Deposit</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Medium:</label>
                  <input
                    type="text"
                    placeholder="Enter Medium"
                    name="medium"
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
                    name="transaction_date"
                    className="form-control"
                    value={transaction_date}
                    onChange={(e) => setTransaction_date(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Amount to Deposit:</label>
                  <input
                    type="text"
                    placeholder="Enter Amount To Deposit"
                    name="amount"
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
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Payee ID:</label>
                  <input
                    type="text"
                    placeholder="Enter Payee ID"
                    name="payee_id"
                    className="form-control"
                    value={payee_id}
                    onChange={(e) => setPayee_id(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Type:</label>
                  <input
                    type="text"
                    placeholder="Enter Type"
                    name="type"
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Account ID:</label>
                  <input
                    type="text"
                    placeholder="Enter Account ID"
                    name="accocunt"
                    className="form-control"
                    onChange={(e) => account.id = (e.target.value)}
                  ></input>
                </div>

                <button className="btn btn-primary" onClick={(e) => createDeposits(e)}>Submit</button>
                <Link to="/accounts" className="btn btn-danger" style={{ marginLeft: "453px" }}>Cancel</Link>
            
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDepositsComponent;