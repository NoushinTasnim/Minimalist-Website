import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import AboutUs from '../components/AboutUs';

const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImage2 header ="About Page" txt="Learn more about our journey, our values, and the talented team behind our success. We are passionate about delivering exceptional results and are committed to making a positive impact through our work. Find out why we are the right choice for your next project." img = "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <AboutUs/>
    <Footer/>
    </div>
  )
}

export default About
