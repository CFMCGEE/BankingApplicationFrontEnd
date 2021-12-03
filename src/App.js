import React from "react";
import { Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import AccountComponent from "./components/AccountComponent";
import ListCustomerComponent from "./components/ListCustomersComponent";
import CreateCustomerComponent from "./components/CreateCustomerComponent";
import DepositsComponent from "./components/DepositsComponent";
import DisplayAccounts from './components/DisplayAccounts';
import AddBillComponent from './components/AddBillComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    
    <div>

      <header> <HeaderComponent /> </header>

       <main>  </main>

      <div className="container">
      
        <Routes>

          <Route exact path="/accounts" element={<DisplayAccounts />} />
          <Route exact path="/customers" element={<ListCustomerComponent />} />

          <Route exact path="/create-account" element={<AccountComponent />} />
          <Route exact path="/create-customer" element={<CreateCustomerComponent />} />
          <Route exact path="/create-deposit" element={<DepositsComponent />} />
          <Route exact path="/create-bill" element={<AddBillComponent />} />

          <Route exact path="/edit-account/:id" element={<DisplayAccounts />} />
          <Route exact path="/edit-customer/:id" element={<CreateCustomerComponent />} />

        </Routes>
      </div>

      <footer> <FooterComponent /> </footer>

    </div>

  );
  
}

export default App;
