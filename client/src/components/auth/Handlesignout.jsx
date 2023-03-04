import React from 'react'
import { signOut} from 'firebase/auth'
import { auth } from '../../firebase'

const Handlesignout= ()=>{
    const usersignout = () =>{
        signOut(auth)
        .then(()=>{
            window.localStorage.removeItem('user')
    console.log("signed out");
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
           <button onClick={()=>usersignout()}  >sign out </button>
        </div>
    )
}



export default Handlesignout