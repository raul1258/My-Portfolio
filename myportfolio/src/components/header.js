import React from 'react'
import MobileDrawer from './Drawer'
import "./style.css"

function header() {
  return (
    <div className="navbar">
    <h1 className="heading">
      Portfolio<span style={{ color: "var(--blue)" }}>.</span>
    </h1>
    <div className="links">
      <a href="/">
        <p className="link">About</p>
      </a>
      <a href="/skills">
        <p className="link">Skills</p>
      </a>
      <a href="/projects">
        <p className="link">Projects</p>
      </a>
      <a href="/socials">
        <p className="link">Socials</p>
      </a>
    </div>
    {/* <MobileDrawer/> */}
  </div>

  )
}

export default header
