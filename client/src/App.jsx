import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import SignUp from './components/auth/Signup.jsx';
import Post from './components/Post.jsx';
import Cars from './components/Cars.jsx';
import ChatRoom from './components/ChatRoom.jsx';
import AllPending from './components/AllPending.jsx'
import Notify from './components/Notify.jsx'
import NavBar from './components/NavBar.jsx';
import PrivatChat from './components/PrivatChat.jsx'
import SuccessPayment from "./components/SuccessPayment.jsx"
import FailPayment from './components/FailPayment.jsx';
import Payment from './components/Payment.jsx';
import Customers from './components/Customers.jsx'
import Signup from './components/auth/Signup.jsx'
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
import Signin  from "./components/auth/Signin.jsx"
import Profile from ".//components/profile/Profile.jsx"
import Home from "./components/Home/Home.jsx"
import OneCarDetails from './components/OneCarDetails';
function App() {
  const [users,setUser]=useState([])

  useEffect(()=>{
    
    axios.get('http://localhost:3000/api/user/allusers').then(res=>{
      console.log(res.data)
      setUser(res.data)
    }).catch(err=>console.log(err))
  },[])

  return (
    <div className="App">
    {/* <NavBar /> */}
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      <Routes>
      <Route path="/" exact  element={<Home/>}/>
      <Route path="/Notify" element={<Notify/>}/>
      <Route path="/ChatRoom" element={<ChatRoom/>}/>
      
      <Route path="/AllPending" element={<AllPending/>}/>
      <Route path="/Post" element={<Post/>}/>
      <Route path="/PrivatChat" element={<PrivatChat/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/FailPayment" element={<FailPayment/>}/>
      <Route path="/SuccessPayment" element={<SuccessPayment/>}/>
      <Route path="/NavBar" element={<NavBar/>}/>
      <Route path="/Daily" element={<Daily/>}/>
      <Route path="/Monthly" element={<Monthly/>}/>
      <Route path="/Customers" element={<Customers users={users}/>}/>
      <Route path="/Transactions" element={<Transactions/>}/>
      <Route path="/OverView" element={<OverView/>}/>

      <Route path="/Cars" element={<Cars/>}/>
      <Route path="/AdminDashboard" element={<Dashboard />}/>
      <Route path="/Signup" element={<SignUp />}/>
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/OneCarDetails" element={<OneCarDetails />}/>
    </Routes>

    </div>
  );
}
export default App