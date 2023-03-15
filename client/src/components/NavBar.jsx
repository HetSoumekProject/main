import React, { useEffect,useState } from 'react';
import './Home/Home.css';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import Handlesignout from './auth/Handlesignout.jsx'
import Notify from './Notify.jsx'
import axios from 'axios';

const NavBar =({refresh,setRefresh})=>{
 console.log(refresh)
  const [userState,setUserState]=useState("")
  
        useEffect(() => {
          AOS.init({ duration: 1000 ,offset: 150,});
          axios.get(`http://localhost:3000/api/user/userbyuid/${localStorage.userInfo}`)
          .then((res)=>{
            if(res.data.role!=undefined){
              setUserState(res.data.role)
            }
            else{
              setUserState("")
            }
            console.log("this is user state :",userState)
            console.log("userState:",res.data.role)
          }).catch((err)=>{
              console.log("user err:",err);
          })
        },[refresh])
 
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
          <Link  to="/cars" >AUCTIONS</Link>
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="750" href="#services">
           <Link   to='/post'>SELL YOUR CAR</Link>
          </a>
{  userState!=""&&<a data-aos="zoom-in-left" data-aos-delay="900" href="#gallery">
          <Link   to="/Profile" >PROFILE</Link>
          </a>}
{  userState==="admin" &&<a data-aos="zoom-in-left" data-aos-delay="1150" href="#blogs">
          <Link to='/adminDashboard'>ADMIN</Link> 
          </a>}
        </nav>
  
{ userState===""&&  <a
          data-aos="zoom-in-left"
          data-aos-delay="1300"
          href="#book-form"
          className="btn"
        >
        <Link  style={{ textDecoration: 'none',color:'white' }} to ='/signUp'> SIGNUP/LOGIN</Link>
       
        </a>}
{ userState!="" &&<a>
          <Handlesignout  setRefresh={setRefresh} refresh={refresh} />
        </a>}
        <div id='notif'><Notify/></div>        
      </header>
     
    </div>
    )
}

export default NavBar;