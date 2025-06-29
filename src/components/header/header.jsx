import './header.css'
import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='cont'>
      <header className='navbar '>
        <div className="container">
          <h2><a href="index.html" className='logo'>Whatever</a></h2>
          <ul className="nav justify-content-end">
            <div className={`sidebar ${open ? 'active' : ''}`}>
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#filter">Filter</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href='#Contact'>Contact</a>
              </li>
            </div>
              <li className="nav-item">
                <a className="nav-link " href="#login">Log in</a>
              </li>
          </ul>
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars "></i>
          </div>
        </div>
      </header>
      <div className="clr"></div>
    </div>
  )
}

export default Header