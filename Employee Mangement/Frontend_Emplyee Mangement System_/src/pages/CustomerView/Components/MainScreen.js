import React from 'react';
import '../AllcomponentDisplayer/style.css';
import Image4 from '../CustomerImages/Image4.jpg';

export default function MainScreen() {
  const myStyle = {
    marginTop: '0px',
    position: 'relative',
  };

  return (
    <>
      <section id="hero" style={myStyle}>
        <div className='row'>
          <div className='col-lg-12'>
            <h1 className='MainHeaderH1'>Elevate your business with us! </h1>
            <p
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Experience operational excellence for your business with our advanced solution.
            </p>
            <button type="button" className="btn btn-danger MainPageButton">Explore Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
