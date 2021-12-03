import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import BillService from "../services/BillService";

const CreateBillComponent = () => {

    const [status, setStatus] = useState('')
    const [payee, setPayee] = useState('')
    const [nickname, setNickname] = useState('')
    const [creation_date, setCreation_date] = useState('')
    const [payment_date, setPayment_date] = useState('')
    const [recurring_date, setRecurring_date] = useState('')
    const [upcoming_payment_date, setUpcoming_payment_date] = useState('')
    const [payment_amount, setPayment_amount] = useState('')
    const [account, setAccount] = useState({ id: '' })
    const { id } = useParams()
    const navigate = useNavigate('')

    const createOrUpdateBill = (e) => {
        e.preventDefault();
        const bill = {
            status,
            payee,
            nickname,
            creation_date,
            payment_date,
            recurring_date,
            upcoming_payment_date,
            payment_amount, 
            account
        }

        if (id) {
            BillService.editBill(id).then((response) => {
                navigate("/bills");
            }).catch((error) => {
                console.log(error)
            });
        } else {
            BillService.createBill(bill).then((response) => {
                console.log(response.data)
                navigate("/bills");
            }).catch((error) => {
                console.log(error);
            });
        }

        // BillService.createBill(bill).then((response) =>{
        //     console.log(response.data)
        //     navigate('/bills')
        // }).catch((error) =>{
        //     console.log(error);
        // });
    }

    return (
        <div>
            <div className="container mt-5 mt-5">
                <h2 className="text-center">Create A Bill</h2>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>

                                <div className="form-group mb-2">
                                    <label className="form-label">Bill Status: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter a Status"
                                        className="form-control"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Payee: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter a Payee"
                                        className="form-control"
                                        value={payee}
                                        onChange={(e) => setPayee(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Nickname:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter A Nickname"
                                        className="form-control"
                                        value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Creation Date:</label>
                                    <input
                                        type="text"
                                        placeholder="00/00/0000"
                                        className="form-control"
                                        value={creation_date}
                                        onChange={(e) => setCreation_date(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Payment Date:</label>
                                    <input
                                        type="text"
                                        placeholder="00/00/0000"
                                        className="form-control"
                                        value={payment_date}
                                        onChange={(e) => setPayment_date(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Recurring Date:</label>
                                    <input
                                        type="text"
                                        placeholder="00/00/0000"
                                        className="form-control"
                                        value={recurring_date}
                                        onChange={(e) => setRecurring_date(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Upcoming Payment Date:</label>
                                    <input
                                        type="text"
                                        placeholder="00/00/0000"
                                        className="form-control"
                                        value={upcoming_payment_date}
                                        onChange={(e) => setUpcoming_payment_date(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Payment Amount:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Payment Amount"
                                        className="form-control"
                                        value={payment_amount}
                                        onChange={(e) => setPayment_amount(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Account ID:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Payment Amount"
                                        className="form-control"
                                        onChange={(e) => account.id = e.target.value}>
                                    </input>
                                </div>

                                <Link to="/bills"><button className="btn btn-success" onClick={(e) => createOrUpdateBill(e)} >Submit</button></Link>
                                <Link to="/bills"><button className="btn btn-danger">Cancel</button></Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CreateBillComponent;
