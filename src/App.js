import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom'; 
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AccountComponent from './components/AccountComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DepositsComponent from "./components/DepositsComponent";



function App() {
  return (
    <div>
      <div className="container">
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<DepositsComponent />} />
          <Route path = '/accounts' element = { <AccountComponent/>} />
        </Routes>
       <FooterComponent/>
      </div>
    </div>


  );
}

export default App;