import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PopularServices from './components/PopularServices';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import DoctorProfiles from './components/DoctorProfiles';
import FeaturedBlog from './components/FeaturedBlog';
import ClinicFooter from './components/ClinicFooter';
import ContactUsPage from '../src/Pages/ContactUsPage'; // 👈 Import your page
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ServicesSection />
              <AboutSection />
              <PopularServices />
              <BeforeAfterGallery />
              <DoctorProfiles />
              <FeaturedBlog />
            </>
          }
        />

        {/* Appointment Page */}
        <Route path="/appointment" element={<ContactUsPage/>} />
        <Route path="//about-us" element={<AboutUs/>}/>
      </Routes>

      <ClinicFooter />
    </div>
  );
}

export default App;
