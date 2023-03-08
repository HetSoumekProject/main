import '../ChatRoom.css';
import io from "socket.io-client";
import { useEffect, useState, useCallback } from "react";

const socket = io.connect("http://localhost:3000");

const ChatRoom=(props)=> {
  //Room State
  const [room, setRoom] = useState(props.car.id);
  const [currentBid,setCurrentBid]=useState(props.currentHighestBid.amount)
  // Messages States
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room })
    
  };

  const handleReceiveMessage = useCallback(
    (data) => {
      console.log(data)
      setMessages((messages) => [...messages, data.message]);
    },
    [setMessages]
  );

  useEffect(() => {
    joinRoom()
    socket.on("receive_message", handleReceiveMessage);
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
    
  }, [socket, handleReceiveMessage]);

  return (
    <div className='contai'>
    <div className="message_container">

      <input className="text_input" 
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value)
         
        }}
      />
      <button className='button-55' onClick={sendMessage}> Send Message</button>
      <h1>Current Bid :{currentBid}</h1>
      <h1> Messages:</h1>
      {messages.map((message, index) => (
        <p className='message' key={index}>{message}</p>
      ))}
    </div>
    </div>
  );
}

export default ChatRoom;
