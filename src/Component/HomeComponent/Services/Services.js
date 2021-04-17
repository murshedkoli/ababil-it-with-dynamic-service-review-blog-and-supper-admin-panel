import React, { useEffect, useState } from 'react';
import './Services.css'
import SingleService from './SingleService';

const Services = () => {



    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
          .then(res => res.json())
          .then(data => {
    
            setServices(data)
    
          })
      },[] )



    return (
        <section id="pricing" class="pricing section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Our Services</h2>
                    <p> We Provide Quality Service for you, come and get now... {services.length} </p>
                </div>

                <div class="row">

                {
                    services.map(service => <SingleService service={service} /> )
                }
                    

                </div>

            </div>
        </section>
    );
};

export default Services;