import React, { useState } from "react";
import './AdminDash.css'
import Customers from "./Customers";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import AllPending from "./AllPending";
import Monthly from "./Monthly";
import Signup from "./auth/Signup";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";


const Dashboard = () => {
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
              <label className="btn btn-outline-success"  > <Link to="/Customers">Customers</Link></label>
            </li>
            <br/>
            <li >
              <label  className="btn btn-outline-success"  ><Link to="/AllPending">Order</Link></label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  ><Link to="/Transactions">Transactions</Link></label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  ><Link to ="/OverView">OverView</Link></label>
            </li>
            <br/>
           
            <li >
              <label className="btn btn-outline-success"  ><Link to="/Daily">Daily</Link></label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  ><Link to ="/Monthly">Monthly</Link></label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  ><Link to="/AdminSet">Admin</Link></label>
            </li>

           
           
          </ul>
         
        </nav>
    
     
    </div>
      </motion.div>
      </>
    );
  };

export default Dashboard;
