import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";

import "../App.css";

const CreateOrUpdateCustomer = () => {
  const [first_Name, setFirstName] = useState("");
  const [last_Name, setLastName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateCustomer = (e) => {
    e.preventDefault();

    const newCustomer = { first_Name, last_Name };

    if (id) {
      CustomerService.updateCustomer(id, newCustomer)
        .then(() => {
          navigate("/customers");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      CustomerService.createCustomer(newCustomer)
        .then((res) => {
          console.log(res.data);
          navigate("/customers");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    CustomerService.getCustomerById(id)
      .then((response) => {
        setFirstName(response.data.first_Name);
        setLastName(response.data.last_Name);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Edit Customer</h2>;
    } else {
      return <h2 className="text-center">Create Customer</h2>;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 class="mb-3 text-primary"> {title()}</h6>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="select"
                  placeholder="First Name?"
                  name="FirstName"
                  className="form-control"
                  value={first_Name}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label className="form-label">Last Name</label>
                  </div>
                </div>
                <input
                  type="select"
                  placeholder="Last Name?"
                  name="LastName"
                  className="form-control"
                  value={last_Name}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
              <button type="submit" className="btn btn-success" onClick={(e) => saveOrUpdateCustomer(e)}>
                Create
              </button>
              <Link to="/customers" className="btn btn-danger" style={{ marginLeft: "10px" }}>
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrUpdateCustomer;
