import axios from 'axios'
import React, { useState } from 'react'
import '../payment.css'

const Payment = () => {
  const [form, setForm] = useState({})

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: parseInt(e.target.value) })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/api/payment', form)
      .then((res) => {
        console.log(res, 'test')
        const { result } = res.data
        window.location.href = result.link
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="container">
      
      <form className="form">
        <label htmlFor="amount" className="label">
          Amount (DT):
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Enter amount"
          className="input"
          onChange={onChange}
        />
        <button type="submit" className="button" onClick={onSubmit}>
          Pay
        </button>
      </form>
    </div>
  )
}

export default Payment
