import '../ChatRoom.css';
import io from "socket.io-client";
import { useEffect, useState, useCallback } from "react";
import { getAuth } from "firebase/auth";
import { AiOutlineSend } from 'react-icons/ai';
const socket = io.connect("http://localhost:3000");

const ChatRoom = (props) => {

  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user)

  // Room State
  const [room, setRoom] = useState(props.id); // Use the car ID from props as the room number

  // Messages States
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Avatar Function
  const getAvatar = (email, isCurrentUser) => {
    const firstLetter = email.charAt(0).toUpperCase();
    const avatarStyle = isCurrentUser ? "avatar currentUserAvatar" : "avatar";
    return (
      <div style={{ display: "flex" }}>
        <div className={avatarStyle}>
          <span>{firstLetter}</span>
        </div>
        <div className="message_text">{message.text}</div>
      </div>
    );
  };

  const sendMessage = () => {
    if (message.trim() === '') return;
    socket.emit("send_message", { message, room });
    socket.once("receive_message", (data) => {
      setMessages([...messages, { text: data.message, sender: "me" }]);
      setMessage("");
    });
  };

  const handleReceiveMessage = useCallback(
    (data) => {
      setMessages([...messages, { text: data.message, sender: "other" }]);
    },
    [messages]
  );

  useEffect(() => {
    joinRoom()
    socket.on("receive_message", handleReceiveMessage);
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
    
  }, [socket, handleReceiveMessage]);

  return (
    <div className='all'>
      <div className="contai">
        <div className="message_container">
          <div className="room_number">Room: {room}</div> {/* Display the car ID as the room number */}
          {messages.map((message, index) => (
            <div
              className={`message ${message.sender === "me" ? "sent" : "received"}`}
              key={index}
            >
              {message.sender === "me" ? getAvatar(user.email) : getAvatar(message.sender)}
              <div className="text_message">{message.text}</div>
            </div>
          ))}
          <div className='in'>
          <input
            className="text_input"
            placeholder="Message..."
            value={message}
            onChange={(event) => {
              setMessage(event.target.value)
            }}
          />
          </div>
          <button className="btn" onClick={sendMessage}>
            <AiOutlineSend />
          </button>

          
          

        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
