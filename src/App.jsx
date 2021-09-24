
import './App.scss';
import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Works from './components/works/Works'
import Menu from './components/menu/Menu'
import Testimonials from './components/testimonials/Testimonials'
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
