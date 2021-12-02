import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom'; 
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AccountComponent from './components/AccountComponent';
import ListCustomerComponent from "./components/ListCustomersComponent";
import CreateCustomerComponent from "./components/CreateCustomerComponent";
import DepositsComponent from "./components/DepositsComponent";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<DepositsComponent />} />
          <Route exact path="/customers" element={<ListCustomerComponent />} />
          <Route exact path="/list-customers" element={<ListCustomerComponent />} />
          <Route path = '/accounts' element = { <AccountComponent/>} />
          <Route path="/create-customer" element={<CreateCustomerComponent />} />
          <Route path="/edit-customer/:id" element={<CreateCustomerComponent />} />
        </Routes>
       <FooterComponent/>
      </div>
    </div>
  );
}

export default App;