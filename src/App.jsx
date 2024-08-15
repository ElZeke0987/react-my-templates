import { useMemo, useState } from 'react'
import React from 'react';
import Nav from './comps/nav/nav';
import Home from './Apps/Home';
import About from './Apps/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let pageRoots=[
    {
      id:'', 
      title: 'Home',

    },
    {
      id: 'about',
      title: 'About Us', 
    }
  ];

  let [app, setApp] = useState(pageRoots[0].app);
  return (
    <>
      <Router>
            <Nav links={pageRoots}></Nav>
      
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
      </Router>
    </>
  )
}

export default App
