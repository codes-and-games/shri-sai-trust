import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  const location = useLocation();

  // Scroll to the section if URL has hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Shree Sai Education Trust</title>
        <meta name="description" content="GivingHands is a non-profit organization dedicated to making a positive impact in communities through sustainable initiatives, education, and compassionate action." />
      </Helmet>

      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
    </>
  );
};

export default HomePage;