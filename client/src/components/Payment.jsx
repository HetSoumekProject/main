import axios from 'axios'
import React, { useState } from 'react'
// const axios =require ("axios")

const Payment=()=> {
  const[form,setForm]=useState({})
 
  const onChange =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const onsubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/payment")
    .then((res)=>{
      console.log(res)
      const {result}=res.data
      window.location.href=result.link
    })
    .catch((error)=>{console.log(error)})
    console.log(form)
  }

  return (
    <div>
      <h2>Payment page</h2>
      <form onSubmit={onsubmit}>
        <input placeholder='amount $' className='form-control' onChange={onChange}/>
        <button>paye</button>
      </form>
      </div>
  )
}

export default Payment