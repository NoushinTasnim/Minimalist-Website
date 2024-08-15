import "./FooterStyles.css";

import React from 'react';

import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <h4>Contact</h4>
            <div className="location">
                <FaHome size = {20} style={{color: "#fff", marginRight: "2rem"}}/>
                <p>Kabi Sufia Kamal Hall, University of Dhaka - 1000</p>
            </div>
            <div className="phone">
                <FaPhone size = {20} style={{color: "#fff", marginRight: "2rem"}}/>
                <p>+8801517110068</p>
            </div>
            <div className="email">
                <FaMailBulk size = {20} style={{color: "#fff", marginRight: "2rem"}}/>
                <p>noushintasnim.2615@gmail.com</p>
            </div>
        </div>
        <div className="right">
            <h4>
                About the company
            </h4>
            <p>
                This is Noushin Tasnim, the CEO of the company. I love doing projects with beautiful frontends. Thank You!
            </p>
            <div className="social">
                <FaFacebook size = {25} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaLinkedin size = {25} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaGithub size = {25} style={{color: "#fff", marginRight: "2rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
