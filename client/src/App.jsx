import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Post from './components/Post.jsx';
import Cars from './components/Cars';
import ChatRoom from './components/ChatRoom';
import AllPending from './components/AllPending.jsx'
import WhatIs from './components/WhatIs';
import NavBar from './components/NavBar';
import Notify from './components/Notify.jsx'
import Auctions from './components/Auctions.jsx';
function App() {

  const [data , setData] = useState([])

  useEffect(() => {
    getCars() 
  } , [])
  const getCars = () => {
    axios.get("http://127.0.0.1:3000/api/car/AllCars")
    .then(response => {setData(response.data),console.log(response.data);})
    .catch(error => {console.log(error)})
  }




   
  return (
    <div className="App">
    <NavBar/>
    <WhatIs/>
    <ChatRoom/>
    <Auctions/>
    <Cars data={data}/>
    <Post/>
    <AllPending/>
    <Notify/>
    </div>
  );
}

export default App;
