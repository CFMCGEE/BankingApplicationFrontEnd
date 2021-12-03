import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
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
    const [account] = useState({ id: '' })

    const navigate = useNavigate('')

    const createBill = (e) => {
        e.preventDefault();

    const bill = { status, payee, nickname, creation_date, payment_date, recurring_date, upcoming_payment_date, payment_amount, account }

            BillService.createBill(bill).then((response) => {

                console.log(response.data)

                navigate("/accounts");

            }).catch((error) =>{
                console.log(error);
            });

    }

    return (
        <div>      
            <br /> 
            <div className="container">
                <div className = "row">
                <div style={{ backgroundColor: "#00a86b", color: "#FFFFFF" }} className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className = "text-center">Create Bill</h2>
                        <div className = "card-body">
                            <Form>
                            <div className = "form-group mb-2" >
                                    <label className = "form-label">Status:</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Status" 
                                    name = "status"
                                    className = "form-control"
                                    value = {status}
                                    onChange = {(e) => setStatus(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Payee:</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Payee Info" 
                                    name = "payee"
                                    className = "form-control"
                                    value = {payee}
                                    onChange = {(e) => setPayee(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Creation Date:</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Creation Date" 
                                    name = "firstName"
                                    className = "form-control"
                                    value = {creation_date}
                                    onChange = {(e) => setCreation_date(e.target.value)}
                                    >
                                    </input>


                                </div> 
                                
                                
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Payment Date:</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Payment Date" 
                                    name = "firstName"
                                    className = "form-control"
                                    value = {payment_date}
                                    onChange = {(e) => setPayment_date(e.target.value)}
                                    >
                                    </input>
                                </div> 
                                
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Nickname:</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Nickname" 
                                    name = "firstName"
                                    className = "form-control"
                                    value = {nickname}
                                    onChange = {(e) => setNickname(e.target.value)}
                                    >
                                    </input>
                                </div> 
                                
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">ReccurringDate:</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Reccurring Date" 
                                    name = "firstName"
                                    className = "form-control"
                                    value = {recurring_date}
                                    onChange = {(e) => setRecurring_date(e.target.value)}
                                    >
                                    </input>
                                </div> 
                                
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Upcoming Payment Date:</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Upcoming Payment Date" 
                                    name = "firstName"
                                    className = "form-control"
                                    value = {upcoming_payment_date}
                                    onChange = {(e) => setUpcoming_payment_date(e.target.value)}
                                    >
                                    </input>
                                </div>

                            {/* First name field in my rest api */}
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Payment Amount:</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Payment Amount" 
                                    name = "firstName"
                                    className = "form-control"
                                    value = {payment_amount}
                                    onChange = {(e) => setPayment_amount(e.target.value)}
                                    >
                                    </input>
                                </div>


                                {/* Last name field in my rest api */}
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Account Type:</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Account ID" 
                                    name = "lastName"
                                    className = "form-control"
                                    onChange = {(e) => (account.id = e.target.value)}
                                    >
                                    </input>
                                </div>


                                <Button className ="btn btn-primary" onClick = {(e) => createBill(e)}>Submit</Button>
                                {/* TO DO
                                {/* use my delete Bill function */}
                                {/* <button className ="btn btn-success" onClick = {(e) => makEABILL(e)}> Delete A Bill</button> */}
                                <Link to="/accounts" className="btn btn-danger" style={{ marginLeft: "147px" }}>Cancel</Link>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
        </div>
    )

}

export default CreateBillComponent;
