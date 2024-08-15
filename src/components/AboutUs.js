import "./AboutUsStyles.css";

import React from 'react'

const AboutUs = () => {
  return (
    <div className="about">
        <h1>
            Why Choose Us?
        </h1>
        <div className='para'>
          <div className="parapara">
            <h4>Proffesionalism</h4>
            <p>
              With years of experience in the industry, our team of expert designers is dedicated to delivering high-quality, proffesional results on every project.
            </p>
          </div>
          <div className="parapara">
            <h4>Attention to Detail</h4>
            <p>
              We understand that the smallest details can make the biggest impact. That's why we can make the biggest impact. That's why we meticulously craft every aspect of our designs to ensure precision and perfection.
          </p>
            </div>
          <div className="parapara">
            <h4>Collaboration</h4>
            <p>
              Your vision is our priority. We work closely with you throughout the design process to understand your needs, preferences, and goals, ensuring that the final result exceeds your expectations.
            </p>
          </div>
        </div>
    </div>
  )
}

export default AboutUs
