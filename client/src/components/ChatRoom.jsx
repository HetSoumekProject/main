import io from "socket.io-client";
import { useEffect, useState, useCallback, useReducer } from "react";
import { getAuth } from "firebase/auth";
import { AiOutlineSend } from 'react-icons/ai';
import '../ChatRoom.css'
import axios from 'axios'

import graphite from './Home/images/graph.jpg'
const socket = io.connect("http://localhost:3000");

const ChatRoom = (props) => {
  // const auth = getAuth();
  // const user = auth.currentUser;

  // Room State
  const [room, setRoom] = useState(props.id);
const[user,setUser]=useState({})
  // Messages State
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Avatar Function
  const getAvatar = (email, isCurrentUser) => {
    const firstLetter = email.charAt(0).toUpperCase();
    const avatarStyle = isCurrentUser ? "avatar currentUserAvatar" : "avatar";
    return (
      <div style={{display: "flex"}}>
        <div className={avatarStyle}>
          <span>{firstLetter}</span>
        </div>
        <div className="message_text">{message.text}</div>
      </div>
    );
  };

  // Join Room Function
  const joinRoom = useCallback(() => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  }, [room]);

  // Send Message Function
  const sendMessage = () => {

    const obj ={
      name: user.first_name,
      carId: room,
      content:message,
      photo: user.img
    
    }
    if (message.trim() === '') return;
    socket.emit("send_message",obj );
    axios.post('http://localhost:3000/api/message', obj)
    .then((response) => {

      console.log("response of post",response);
      setMessage("");
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  }

  // Receive Message Handler
  const handleReceiveMessage = useCallback((data) => {
    setMessages((prevMessages) => {
      return [...prevMessages, data];
    });
  }, []);
  
const getUser =()=>{
  const id =localStorage.getItem("userInfo")
  axios.get(`http://localhost:3000/api/user/userbyuid/${id}`)
.then((response) => {
  setUser(response.data);
 
})
.catch((error) => {
  console.log(error)
});}


  useEffect(() => {
    

    axios.get(`http://localhost:3000/api/message/getAll/${room}`)
      .then((response) => {
        getUser()
         joinRoom();
        console.log('resp of',response)
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });


      socket.on("receive_message", handleReceiveMessage);

  
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, []);


  return (
    <div className='window' style={{backgroundImage:`url(${graphite})`,backgroundPosition:"center"}}>
      <div className="contai" >

        <div className="message_container">

        {messages.map((message, index) => (
  <div
    key={index}
  >
    <div className="message_content">
      <div className="avatar">
        <img  className='avatar_img'src={user.img} />
      </div>
      <div className="message__bubble">
        <div className="message__info">
          <div className="message__author">{message.name}</div>
        </div>
        <div className="message__text">{message.content}</div>
      </div>
    </div>
  </div>
))}
          

        </div>
      </div>
<div className="chat-view__input">
<input
            className="input_chat"
            placeholder="Message..."
            // value={message}
            onChange={(event) => {
              setMessage(event.target.value)
            }}
          />
          <span className="input__emoticon"></span>    
      
          
          <button className="message_btn" onClick={sendMessage}>
            <AiOutlineSend />
          </button>
          </div>
    </div>
  );
};


export default ChatRoom;

