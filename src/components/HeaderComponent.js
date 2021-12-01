import React from 'react'
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">One Piece of Bread Banking</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       {/* Link pages here */}
      </li>
    </ul>
    <span class="navbar-text">
      Pop flintlocks and sling diamond rocks
    </span>
  </div>
</nav>
        </div>
    )
}

export default HeaderComponent
