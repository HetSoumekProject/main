import './App.css';

// import Post from './components/Post.jsx';
// import AllPosts from './components/AllPosts.jsx';
// import ChatRoom from './components/ChatRoom';
// import AllPending from './components/AllPending.jsx'
// import WhatIs from './components/WhatIs';
import NavBar from './components/NavBar';
import Dashboard from './components/AdminDash';
// import HelpPage from './components/HelpPage';
function App() {
  return (
    <div className="App">
      <NavBar/>
     <Dashboard/>
      {/* <WhatIs/> */}
       {/* <HelpPage/> */}
      {/* <ChatRoom/>
    <AllPosts/>
    <Post/>
    <AllPending/> */}
    </div>
  );
}

export default App;
