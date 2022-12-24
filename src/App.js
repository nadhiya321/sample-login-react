import React from 'react';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
 
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Home />} />

          </Routes>
        </BrowserRouter>
    
    </div >
  );

}
export default App;

