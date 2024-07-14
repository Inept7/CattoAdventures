import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from './Landing/mainpage';
import AboutAdventures from './Nav Components/About';
import Services from './Nav Components/Services';
import Contact from './Nav Components/ContactUs';
import Body from './Landing/Body';
import SocialMedia from './Nav Components/ContactUs';

// const { resolve } = require('path');

// resolve.fallback: {"assert": require.resolve("assert/")}

const BaseRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#252421', padding: 0, overflow: 'hidden' }}>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/AboutUs" element={<AboutAdventures/>} />
          <Route path="/Body" element={<Body/>} />
          <Route path="/ContactUs" element={<Contact/>} />
          <Route path="/SocialMedia" element={<SocialMedia/>}/>
          <Route path="/Services" element={<Services/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default BaseRouter;