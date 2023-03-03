import './App.css';
import Post from './components/Post.jsx';
import AllPosts from './components/AllPosts.jsx';
import ChatRoom from './components/ChatRoom';
import AllPending from './components/AllPending.jsx'
import WhatIs from './components/WhatIs.jsx';
import NavBar from './components/NavBar.jsx';
import PrivatChat from './components/PrivatChat.jsx'
import SuccessPayment from "./components/SuccessPayment.jsx"
import FailPayment from './components/FailPayment.jsx';
import Payment from './components/Payment.jsx';


import { Route,Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
    {/* <Route path="/" exact  element={<Home/>}/> */}
      <Route path="/AllPosts" element={<AllPosts/>}/>
      <Route path="/ChatRoom" element={<ChatRoom/>}/>
      <Route path="/WhatIs" element={<WhatIs/>}/>
      <Route path="/AllPending" element={<AllPending/>}/>
      <Route path="/Post" element={<Post/>}/>
      <Route path="/PrivatChat" element={<PrivatChat/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/FailPayment" element={<FailPayment/>}/>
      <Route path="/SuccessPayment" element={<SuccessPayment/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
