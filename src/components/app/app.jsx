import React from 'react'
import Header from '../header/header'
import Registration from '../registration/registration'
import Home from '../home/home'
import Filter from '../filter/filter'
import Gallery from '../gallery/gallery'
import Contact from '../contact/contact'
import Footer from '../footer/footer'

const App = () => {
  return (
    <div>
        <Header />
        <Registration />
        <Home />
        <Filter />
        <Gallery />
        <Contact />
        <Footer />
    </div>
  )
}

export default App