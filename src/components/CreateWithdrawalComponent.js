import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import WithdrawalsService from "../services/WithdrawalsService";

const CreateWithdrawalComponent = () => {

  const [medium, setMedium] = useState("");
  const [transaction_date, setTransaction_date] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [payer_id, setPayer_id] = useState("");
  const [type, setType] = useState("");
  const [account] = useState({ id: "" });

  const navigate = useNavigate();

  const createWithdrawal = (e) => {
    e.preventDefault();

    const withdrawal = { medium, transaction_date, amount, description, status, payer_id, type, account };

    WithdrawalsService.postWithdrawals(withdrawal).then((response) => {

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
          <h2 className="text-center">Create Withdrawal</h2>
            <div className="card-body">
              <Form>
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
                    placeholder="Enter Transaction Date"
                    name="transaction_date"
                    className="form-control"
                    value={transaction_date}
                    onChange={(e) => setTransaction_date(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Amount to Withdrawal</label>
                  <input
                    type="text"
                    placeholder="Enter Amount"
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
                    placeholder="Enter description"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Status</label>
                  <input
                    type="text"
                    placeholder="Enter Status"
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Payer ID</label>
                  <input
                    type="text"
                    placeholder="Enter Payer ID"
                    name="payer_id"
                    className="form-control"
                    value={payer_id}
                    onChange={(e) => setPayer_id(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Account Type</label>
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
                  <label className="form-label">Account ID</label>
                  <input
                    type="text"
                    placeholder="Enter Account ID"
                    name="account"
                    className="form-control"
                    onChange={(e) => account.id = (e.target.value)}
                  ></input>
                </div>

                <Button className="btn btn-primary" onClick={(e) => createWithdrawal(e)}>Submit</Button>
                <Link to="/accounts" className="btn btn-danger" style={{ marginLeft: "147px" }}>Cancel</Link>
            
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWithdrawalComponent;