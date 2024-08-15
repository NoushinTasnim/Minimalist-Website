import './HeroImageStyles.css';

import React from 'react';
import IntroImg from '../assets/img.png';

import {Link} from "react-router-dom";

const HeroImage = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src = {IntroImg} alt = 'Intro Image'/>
      </div>
      <div className='content'>
        <div>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className='btn-light'>Contact</Link>
        </div>
        <p>
        We specialize in crafting clean, sleek and spohisticated visualizations that bring your ideas to life in the most elegant way possible.
        </p>
      </div>
      <div className='title'>
        <h1>minimalist</h1>
      </div>
    </div>
  )
}

export default HeroImage
