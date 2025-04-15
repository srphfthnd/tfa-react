import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/header/navigation-bar/navigation-bar';
import HomePage from './components/body/home/homepage';
import OurAdvantagePage from './components/body/ouradvantage/ouradvantage';
import ServicesPage from './components/body/services/services';
import AboutUsPage from './components/body/aboutus/aboutus';
import FaqPage from './components/body/faq/faqpage';
import ReviewUsPage from './components/body/reviewus/reviewus';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path='*' element={<HomePage/>} />
          <Route path='/our-advantage' element={<OurAdvantagePage/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/about-us' element={<AboutUsPage/>} />
          <Route path='/faq' element={<FaqPage/>} />
          <Route path='/contact-us' element={<ReviewUsPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
