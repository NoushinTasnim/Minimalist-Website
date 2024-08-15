import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
      <h1>Our Pricings</h1>
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive -</p>
          <Link to="/contact" className="btn">
          Purchase Now</Link>
        </div>
        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">$200</p>
          <p>- 2 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive -</p>
          <Link to="/contact" className="btn">
          Purchase Now</Link>
        </div>
        <div className="card">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="btc">$300</p>
          <p>- 1 Day -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive -</p>
          <Link to="/contact" className="btn">
          Purchase Now</Link>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
