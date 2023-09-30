import React from 'react'
import '../AllcomponentDisplayer/style.css';


export default function Location() {
  return (
    <div className='Location'>
    <h2>Location</h2>
    <p>
    Our company is strategically located in the heart of downtown New York City, 
    providing easy access to major business hubs and transportation networks. 
    </p>

        <div className="map-section">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.539924883678!2d73.04122019476311!3d33.59531429696266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94834d87f5a3%3A0x506e17bedd22f2e7!2sSaddar%2C%20Rawalpindi%2C%20Punjab%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696014584124!5m2!1sen!2s" 
  width="100%"
  height="400"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
  title="Berlin, Germany Map"
/>

      </div>
    </div>
  )
}
