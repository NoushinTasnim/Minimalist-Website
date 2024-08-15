import { Link } from "react-router-dom";
import "./Works.css";

import React from 'react'

const Works = () => {
  return (
    <div className="works">
        <h1>Works Done By Us</h1>
        <div className="wcontainer">
            <div className="wcontent">
                <img className='wimg' src="https://raw.githubusercontent.com/NoushinTasnim/FlixPedia--Discover--Dive--Discuss/main/flix.jpg"/>
                <h4>Movie App</h4>
                <p>Flixpedia is a movie rating and reviewing app with cool user interface.</p>
                <div className="btns">
                    <Link to="https://www.youtube.com/watch?v=YMa7_mABteE" className="btn">
                    View</Link>
                    <Link to="https://github.com/NoushinTasnim/FlixPedia--Discover--Dive--Discuss" className="btn">
                    Source</Link>
                </div>
            </div>
            <div className="wcontent">
                <img className='wimg' src="https://raw.githubusercontent.com/NoushinTasnim/2D-Air-Hockey/main/Screenshot%202024-05-25%20102930.png"/>
                <h4>2D Air Hockey</h4>
                <p>Air-Hockey is a 2 player game made for graphics project using OpenGL Library.</p>
                <div className="btns">
                    <Link to="https://github.com/NoushinTasnim/2D-Air-Hockey" className="btn">
                    Source</Link>
                </div>
            </div>
            <div className="wcontent">
                <img className='wimg' src="https://raw.githubusercontent.com/NoushinTasnim/Maya-X/main/5401087.jpg"/>
                <h4>Maya-X</h4>
                <p>Maya X is an e-commerce app for sanitary products. This app also encourages about hygeine.</p>
                <div className="btns">
                    <Link to="https://drive.google.com/file/d/171UWtDshSyHEtyknWfbAR1MOBpXDNV7Y/view" className="btn">
                    View</Link>
                    <Link to="https://github.com/NoushinTasnim/Maya-X" className="btn">
                    Source</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works
