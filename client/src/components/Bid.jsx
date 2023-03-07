import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Bid(props) {
const [highest,setHighest]=useState({})
const [refresh,setRefresh]=useState(true)
const [amount,setAmount]=useState(0)
const [user,setUser]=useState({})

    const getHighest=(carId)=>{
        axios.get(`http://localhost:3000/api/bid/${carId}`).then(res=>setHighest(res.data)).catch(err=>console.log(err))
    }
    const makeABid=(userId,carId,amount)=>{
        axios.post(`http://localhost:3000/api/bids/placeabid`,{userId:userId,carId:carId,amount:amount}).then(res=>setHighest(res.data)).catch(err=>console.log(err))
    }
    useEffect(()=>{
        getHighest(props.carId)
        console.log(highest)
    },[])
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/user/userbyuid/${localStorage.userInfo}`)
        .then((res)=>{
            setUser(res.data);
            console.log(user,props.car)
        }).catch((err)=>{
            console.log(err);
        })
      },[])
  return (
    <div>
        <h2>{highest.amount}</h2>
        <h1>Enter a bid</h1>
        <input type="number" placeholder="enter bid" min="200" step="200" onChange={(e)=>{
            setAmount(e.target.value)
        }}/>
        <button type='button' onClick={()=>{
            if(amount<highest.amount+200){
                alert("you can't bid less than the last bid")
            }
            else{
                makeABid(user.id,props.car.id,amount)
            setRefresh(!refresh)
            }
            
        }}>bid</button>
    </div>
  )
}

export default Bid