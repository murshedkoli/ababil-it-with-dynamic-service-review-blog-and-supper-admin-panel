import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../../Images/hero-img.png';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div>
           <section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>Make Your Business Online With Us</h1>
      <h2>We are team of talented Designers and Developers for grow your business</h2>
      <div class="d-flex justify-content-center justify-content-lg-start">
      <Link to="/login">
      <div class="button_slide slide_right link-text">
      
        Login For Order
       
        </div>
        </Link>
        
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src={heroImg} class="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>
        </div>
    );
};

export default HeroSection;