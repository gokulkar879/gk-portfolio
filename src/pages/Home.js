import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home__container'>
        <div className='home__left'>
            <div className='home__hi'>Hi,</div>
            <div className='home__name'>I am Gokul Karki.</div>
            <div className='home__intro'>I am currently a final year student</div>
            <div className='home__intro'> at Jadavpur University.</div>            
            <div className='home__intro'> Interested in Data Structures and</div>            
            <div className='home__intro'> Algorithms and</div>            
            <div className='home__intro'> Blockchain</div>            
        </div>
        <div className='home__right'>
            <img src='https://pbs.twimg.com/profile_images/1603014047334830081/xtBurVFy_400x400.jpg'></img>
        </div>
    </div>
  )
}

export default Home