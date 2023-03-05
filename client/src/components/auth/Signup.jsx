import { createUserWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import axios from 'axios'
import Signinwithgoogle from "./Signingoogle"
import './auth.css'

const Signup = ()=>{
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [firstname,setFirstname]= useState("")
    const [lastname,setLastname]= useState("")
    const [phonenumber,setPhonenumber]= useState("")
    const submitup =(e)=>{
     e.preventDefault()
     createUserWithEmailAndPassword(auth,email,password)
     .then((userInfo)=>{
        const user = userInfo.user;
                   alert("account created");
               console.log(user)
               console.log(userInfo);
               return user
     })
     .then((user)=>{
        console.log(user.uid,'uid');
        axios.post('http://localhost:3000/api/user/AddUser',{
            email:user.email,
            password:password,
            first_name:firstname,
            last_name:lastname,
            phone_number:phonenumber,
            firebase_id:user.uid
        })
     })
     .then((user)=>{
        localStorage.setItem('curentuser','user.uid');
     })
     
      

     .catch((error)=>{
        console.log(error);
     })
    }
    return (
        <div>
            <form onSubmit={submitup} >
                <h1>Sign up</h1>
                <br/> <input type="text" placeholder="enter first name" value={firstname} 
                onChange={(e)=> setFirstname(e.target.value) }  ></input>
              <br/>  <input type="text" placeholder="enter last name" value={lastname} 
                onChange={(e)=> setLastname(e.target.value) }  ></input>
             <br/>   <input type="email" placeholder="enter email" value={email} 
                onChange={(e)=> setEmail(e.target.value) }  ></input>
              <br/>  <input type="password" placeholder="enter password" value={password} 
                onChange={(e)=> setPassword(e.target.value) } ></input>
              <br/>  <input type="number" placeholder="phone number" value={phonenumber} 
                onChange={(e)=> setPhonenumber(e.target.value) } ></input>
              <br/>  <button  type='submit' >submit</button>
                <Signinwithgoogle />
                
            </form>
        </div>
    )
}

export default Signup 