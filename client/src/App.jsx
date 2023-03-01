import './App.css';
import Post from './components/Post.jsx';
import AllPosts from './components/AllPosts.jsx';
import ChatRoom from './components/ChatRoom';
import AllPending from './components/AllPending.jsx'
function App() {
  return (
    <div className="App">
      <ChatRoom/>
    <AllPosts/>
    <Post/>
    <AllPending/>
    </div>
  );
}

export default App;
