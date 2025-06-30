import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  handleScrollToRegistration = () => {
    if (this.props.scrollToReg) {
      this.props.scrollToReg();
    }
  }

  render() {
    return (
      <header className="header">
        <button onClick={this.handleScrollToRegistration}>Sign Up</button>
      </header>
    );
  }
}

export default Header;
