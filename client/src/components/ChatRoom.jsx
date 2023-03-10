import io from "socket.io-client";
import { useEffect, useState, useCallback } from "react";
import { getAuth } from "firebase/auth";
import { AiOutlineSend } from 'react-icons/ai';
import axios from 'axios'

const socket = io.connect("http://localhost:3000");

const ChatRoom = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // Room State
  const [room, setRoom] = useState(props.id);

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
  const sendMessage = useCallback(() => {
    if (message.trim() === '') return;
    socket.emit("send_message", { message, room });
    setMessage("");
    console.log(message)
  }, [message, room]);

  // Receive Message Handler
  const handleReceiveMessage = useCallback((data) => {
    setMessages((prevMessages) => {
      return [...prevMessages, { text: data.message, sender: "other" }];
    });
  }, []);

  useEffect(() => {
    joinRoom();
    axios.post('http://localhost:3000/api/message', {
  "name": user.displayName,
  "carId": props.id,
  "content": message,
  "photo": user.photoURL
})
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error.response.data);
});
    axios.get(`http://localhost:3000/api/message/getAll/${room+""}`)
      .then((response) => {
        setMessages(response.data.map((msg) => ({ text: msg.content, sender: msg.name === user.displayName ? "me" : "other" })));
      })
      .catch((error) => {
        console.log(error);
      });

    // Socket Event Listeners
    socket.on("receive_message", handleReceiveMessage);

  
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [joinRoom, handleReceiveMessage, room, user]);

  return (
    <div className='all'>
      <div className="contai">
        <div className="message_container">

          {messages.map((message, index) => (
            <div
              className={`message ${message.sender === "me" ? "sent" : "received"}`}
              key={index}
            >
              {message.sender === "me" ? getAvatar(user.email) : getAvatar(message.sender)}
              <div className="text_message">{message.text}</div>
            </div>
          ))}

          <input
            className="text_input"
            placeholder="Message..."
            value={message}
            onChange={(event) => {
              setMessage(event.target.value)
            }}
          />
          <button className="btn" onClick={sendMessage}>
            <AiOutlineSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
