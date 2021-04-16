import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = () => {
    return (

        <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">

            <div class="box">
                <div style={{width:'100%'}}>
                    <img style={{ width: '100%', height: '200px', border: '1px solid black' }} src="" alt="" />
                </div>
                <h3>Graphics Design</h3>
                <h4><sup>৳</sup>3000<span>per month</span></h4>

                <button class="btn btn-outline-success p-3"><Link to="/registration">Registartion Now</Link></button>
            </div>
        </div>
    );
};

export default SingleService;