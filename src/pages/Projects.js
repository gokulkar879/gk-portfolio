import React from 'react'
import { Link } from 'react-router-dom';
import { data_projects } from '../data'
import pic from '../pic1.png'
import './Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <div className='projects-values'>
        {
          data_projects.map(project => {
            const { name, skills, imgUrl, liveSite, code} = project;
            return <article key={name} className="project">
                <img src={imgUrl}></img>
                <div className='project-link'>
                  <div className='project-info'>
                    {
                      skills.map((skill, index) => {
                           return <p key={index}>{skill}</p>
                      })
                    }
                  </div>
                  <div className='project-ll'>
                    <a href={`${liveSite}`} target="_blank">Site</a>
                    <a href={`${code}`} target="_blank">Code</a>
                  </div>

                </div>
            </article>
          })
        }
      </div>
    </div>
  )
}

export default Projects