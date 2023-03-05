/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-expressions */

import './App.css';
import React,{useEffect,useState} from 'react';
import SignUp from './components/auth/SignUp';
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
import Customers from './components/Customers'
import Login from './components/auth/Login';

import AllPosts from './components/AllPosts';
// import SuccessPayment from "./components/SuccessPayment.jsx"
// import FailPayment from './components/FailPayment.jsx';
// import Payment from './components/Payment.jsx';
import Dashboard from './components/AdminDash.jsx';
import { Route,Routes } from 'react-router-dom'
import Monthly from './components/Monthly';




function App() {
  const [view,setView] = useState("all")


const renderView = () => {
 
  if(view === 'Home') {
    return <Home />
}
  if(view === 'Customers') {
    return <Customers />
} 
if(view === 'monthly') {
  return <Monthly/>
}
if(view === 'order') {
  return <AllPending/>
}

// if(view === 'create') {
//   return <Form/>
// }
}


  return (
    <div className="App">

    <NavBar setView={setView}/>
    <Home/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {/* <Dashboard setView={setView}/> */}

    <Routes>
    <Route path="/" exact  element={<Home/>}/>
      <Route path="/Cars" element={<Cars/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>
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
      <Route path="/Customers" element={<Customers/>}/>

      <Route path="/AdminDashboard" element={<Dashboard setView={setView}/>}/>
      {/* <Route path="/Signup" element={<Signup/>}/> */}
    </Routes> 
    
{renderView()}
    </div>
  );
}


export default App
