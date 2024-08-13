import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'


const Nav = () => {
  return (
    <div className='navigation'>
        <nav className='nav'>
        <ul className='unorderdlist'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/status">Status</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/about">About</Link></li>


        </ul>
      </nav>
      
    </div>
  )
}

export default Nav