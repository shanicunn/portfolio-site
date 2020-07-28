import React from 'react';

import './App.css';
import {Header} from './components/Header';
import {Nav} from './components/Nav';
import { AboutMe } from './components/AboutMe';
import { Portfolio } from './components/Portfolio';
import {Services} from './components/Services';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Nav />
    <div className="about-services">
      <AboutMe />
      <Services /> 
    </div>
      <Portfolio />
      <Footer />     
    </div>
  );
}

export default App;
