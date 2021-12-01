import React from "react";
// eslint-disable-next-line
import { Navbar, Container, Nav } from "react-bootstrap";
// eslint-disable-next-line
import { Route, Routes } from "react-router-dom";
import DepositsComponent from "./components/DepositsComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<DepositsComponent />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;