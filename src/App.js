import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Objectives from './pages/Objectives';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/objectives" element={<Objectives />} />
      </Routes>
    </>
  );
}

export default App;
