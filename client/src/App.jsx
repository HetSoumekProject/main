/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-expressions */

import './App.css';
import React,{useEffect,useState} from 'react';
import Post from './components/Post.jsx';
import Cars from './components/Cars.jsx';
import ChatRoom from './components/ChatRoom';
import AllPending from './components/AllPending.jsx'
import Notify from './components/Notify.jsx'
import WhatIs from './components/WhatIs.jsx';
import NavBar from './components/NavBar.jsx';
import PrivatChat from './components/PrivatChat.jsx'
import SuccessPayment from "./components/SuccessPayment.jsx"
import FailPayment from './components/FailPayment.jsx';
import Payment from './components/Payment.jsx';
import Home from './components/Home.jsx';
import Customers from './components/Customers';
import Signup from "../src/components/auth/Signup"
import AllPosts from './components/AllPosts';
// import SuccessPayment from "./components/SuccessPayment.jsx"
// import FailPayment from './components/FailPayment.jsx';
// import Payment from './components/Payment.jsx';
import Dashboard from './components/AdminDash.jsx';
import { Route,Routes } from 'react-router-dom'
import Monthly from './components/Monthly';
import Daily from './components/Daily';
import Transactions from './components/Transaction';
import OverView from './components/OverView';




function App() {
  
  return (
    <div className="App">

    <NavBar />
    <Home/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {/* <NavBar/> */}
      {/* <Customers/> */}
      <Dashboard />
      {/* <WhatIs/> */}
      <Routes>     
      <Route path="/Home" exact  element={<Home/>}/>
      <Route path="/Cars" element={<Cars/>}/>
      <Route path="/Notify" element={<Notify/>}/>
      <Route path="/ChatRoom" element={<ChatRoom/>}/>
      <Route path="/WhatIs" element={<WhatIs/>}/>
      <Route path="/AllPending" element={<AllPending/>}/>
      <Route path="/Post" element={<Post/>}/>
      <Route path="/PrivatChat" element={<PrivatChat/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/FailPayment" element={<FailPayment/>}/>
      <Route path="/SuccessPayment" element={<SuccessPayment/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/FailPayment" element={<FailPayment/>}/>
      <Route path="/SuccessPayment" element={<SuccessPayment/>}/> 
      <Route path="/NavBar" element={<NavBar/>}/>
      <Route path="/AdminDashboard" element={<Dashboard/>}/>
      <Route path="/Daily" element={<Daily/>}/>
      <Route path="/Monthly" element={<Monthly/>}/>
      <Route path="/Customers" element={<Customers/>}/>
      <Route path="/Transactions" element={<Transactions/>}/>
      <Route path="/OverView" element={<OverView/>}/>
      {/* <Route path="/Signup" element={<Signup/>}/> */}
    </Routes> 

    </div>
  );
}


export default App
