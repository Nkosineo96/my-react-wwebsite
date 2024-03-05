import React from 'react'
import '../Styles/Footer.css' 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <div className='footer'>
      <div className='socials'>
        <InstagramIcon />
        <FacebookIcon />
        <XIcon />
        <LinkedInIcon />
      </div>
      <div className='rights'>
        <p> &copy; 2024 Nkosi Neoh All Right Reserved.</p>
      </div>
    </div>
  )
}
