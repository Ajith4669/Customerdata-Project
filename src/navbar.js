import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        
      <li className="nav-item ">
        <Link className="nav-link active" aria-current="page" to="/">Home </Link>
      </li>

      <li className="nav-item ">
        <Link className="nav-link " aria-current="page" to="/about">About </Link>
      </li>
    </ul>
  </div>
  
</nav>

    )
}

export default Navbar;