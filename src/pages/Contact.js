import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Contact.css'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='contact'>
       <div className='socials'>
            <a href="https://www.linkedin.com/in/gokul-karki-05973817a/" target="_blank"><LinkedInIcon className='icons'/></a>
            <a href="https://github.com/gokulkar879" target="_blank"><GitHubIcon  className='icons'/></a>
            <a href="https://twitter.com/gokulka69006598" target="_blank"><TwitterIcon  className='icons'/></a>
       </div>

    </div>

  )
}

export default Contact