import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Post from './components/Post.jsx';
import Cars from './components/Cars.jsx';
import ChatRoom from './components/ChatRoom.jsx';
import AllPending from './components/AllPending.jsx'

import NavBar from './components/NavBar.jsx';
import PrivatChat from './components/PrivatChat.jsx'
import SuccessPayment from "./components/SuccessPayment.jsx"
import FailPayment from './components/FailPayment.jsx';
import Payment from './components/Payment.jsx';
import Customers from './components/Customers.jsx'
import Signup from './components/auth/Signup.jsx'
// import AllPosts from './components/AllPosts';
// import SuccessPayment from "./components/SuccessPayment.jsx"
// import FailPayment from './components/FailPayment.jsx';
// import Payment from './components/Payment.jsx';
import AllPosts from './components/AllPosts';
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
import TheMap from './components/TheMap.jsx';
import Pop from './components/Pop.jsx'
import FavoriteList from './components/FavoriteList';
// import Mailer from './components/mailer/Mailer.jsx'
import AdminSet from './components/AdminSet';
import CarsForAdmin from './components/CarsForAdmin';

// import Count from './components/Count.jsx'

  
  
// import TheMap from './components/TheMap.jsx';

import Mail from "./components/Mail.jsx"
function App() {
  const [users,setUsers]=useState([])

  const [user,setUser]=useState([])

  const [refresh,setRefresh]=useState(true)
const x =localStorage.userInfo
console.log(user,'uder');
  useEffect(()=>{

    axios.get(`http://localhost:3000/api/user/userbyuid/${x}`)
      .then((res)=>{
          setUser(res.data);
      }).catch((err)=>{
          console.log("user err:",err);
      })
    axios.get('http://localhost:3000/api/user/allusers').then(res=>{

      setUsers(res.data)
    }).catch(err=>console.log(err))
  },[refresh])


  return (
    <div className="App">
    <NavBar setRefresh={setRefresh} refresh={refresh} />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <Routes>
      
      <Route path="/" exact  element={<Home/>}/>
      {/* <Route path="/Notify" element={<Notify/>}/> */}
      <Route path="/ChatRoom" element={<ChatRoom/>}/>
      <Route path="/mail" element={<Mail/>}/>
      <Route path="/AllPending" element={<AllPending/>}/>
      <Route path="/Post" element={<Post/>}/>
      <Route path="/PrivatChat" element={<PrivatChat/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/FailPayment" element={<FailPayment/>}/>
      <Route path="/success" element={<SuccessPayment/>}/>
      <Route path="/NavBar" element={<NavBar/>}/>
      <Route path="/SuccessPayment" element={<SuccessPayment/>}/>
      <Route path="/NavBar" element={<NavBar />}/>
      <Route path="/Daily" element={<Daily/>}/>

      {user.role==="admin"&&<Route path="/AdminDashboard" element={<Monthly/>}/>}
      <Route path="/Monthly" element={<Monthly/>}/>
      <Route path="/Customers" element={<Customers users={users}/>}/>
      <Route path="/Transactions" element={<Transactions/>}/>
      <Route path="/OverView" element={<OverView/>}/>
      <Route path="/Cars" element={<Cars user={user}/>}/>
      {console.log("user",user.role)}
      {user.role==="admin"&&<Route path="/AdminDashboard" element={<Dashboard />}/>}
      
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Signin" element={<Signin setRefresh={setRefresh} refresh={refresh}/>} />
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/OneCarDetails" element={<OneCarDetails />}/>
      <Route path="/pop" element={<Pop />}/>

      <Route path="/FavoriteList" element={<FavoriteList user={user} refresh={refresh}/>}/>
      <Route path="/AdminSet" element={<AdminSet />}/>
      <Route path="/CarsForAdmin" element={<CarsForAdmin />}/>
      
      {/* <Route path="/Count" element={<Count />}/> */}
    </Routes>

   


    </div>
  );
}
export default App