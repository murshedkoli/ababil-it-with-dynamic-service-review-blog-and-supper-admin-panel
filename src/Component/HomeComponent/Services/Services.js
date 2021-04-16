import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
import SingleService from './SingleService';

const Services = () => {
    return (
        <section id="pricing" class="pricing section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Courses</h2>
                    <p> Here is the Courses we Provide, You can come here to get Quality Training.</p>
                </div>

                <div class="row">

                    <SingleService />

                </div>

            </div>
        </section>
    );
};

export default Services;