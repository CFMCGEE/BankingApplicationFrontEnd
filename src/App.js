import React from "react";
import { Route, Routes } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import CreateAccountComponent from "./components/CreateAccountComponent";
import CreateCustomerComponent from "./components/CreateCustomerComponent";
import CreateBillComponent from './components/CreateBillComponent';
import CreateDepositsComponent from "./components/CreateDepositsComponent";
import CreateWithdrawalComponent from "./components/CreateWithdrawalComponent";

import DisplayAccountsComponent from './components/DisplayAccountsComponent';
import DisplayCustomersComponent from './components/DisplayCustomersComponent';
import DisplayWithdrawalsComponent from './components/DisplayWithdrawalsComponent'

// eslint-disable-next-line
import DisplayBillsComponent from './components/DisplayBillsComponent'

import ReRouterComponent from './components/ReRouterComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    
    <div className="page">

      <header> <HeaderComponent /> </header>

       <main>  </main>

      <div className="containerD">
      
        <Routes>

          <Route exact path="/" element={<ReRouterComponent />}> </Route>
         
          <Route exact path="/create-account" element={<CreateAccountComponent />} />
          <Route exact path="/create-bill" element={<CreateBillComponent />} />
          <Route exact path="/create-customer" element={<CreateCustomerComponent />} />
          <Route exact path="/create-deposit" element={<CreateDepositsComponent />} />
          <Route exact path="/create-withdrawal" element={<CreateWithdrawalComponent />} />

          <Route exact path="/accounts" element={<DisplayAccountsComponent />} />
          <Route exact path="/customers" element={<DisplayCustomersComponent />} />

          <Route exact path="/update-account/:id" element={<CreateAccountComponent />} />
          <Route exact path="/update-customer/:id" element={<CreateCustomerComponent />} />

          <Route exact path="/view-bills/:id" element={<DisplayBillsComponent />} />
          <Route exact path="/view-withdrawals/:id" element={<DisplayWithdrawalsComponent />} />

        </Routes>

      </div>

      <footer> <FooterComponent /> </footer>

    </div>

  );
  
}

export default App;
