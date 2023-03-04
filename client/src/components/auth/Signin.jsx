import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import Handlesignout from "./Handlesignout"


const Signin = ()=>{
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const submit =(e)=>{
     e.preventDefault()
     signInWithEmailAndPassword(auth,email,password)
     .then((userInfo)=>{
        console.log(userInfo);
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
            <form onSubmit={submit} >
                <h1>log in</h1>
                <input type="email" placeholder="enter email" value={email} 
                onChange={(e)=> setEmail(e.target.value) }  ></input>
                <input type="password" placeholder="enter password" value={password} 
                onChange={(e)=> setPassword(e.target.value) } ></input>
                <button type='submit' >submit</button>
                <Handlesignout />
            </form>
        </div>
    )
}

export default Signin  