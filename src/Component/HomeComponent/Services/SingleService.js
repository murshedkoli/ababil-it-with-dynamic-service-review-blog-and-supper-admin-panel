import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {

    const {imgUrl, serviceName, serviceCost, serviceId} = service;

    return (

        <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">

            <div class="box">
                <div style={{width:'100%'}}>
                    <img style={{ width: '100%', height: '200px',  }} src={imgUrl} alt="" />
                </div>
                <br/>
                <h3>{serviceName}</h3>
                <h4><sup>৳</sup> {serviceCost} </h4>
                <Link to="/registration">
                <button class="btn text-uppercase btn-block btn-outline-success p-3">Get the Service</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleService;