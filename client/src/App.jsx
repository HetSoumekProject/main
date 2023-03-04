
import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Post from './components/Post.jsx';
import Cars from './components/Cars';
import ChatRoom from './components/ChatRoom';
import AllPending from './components/AllPending.jsx'
import Notify from './components/Notify.jsx'
import Auctions from './components/Auctions.jsx';
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

  const [data , setData] = useState([])

  useEffect(() => {
    getCars() 
  } , [])
  const getCars = () => {
    axios.get("http://localhost:3000/api/car/AllCars")
    .then(response => {
      console.log(response)
      setData(response.data)})
    .catch(error => {console.log(error)})
  }




   
  return (
    <div className="App">
    {/* <NavBar/> */}
    <NavBar/>
    
    <Routes>
    <Route path="/" exact  element={<Home/>}/>
      <Route path="/Cars" element={<Cars data={data}/>}/>
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
