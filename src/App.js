import logo from './logo.svg';
import './App.css';
import Fighters from './components/Fighters';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Picks from './components/Picks';
import Fights from './components/Fights';
import About from './components/About'
import { HashRouter, Route, Switch, Link, Routes } from 'react-router-dom'
// import {BrowserRouter as Router, Routes, Route, link} from 'react-router-dom';

import React from 'react';
 
export default function App() {
    return (
  <div className='App'>
  <Navbar />
 
  <HashRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/fighters' element={<Fighters />} />
    <Route path='/fights' element={<Fights />} />
    <Route path='/picks' element={<Picks />} />
    <Route path='/about' element={<About />} />
    </Routes>
    </HashRouter>
  </div>
    )
}



