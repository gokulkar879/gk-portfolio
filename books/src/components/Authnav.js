import React from 'react'
import { Link } from 'react-router-dom'

function Authnav() {
  return (
    <div className='authNav'>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/signin">Signin</Link>
    </div>
  )
}

export default Authnav