import './App.css';
import React,{useEffect,useState} from 'react';
import SignUp from './components/auth/SignUp.jsx';
import Post from './components/Post.jsx';
import Cars from './components/Cars.jsx';
import ChatRoom from './components/ChatRoom.jsx';
import AllPending from './components/AllPending.jsx'
import Notify from './components/Notify.jsx'
import WhatIs from './components/WhatIs.jsx';
import NavBar from './components/NavBar.jsx';
import PrivatChat from './components/PrivatChat.jsx'
import SuccessPayment from "./components/SuccessPayment.jsx"
import FailPayment from './components/FailPayment.jsx';
import Payment from './components/Payment.jsx';
import Home from './components/Home.jsx';
import Customers from './components/Customers.jsx'
import Login from './components/auth/Login.jsx';
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
  const [user,setUser]=useState({})
  return (
    <div className="App">
    <NavBar />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <Routes>
      <Route path="/" exact  element={<Home/>}/>
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
      <Route path="/Daily" element={<Daily/>}/>
      <Route path="/Monthly" element={<Monthly/>}/>
      <Route path="/Customers" element={<Customers/>}/>
      <Route path="/Transactions" element={<Transactions/>}/>
      <Route path="/OverView" element={<OverView/>}/>
      <Route path="/Cars" element={<Cars user={user}/>}/>
      <Route path="/AdminDashboard" element={<Dashboard />}/>
      <Route path="/Login" element={<Login setUser={setUser}/>}/>

      <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
    </div>
  );
}
export default App