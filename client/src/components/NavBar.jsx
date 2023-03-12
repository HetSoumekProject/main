import React from 'react';
import './Home/Home.css';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCarSide } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Notify from './Notify';



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
        <Link to ="/" >HOME</Link>
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="450" href="#about">
         ABOUT US
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="600" href="#destination">
          <Link to="/cars" >AUCTIONS</Link>
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="750" href="#services">
           <Link to='/post'>SELL YOUR CAR</Link>
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="900" href="#gallery">
          <Link to="/Profile" >PROFIL</Link>
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="1150" href="#blogs">
          <Link to='/adminDashboard'>ADMIN</Link> 
          </a>
        </nav>
  
        <a
          data-aos="zoom-in-left"
          data-aos-delay="1300"
          href="#book-form"
          className="btn"
        >
        <Link to ='/signUp'> SIGNUP/LOGIN</Link>
        </a>
       
      </header>
      <Notify/>
    </div>
    )
}

export default NavBar;