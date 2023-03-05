import React, { useState } from "react";
import './AdminDash.css'
import Customers from "./Customers";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import AllPending from "./AllPending";
import Monthly from "./Monthly";
import Signup from "./auth/SignUp";
import NavBar from "./NavBar";


const Dashboard = (props) => {
        const [expanded, setExpaned] = useState(true)
        
  
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
    console.log(window.innerWidth)
    return (
      <>
        <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
          {console.log(props,"mehdi")}
          <UilBars />
        </div>
      <motion.div className='sidebar'
      variants={sidebarVariants}
     
      >
        {/* logo */}
        <div className="logo">
          
          <span>
            Auctions
          </span>
        </div>
  
        <div>
        <nav className="nav">
         
          
       
          <ul className="list">
            <li >
              <label className="btn btn-outline-success"  onClick={() => props.setView('Customers')}>Customers</label>
            </li>
            <br/>
            <li >
              <label  className="btn btn-outline-success"  onClick={() => props.setView("order")}>Order</label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  onClick={() => props.setView('Transactions')}>Transactions</label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  onClick={() => props.setView('#')}>OverView</label>
            </li>
            <br/>
           
            <li >
              <label className="btn btn-outline-success"  onClick={() => props.setView('Daily')}>Daily</label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  onClick={() => props.setView('monthly')}>Monthly</label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  onClick={() => props.setView('Admin')}>Admin</label>
            </li>

           
           
          </ul>
         
        </nav>
    
     
    </div>
      </motion.div>
      </>
    );
  };

export default Dashboard;
