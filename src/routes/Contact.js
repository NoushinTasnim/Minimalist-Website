import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <HeroImage2 header="Contact Page" txt="We'd love to hear from you! Whether you have a question, need support, or want to discuss a potential project, we're here to help. Reach out to us using the contact form below or through our contact details, and we'll get back to you as soon as possible." img ="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default Contact
