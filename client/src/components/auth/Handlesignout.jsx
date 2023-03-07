import React from 'react'
import { signOut} from 'firebase/auth'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'
const Handlesignout= ()=>{
    const usersignout = () =>{
        signOut(auth)
        .then(()=>{
            window.localStorage.removeItem('userInfo')
    console.log("signed out");
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
           <button onClick={()=>usersignout()}  > <Link to="/Signup" >  sign out </Link>  </button>
           
        </div>
    )
}



export default Handlesignout