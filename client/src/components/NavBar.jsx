/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import WhatIs from "./WhatIs";
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import {Navbar, Nav, Button} from 'react-bootstrap';
const NavBar =()=>{
    return(
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <img src="https://ymimg1.b8cdn.com/uploads/article/3786/pictures/2777122/Hidden_car_logo.png" width="30" height="30"  class=" rounded-circle" alt=""/>
          Chkoun Yzid</a>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Auctions
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">live Auctions</a></li>
                <li><a class="dropdown-item" href="#">Past Auctions </a></li>
                <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Live Show</a></li>
              
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Profile
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Setting</a></li>
                <li><a class="dropdown-item" href="#">Historique </a></li>
                <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Log Out</a></li>
              
              </ul>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-success" aria-current="page" href="./WhatIs">what's Chkoun Yzid</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Sell a Car</a>
            </li>
           
           
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2  " type="search" placeholder="Search for auctions.." aria-label="Search"/>
            <Button class="btn btn-outline-success" type="submit">Search</Button>
          </form>
                  </div>
                  <a class="btn btn-outline-success" aria-current="page" href="/signup">Sign Up</a>
      </div>
   
    </nav>
    )
}
export default NavBar;