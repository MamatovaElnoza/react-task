import React, { Component, createRef } from 'react';
import Header from '../header/header'
import Registration from '../registration/registration'
import Home from '../home/home'
import Filter from '../filter/filter'
import Gallery from '../gallery/gallery'
import Contact from '../contact/contact'
import Footer from '../footer/footer'
import YouTubeVedio from '../vedio/Vedio'


class App extends Component {
  constructor(props) {
    super(props);
    this.registrationRef = createRef();
    this.state = {
      user: ''
    };
  }

  scrollToRegistration = () => {
    if (this.registrationRef.current) {
      this.registrationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleUserUpdate = (username) => {
    this.setState({ user: username });
  }

  render() {
    return (
      <div>
        <Header scrollToReg={this.scrollToRegistration} user={this.state.user} />
        <Home />
        <Registration innerRef={this.registrationRef} onRegister={this.handleUserUpdate} />
        <Filter />
        <Gallery />
        <YouTubeVedio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
