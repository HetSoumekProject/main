import './App.css';
import Post from './components/Post.jsx';
import AllPosts from './components/AllPosts.jsx';
import ChatRoom from './components/ChatRoom';
import AllPending from './components/AllPending.jsx'
import WhatIs from './components/WhatIs';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <WhatIs/>
      <ChatRoom/>
    <AllPosts/>
    <Post/>
    <AllPending/>
    </div>
  );
}

export default App;
