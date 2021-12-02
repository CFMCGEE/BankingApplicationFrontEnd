import React, { useState, useEffect } from "react";
import CustomerService from "../services/CustomerService";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ListCustomerComponent = () => {
  //function to change the state value
  const [customer, setCustomer] = useState([]);

  const [q, setQ] = useState("");

  //use effect to fetch the data from the server
  useEffect(() => {
    getAllCustomers();
  }, []);

  const getAllCustomers = () => {
    CustomerService.getAllCustomers()
      .then((res) => {
        setCustomer(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Customers List</h2>
      <Link to="/create-customer" className="btn btn-primary mb-2">
        Create Customer
      </Link>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={(e) => {
          setQ(e.target.value);
        }}
      />
      <table className="table table-bordered table-striped">
        <thead>
          <th>Customer Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {customer
            .filter((customer) => {
              if (q === "") {
                return customer;
              } else if (customer.first_Name.toLowerCase().includes(q.toLowerCase()) || customer.last_Name.toLowerCase().includes(q.toLowerCase())) {
                return customer;
              }
            })
            .map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.first_Name}</td>
                <td>{customer.last_Name}</td>
                <td>
                  <Link to={`/edit-customer/${customer.id}`} className="btn btn-primary">
                    Update Customer
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCustomerComponent;
