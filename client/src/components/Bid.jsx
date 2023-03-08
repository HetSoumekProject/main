import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

function Bid(props) {
  const [highest, setHighest] = useState({});
  const [refresh, setRefresh] = useState(true);
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState({});
  const [currentPrice,setCurrentPrice]=useState(0)
 

  const makeABid = (userId, carId, amount) => {
    axios
      .post(`http://localhost:3000/api/bids/placeabid`, {
        userId: userId,
        carId: carId,
        amount: amount,
      })
      .then((res) => setHighest(res.data))
      .catch((err) => console.log(err));
  };
  const newBidPrice=useCallback(
    (data) => {
      console.log("this is data",data)
      setHighest(data);
      setCurrentPrice(data)
    },[highest]
  )

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/user/userbyuid/${localStorage.userInfo}`)
      .then((res) => {
        axios
          .get(`http://localhost:3000/api/bids/${props.car.id}`)
          .then((res2) => {setUser(res.data);setHighest(res2.data)})
          .catch((err2) => console.log("this err:", err2));
        
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(highest);

  }, [refresh]);

  useEffect(() => {
    setCurrentPrice(parseInt(highest.amount) + props.car.initial_price)
    socket.on("bid&&price", newBidPrice);
    console.log(newBidPrice)
    return () => {
      socket.off("bid&&price", newBidPrice);
    };
    
  }, [socket, makeABid]);
  return (
    <div>
      <h2>
        current price:{currentPrice?currentPrice:"loading"}
      </h2>
      {console.log(highest,"ksksksksksk")}
      <h2>highest bid : {highest?highest.amount:"loading"}</h2>
      <h1>Enter a bid</h1>
      <input
        type="number"
        placeholder="enter bid"
        min={parseInt(highest.amount) + 200}
        step={props.car.min_amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          console.log(parseInt(highest.amount) + 200);
          if (amount < parseInt(highest.amount) + 200) {
            alert(`you can't bid less than ${parseInt(highest.amount) + 200}`);
          } else {
            makeABid(user.id, props.car.id, amount);
            setRefresh(!refresh);
          }
        }}
      >
        bid
      </button>
    </div>
  );
}

export default Bid;
