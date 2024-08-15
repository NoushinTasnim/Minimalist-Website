import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import PricingCard from '../components/PricingCard';
import Works from '../components/Works';

const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImage2 header="Projects Page" txt = "Discover a showcase of our latest projects that highlight our dedication to quality and innovation. From groundbreaking designs to impactful solutions, explore how we bring our clients' visions to life with creativity and precision." img = "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Works/>
    <PricingCard/>
    <Footer/>
    </div>
  )
}

export default Project
