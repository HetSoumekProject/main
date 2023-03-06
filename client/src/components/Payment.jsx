import axios from 'axios'
import React, { useState } from 'react'
import css from '../payment.css'
const Payment=()=> {
  const[form,setForm]=useState({})
 
  const onChange =(e)=>{
    setForm({...form,[e.target.name]:parseInt(e.target.value)})
  }

  const onsubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/payment",form)
    .then((res)=>{
      console.log(res,"test")
      const {result}=res.data
      window.location.href=result.link
    })
    .catch((error)=>{console.log(error)})
  }

  return (
    <div>
      <h2>Payment page</h2>
      <form >
        <input name="amount" placeholder='amount dt' className='form-control' onChange={onChange}/>
        <button onClick={onsubmit} type='submit'>paye</button>
      </form>
      </div>
  )
}

export default Payment