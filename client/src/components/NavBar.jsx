import React from 'react';
import './Home/Home.css';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCarSide } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { useEffect } from 'react';
import Notify from './Notify';
import { Link } from "react-router-dom";


const NavBar =(props)=>{
  
        useEffect(() => {
          AOS.init({ duration: 1000 ,offset: 150,});
        }, []);
  console.log('hh',props);
 
    return(
        <div>
        <header className="header">
        <div id="menu-btn" className="fas fa-bars">
          <FontAwesomeIcon icon={faBars} />
        </div>
  
        <a data-aos="zoom-in-left" data-aos-delay="150" href="#" className="logo">
        <img src="/images/logo1.png" width="70px" height="70px" />
  
        </a>
  
        <nav className="navbar">
          <a data-aos="zoom-in-left" data-aos-delay="300" href="#home">
            home
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="450" href="#about">
            about
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="600" href="#destination">
            Auctions
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="750" href="#services">
           Sell your car
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="900" href="#gallery">
            SingUp
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="1150" href="#blogs">
            blogs
          </a>
        </nav>
  
        <a
          data-aos="zoom-in-left"
          data-aos-delay="1300"
          href="#book-form"
          className="btn"
        >
          book now
        </a>
       
      </header>
      <Notify/>
    </div>
    )
}

export default NavBar;