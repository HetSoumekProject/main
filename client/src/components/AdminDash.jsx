import React, { useState } from "react";
import './AdminDash.css'
import Customers from "./Customers";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import AllPending from "./AllPending";

const Dashboard = (props) => {
        const [expanded, setExpaned] = useState(true)
        const [view,setView] = useState("all")


const renderView = () => {
  if(view === 'Customers') {
    return <Customers data ={props.data} user={props.user}/>
} 
if(view === 'Order') {
  return <AllPending carsPending={props.carsPending}/>
}
// if(view === 'create') {
//   return <Form/>
// }
}
  
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
              <label className="btn btn-outline-success"  onClick={() => setView('Customers')}>Customers</label>
            </li>
            <br/>
            <li >
              <label  className="btn btn-outline-success"  onClick={() => setView("Order")}>Order</label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  onClick={() => setView('Transactions')}>Transactions</label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  onClick={() => setView('OverView')}>OverView</label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  onClick={() => setView('Daily')}>Daily</label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  onClick={() => setView('Monthly')}>Monthly</label>
            </li>
            <br/>
            <li >
              <label className="btn btn-outline-success"  onClick={() => setView('Admin')}>Admin</label>
            </li>

           
           
          </ul>
         
        </nav>
    
      {renderView()}
    </div>
      </motion.div>
      </>
    );
  };

export default Dashboard;
