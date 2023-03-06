/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import WhatIs from "./WhatIs";
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import {Navbar, Nav, Button} from 'react-bootstrap';
import Signup from "./auth/Signup";
import Home from "./Home";
import WhatIs from "./WhatIs";


const NavBar =(props)=>{
  console.log('hh',props);
 
    return(
     <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src="https://ymimg1.b8cdn.com/uploads/article/3786/pictures/2777122/Hidden_car_logo.png" width="30" height="30"  className=" rounded-circle" alt=""/>
          Chkoun Yzid</a>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Auctions
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">live Auctions</a></li>
                <li><a className="dropdown-item" href="#">Past Auctions </a></li>
                <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Live Show</a></li>
              
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Profile
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Setting</a></li>
                <li><a className="dropdown-item" href="#">Historique </a></li>
                <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Log Out</a></li>
              
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-success" aria-current="page" href="./WhatIs">what's Chkoun Yzid</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Sell a Car</a>
            </li>
           
           
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2  " type="search" placeholder="Search for auctions.." aria-label="Search"/>
            <Button className="btn btn-outline-success" type="submit">Search</Button>
          </form>
                  </div>
                  <a className="btn btn-outline-success" aria-current="page" onClick={() => props.setView("Signup")}>Sign Up</a>
      </div>
   
    </nav>
   
    </div>
    )
}
export default NavBar;