import React from 'react'
import { logos } from '../assets'
import Skill from '../components/Skill'
import './About.css'

function About() {
  return (

        <div className='skills'>
            <div className='skills__values'>
                {
                    logos.map((logo, id) => {
                        return <Skill key={id} src={logo} />
                    })
                }
            </div>
        </div>

  )
}

export default About