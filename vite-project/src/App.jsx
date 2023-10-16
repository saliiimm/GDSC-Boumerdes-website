import './index.css'
import React from "react";
import Nav from './Components/Nav';
import Home from './Pages/Home/'
import About from './Pages/About/'
import { Route,  Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App
