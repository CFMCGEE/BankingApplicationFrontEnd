import React from 'react'
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
        One Piece of Bread Banking
                </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
                <NavLink className="nav-link" to="/accounts">
                  Add account
                </NavLink>

      </li>
      <li class="nav-item active">
                <NavLink className="nav-link" to="/">
                  empty
                </NavLink>
      </li>

<li class="nav-item active">
                <NavLink className="nav-link" to="/">
                  empty
                </NavLink>
      </li>
    </ul>
    <span class="navbar-text">
      Getcho Bread up
    </span>
  </div>
</nav>
        </div>
    )
}

export default HeaderComponent
