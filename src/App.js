import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListCustomerComponent from "./components/ListCustomersComponent";
import CreateCustomerComponent from "./components/CreateCustomerComponent";

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<ListCustomerComponent />} />
          <Route exact path="/customers" element={<ListCustomerComponent />} />
          <Route path="/create-customer" element={<CreateCustomerComponent />} />
          <Route path="/edit-customer/:id" element={<CreateCustomerComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
