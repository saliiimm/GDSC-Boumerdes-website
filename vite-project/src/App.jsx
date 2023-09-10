import './index.css'
import React from "react";
import Home from './Pages/Home'
import About from './Pages/About'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/"
          element={<Home/>} />
        <Route path="/About"
          element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
