import React, { useEffect, useState } from 'react';
import './Services.css'
import SingleService from './SingleService';
import loading from '../../../Images/loading.gif';

const Services = () => {



    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://ababil-it-assignment-11.herokuapp.com/services')
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
                    <p> We Provide Quality Service for you, come and get now...  </p>
                </div>

                <div class="row">

                {
                   services.length?  services.map(service => <SingleService service={service} /> ): <img style={{width:'100%'}} src={loading} alt=""/>
                }
                    

                </div>

            </div>
        </section>
    );
};

export default Services;