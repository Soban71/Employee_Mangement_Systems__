import React from 'react';
import '../AllcomponentDisplayer/style.css';
import image1 from '../CustomerImages/Image1.jpg';
import image2 from '../CustomerImages/Health.jpg';
import image3 from '../CustomerImages/Finicial.png';
import image4 from '../CustomerImages/EaP.png';


export default function Features() {
  return (
    <div className='Feature-main'>
      <h2>Features Product</h2>
      <p>Empowering our team to innovate, collaborate, and thrive together, because we believe that collective excellence fuels individual success</p>

      <div className="features-container">
        <div className="cards">
          <div className="card">
            <img src={image2} alt="Feature 1" />
            <h3>Healthcare And Wellness</h3>
            <ul>
              <li>Offer comprehensive medical coverage for employees and their dependents.</li>
              <li>Describe health and wellness programs, including gym memberships or wellness challenges.</li>
              <li>Include vision care benefits.</li>
            </ul>
          </div>
          <div className="card">
            <img src={image3} alt="Feature 2" />
            <h3>Financial Benefits</h3>
            <ul>
              <li>Describe various bonus structures or incentive programs.</li>
              <li>Offer details on stock options or equity grants.</li>
              <li>Explain retirement savings plans and contributions.</li>
            </ul>
          </div>
          <div className="card">
            <img src={image4} alt="Feature 3" />
            <h3>Employee Assistance Programs (EAP)</h3>
            <ul>
              <li>Offer counseling services for personal or work-related issues.</li>
              <li>Provide financial planning and counseling services.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
