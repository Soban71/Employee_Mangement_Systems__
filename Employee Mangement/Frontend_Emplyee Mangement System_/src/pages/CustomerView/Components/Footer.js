import React from 'react'
import '../AllcomponentDisplayer/style.css';


export default function Footer() {
  return (
    <div>
     <div>
      <section className="footer">
<div className="row">
 <div className="col-lg-4" data-aos="fade-left" data-aos-offset="100" data-aos-delay="200">
<h1>Subscribe our newsletter</h1>
<p>We are team of non-cynics who truly care about our work</p>
 </div>
 <div className="col-lg-8">
	<input type="text"  placeholder="Search Here..." />
	<button className='SearchButton'><i className="fa fa-search" aria-hidden="true"/></button>
 </div>
</div>

<div className="row" data-aos="fade-right" data-aos-offset="100" data-aos-delay="200">
<div className="col-lg-3 col-md-4">
<h1>Information</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut nisi nostrum laboriosam qui numquam.</p>
<div className="row">
	<div className="col-lg-3">
		<i className="fa fa-facebook-square fa-2x fb"aria-hidden="true"/>
	</div>
	
	<div className="col-lg-3">
		<i className="fa fa-twitter-square fa-2x twt"aria-hidden="true"/>
	</div>
	
<div className="col-lg-3">
	<i className="fa fa-whatsapp fa-2x whtap" aria-hidden="true"/>
</div>

<div className="col-lg-3">
	<i className="fa fa-instagram fa-2x insta" aria-hidden="true"/>
</div>
</div>
</div>
<div className="col-lg-3 col-md-4 liFooter" data-aos="fade-right" data-aos-offset="100" data-aos-delay="200">
<h1>Useful</h1>
<li>About us</li>
<li>Gallery</li>
<li>Blog post</li>
<li>Pricing plan</li>
</div>
<div className="col-lg-3 col-md-4 liFooter" data-aos="fade-right" data-aos-offset="100" data-aos-delay="200">
<h1>Details</h1>
<li>Photographer</li>
<li>Gallery</li>
<li>About</li>
<li>Pricing plan</li>
</div>
<div className="col-lg-3 col-md-4 liFooter" data-aos="fade-right" data-aos-offset="100" data-aos-delay="200">
<h1>Help and Support</h1>
<li>Privacy</li>
<li>Terms and conditions</li>
<li>Technical support</li>
<li>Customer Care</li>
</div>
</div>
</section>


    </div>
    </div>
  )
}
