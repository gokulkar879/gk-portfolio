import React from 'react'
import { Link } from 'react-router-dom'
import Forms from '../components/Forms'
import './Dashboard.css'


function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='dashboard-nav'>
            <Link to="/">Home</Link>
        </div>
        <div className='form-center'>
        <Forms />
        </div>
        <div className='dashboard-title'>
        <p className='dashboard-subhead'>Last 10 uploads by you!!</p>
        <div className='underline'></div>
        </div>
        
        <section className='books'>
        <div className='books-center'>
            {
                }
        </div>
       </section>

    </div>
  )
}

export default Dashboard