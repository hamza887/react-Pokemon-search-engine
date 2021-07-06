import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Pokedex from './components/Pokedex/Pokedex';

function App() {
 
  return (
    <div className="App">
      <h1>hello</h1>
      <Navbar/>
      <Pokedex/>
    </div>
  );
}

export default App;
