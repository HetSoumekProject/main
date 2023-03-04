
import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Post from './components/Post.jsx';
import Cars from './components/Cars';
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

import AllPosts from './components/AllPosts';
// import SuccessPayment from "./components/SuccessPayment.jsx"
// import FailPayment from './components/FailPayment.jsx';
// import Payment from './components/Payment.jsx';
import Dashboard from './components/AdminDash.jsx';
import { Route,Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">

    <NavBar/>
    
    <Routes>
    <Route path="/" exact  element={<Home/>}/>
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
      {/* <Route path="/Payment" element={<Payment/>}/> */}
      {/* <Route path="/FailPayment" element={<FailPayment/>}/>
      <Route path="/SuccessPayment" element={<SuccessPayment/>}/> */}
      <Route path="/AdminDashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}


export default App
