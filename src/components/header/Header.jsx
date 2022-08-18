// packages
import React from 'react'

// styling
import './Header.scss'

export const Header = () => {
  return (
    <div className='Header'>
        <div className='Header__logo'>SRR</div>
        {/* <div className='Header__navItem'>Home</div> */}
        <div className='Header__navItem'>About</div>
        <div className='Header__navItem'>Technical Exposure</div>
        <div className='Header__navItem'>Profile</div>
        <div className='Header__navItem'>Recent Work</div>
        <div className='Header__navItem'>Contact</div>
        <div className='Header__navItem'>Download CV</div>
    </div>
  )
}
