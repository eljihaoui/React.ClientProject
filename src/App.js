import React from 'react';
import logo from './logo.svg';
import Contact from './components/Contact/Conatact';
import NavBar from './components/nabar/NavBar';
import './App.css';
import NavBar2 from './components/navbar2/NavBar2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NavBar />
        <Contact />
        <NavBar2 />
      </header>
    </div >
  );
}

export default App;
