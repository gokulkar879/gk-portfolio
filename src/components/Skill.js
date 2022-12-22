import React from 'react'
import './Skill.css'


function Skill({src}) {
  console.log(src)
  return (
    <div className='skill'>
        <img src={src}></img>
    </div>
  )
}

export default Skill