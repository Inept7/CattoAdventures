import React from 'react';
import { Route, BrowserRouter, Routes, Router } from 'react-router-dom';
import './Landing/NavBar';
import MainPage from './Landing/mainpage';
import AboutAdventures from './Nav Components/About';
import Services from './Nav Components/Services';
import Contact from './Nav Components/ContactUs';
import Body from './Landing/Body';
import SocialMedia from './Nav Components/ContactUs';
import NavBar from './Landing/NavBar';

// const { resolve } = require('path');

// resolve.fallback: {"assert": require.resolve("assert/")}

const BaseRouter: React.FC = () => {
  return (
    
    <BrowserRouter>
    <NavBar/>
      <div style={{ backgroundColor: 'white', padding: 0, overflow: 'hidden' }}>
        <Routes>
        <Route path="/" element={<MainPage />} />
          <Route path="/AboutUs" element={<AboutAdventures />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/SocialMedia" element={<SocialMedia />}/>
          <Route path="/Services" element={<Services />}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default BaseRouter;