<<<<<<< HEAD
import React from 'react'
import Header from '../header/header'
import Registration from '../registration/registration'
import Home from '../home/home'
import Filter from '../filter/filter'
import Gallery from '../gallery/gallery'
import Contact from '../contact/contact'
import Footer from '../footer/footer'
import YouTubeVedio from '../vedio/Vedio'
=======
import React, { Component, createRef } from 'react';
import Header from '../header/header';
import Registration from '../registration/registration';
import Home from '../home/home';
import Filter from '../filter/filter';
import Gallery from '../gallery/gallery';
import Contact from '../contact/contact';
import Footer from '../footer/footer';
>>>>>>> 703ea98bf27e2c61713b8c813bf1a92971d87566

class App extends Component {
  constructor(props) {
    super(props);
    this.registrationRef = createRef();
  }

  scrollToRegistration = () => {
    if (this.registrationRef.current) {
      this.registrationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return (
      <div>
        <Header scrollToReg={this.scrollToRegistration} />
        <Home />
        <Registration innerRef={this.registrationRef} />
        <Filter />
        <Gallery />
        <YouTubeVedio/>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
