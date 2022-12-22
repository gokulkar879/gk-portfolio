import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
       <div className='socials'>
            <LinkedInIcon className='icons'/>
            <GitHubIcon  className='icons'/>
            <TwitterIcon  className='icons'/>
       </div>

    </div>

  )
}

export default Contact