import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
    </div>
  );
};

export default App;
