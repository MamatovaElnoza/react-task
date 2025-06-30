import React, { Component, createRef } from 'react';
import Header from '../header/header';
import Registration from '../registration/registration';
import Home from '../home/home';
import Filter from '../filter/filter';
import Gallery from '../gallery/gallery';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

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
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
