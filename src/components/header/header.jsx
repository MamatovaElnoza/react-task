import './header.css';
import React, { useState } from 'react';

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScrollToRegistration = () => {
    if (props.scrollToReg) {
      props.scrollToReg();
    }
  };

  return (
    <div className='cont'>
      <header className='navbar'>
        <div className="container">
          <h2><a href="index.html" className='logo'>Farqi Yo'q</a></h2>

          <div className="nav">
            <div className={`sidebar ${open ? 'active' : ''}`}>
              <ul className="nav justify-content-end">
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
                  <a className="nav-link" href="#Contact">Contact</a>
                </li>
                <li className="nav-item">
                  <button className='btn btn-outline-primary' onClick={handleScrollToRegistration}>Sign Up</button>
                </li>
              </ul>
            </div>

            <div className="user" onClick={() => setShowMenu(!showMenu)}>
              <i className="fa-solid fa-user"></i>
              {props.user || 'user'}
            </div>

            <div className={`sub-menu-wrap ${showMenu ? 'active' : ''}`}>
              <div className="sub-menu">
                <div className="user-info">
                  <i className="fa-solid fa-user"></i>
                  <h3>{props.user || 'user-info'}</h3>
                </div>
                <hr />
                <a href="#" className='sub-menu-link'>
                  <i className="fa-solid fa-user"></i>
                  <p>Edit Profile</p>
                  <span><i className="fa-solid fa-angle-right"></i></span>
                </a>
                <a href="#" className='sub-menu-link'>
                  <i className="fa-solid fa-gear"></i>
                  <p>Settings & Privacy</p>
                  <span><i className="fa-solid fa-angle-right"></i></span>
                </a>
                <a href="#" className='sub-menu-link'>
                  <i className="fa-solid fa-circle-question"></i>
                  <p>Help & Support</p>
                  <span><i className="fa-solid fa-angle-right"></i></span>
                </a>
                <a href="#" className='sub-menu-link'>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  <p>Logout</p>
                  <span><i className="fa-solid fa-angle-right"></i></span>
                </a>
              </div>
            </div>
          </div>

          <div className="hamburger" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
      <div className="clr"></div>
    </div>
  );
};

export default Header;