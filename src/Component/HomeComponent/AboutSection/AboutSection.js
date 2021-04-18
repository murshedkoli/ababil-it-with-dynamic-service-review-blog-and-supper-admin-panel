import React from 'react';
import './AboutSection.css'

const AboutSection = () => {
    return (
        <section id="about" class="about">
            <div class="container text-secondary"  >

                <div class="section-title">
                    <h2 style={{ color: 'white' }} >About Us</h2>
                </div>

                <div class="row content">
                    <div class="col-lg-6">
                        <p>
                            Ababil Informatin Technology is the most reputed It Farm In Our Teritorry. 
                            We Garrenty that you will satisfy in our work, 
              </p>
                        <ul>
                            <li><i class="ri-check-double-line"></i> We Provide you best Quality Output as you expected.</li>
                            <li><i class="ri-check-double-line"></i> We give Support After Work for 2 Year's for free</li>
                            <li><i class="ri-check-double-line"></i> Also Give You Some Update time to time for work easily.</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0">
                        <p>
                            You Should Choose us for grow your business, after making your website we provide you free Search Engine Optimization
                            for free. your website rank in search engine easily.... 
                            so. What You waiting for? Order Now .. get a servcie.... Best Of luck.
              </p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;