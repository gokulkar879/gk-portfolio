import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'


function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSignin = e => {
    e.preventDefault()
  }

  return (
    <div className='signin'>
      <div className='signin-nav'>
      <Link to="/">Home</Link>
      </div>
      <div className='signin-center'>
       
        <form className='form'>
        <p className='form-header'>Signin/Login</p>
        <label htmlFor='email' className='form-label'>Email</label>
        <input
        type="email"
        className='book-inf'
        name="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
        required
        ></input>

        <label htmlFor='password' className='form-label'>Password</label>
        <input 
        type="password" 
        className='book-inf'
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        ></input>
        
        <button className='submit-btn' onClick={handleSignin}>Signin</button>
        </form>   
      </div>
    </div>
  )
}

export default Signin