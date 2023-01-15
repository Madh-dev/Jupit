import React from 'react';
import Footer from './components/footer/Footer';
import Install from './components/Install/Install';
import Testimonial from './components/Testimonial/Testimonial';
import Services from './components/Service/Services';
import Home from './components/Home/Home';
import Nav from './components/nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Home />
     <Services />
     <Testimonial />
     <Install /> 
     <Footer />
    </div>
  );
}

export default App;
