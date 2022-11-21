import React from 'react'
import "./styles.css"
import Drawer from './Drawer'

function header() {
  return (
    <div className='navbar'>
        <h1 className='heading'>Portfolio<span> .</span>
        </h1>
        <div className='links'>
        <a href='/'>
            <p className='link'>About</p>
        </a>
        <a href='/skills'>
            <p className='link'>Skills</p>
        </a>
        <a href='/projects'>
            <p className='link'>Projects</p>
        </a>
        <a href='/socials'>
            <p className='link'>Socials</p>
        </a>

    </div>

        <Drawer/> 
      
    </div>
  )
}

export default header
