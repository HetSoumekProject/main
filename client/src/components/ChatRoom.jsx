import '../ChatRoom.css';
import io from "socket.io-client";
import { useEffect, useState, useCallback } from "react";
import { getAuth,updateProfile } from "firebase/auth";

const socket = io.connect("http://localhost:3000");

const ChatRoom=()=> {

  const auth = getAuth();
  const user = auth.currentUser;

  //Room State
  const [room, setRoom] = useState("");

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
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
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
    socket.on("receive_message", handleReceiveMessage);
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [socket, handleReceiveMessage]);

  return (
    <div className="contai">
      <div className="message_container">
        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button className="button-55" onClick={joinRoom}> Join Room</button>
        <input
          className="text_input"
          placeholder="Message..."
          value={message}
          onChange={(event) => {
            setMessage(event.target.value)
          }}
        />
        <button className="button-55" onClick={sendMessage}> Send Message</button>
        <h1> Messages:</h1>
        {messages.map((message, index) => (
          <div
            className={`message ${message.sender === "me" ? "sent" : "received"}`}
            key={index}
          >
            {message.sender === "me" ? getAvatar(user.email) : getAvatar(message.sender)}
            <div className="text_message">{message.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatRoom;
