import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

function Bid(props) {
  const [highest, setHighest] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState({});
  const [currentPrice,setCurrentPrice]=useState(0)
  const handleNotifyClick = () => {
    socket.emit("notification", {
      message: ("New bid done!"+props.car.brand_name),
      timestamp: new Date().toLocaleString()
    });
  };
    
  const makeABid = (userId, carId, amount) => {
    const obj ={
      
        userId: userId,
        carId: carId,
        amount: amount,
      
    }
    axios
      .post(`http://localhost:3000/api/bids/placeabid`, obj)
      .then((res) =>{ setHighest(res.data.amount)
      socket.emit("bid&&price",highest)
      socket.emit("notification",obj)
      setRefresh(!refresh)})
      .catch((err) => console.log(err));
  };
  const newBidPrice=useCallback(
    (data) => {
      console.log("this is data",data)
      setHighest(data);
      setRefresh(!refresh)
    },[highest]
  )


  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/user/userbyuid/${localStorage.userInfo}`)
      .then((res) => {
        axios
          .get(`http://localhost:3000/api/bids/${props.car.id}`)
          .then((res2) => {setUser(res.data);setHighest(res2.data.amount)})
          .catch((err2) => console.log("this err:", err2));
        
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(highest);

  }, [refresh]);

  useEffect(() => {
    setCurrentPrice(parseInt(highest) + props.car.initial_price)
    socket.on("bid&&price", newBidPrice);
   


    return () => {
      socket.off("bid&&price", newBidPrice);
    };
    
  }, [socket, newBidPrice]);
  return (

    <div className="overlay">
  {/* // <!-- Canvas --> */}
{/* <canvas class="orb-canvas"></canvas> */}
{/* // <!-- Overlay --> */}
  {/* <!-- Overlay inner wrapper --> */}
  <div className="overlay__inner">
    {/* <!-- Title --> */}
    <h1 className="overlay__title">
      Hey, would you like to learn how to Bid
   
    </h1>
    {/* <!-- Description --> */}
    <p className="overlay__description">
     First of all, a bid is technically a competetion and a race at the same time.So according to those words it's as easy as it seems , you just place the amount you want in the input below as long as it's allowed. Then if someone out bids you, you have two choices. Either to out bid him by following the first step or just accept the lost. Laslty when the time is over if you're lucky enough and have the courage to compete until the end you may win the car !!.
      <strong> So let's get started ;)</strong>
    </p>
    {/* <!-- Buttons --> */}
 
    <div className="bidd">
      <h2>
        current price:{currentPrice?currentPrice:"loading"}
      </h2>
      {console.log("user;",user)}
      <h2>highest bid : {highest?highest:"loading"}</h2>
      
      <input
        type="number"
        placeholder="enter bid"
        min={parseInt(highest) + 200}
        step={props.car.min_amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          console.log(parseInt(highest) + 200);
          if (amount < parseInt(highest) + 200) {
            alert(`you can't bid less than ${parseInt(highest) + 200}`);
          } else {
            makeABid(user.id, props.car.id, amount);
            newBidPrice()
         
          }
        }}
      >
        bid
      </button>
      
    </div>
  </div>
</div>
    
  );
}

export default Bid;
