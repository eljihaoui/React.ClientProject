import React from 'react';
import './App.css';
import NavBar2 from './components/navbar2/NavBar2';
import Conatact from './components/Contact/Conatact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Conatact tel="0675023023"/>
        <Conatact name="mohamed el jihaoui" tel="0600060600" email="eljihaoui@gmail.com" />
        <NavBar2 title="navigation bar"  />
      </header>
    </div >
  );
}

export default App;
