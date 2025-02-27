import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>koi.<span>pix</span>()</h1>

      <ul>
        <li><a href="#">.home()</a></li>
        <li><a href="#">.aboutme()</a></li>
        <li><a href="#">.projects()</a></li>
      </ul>
    </div>
  )
}

export default Nav