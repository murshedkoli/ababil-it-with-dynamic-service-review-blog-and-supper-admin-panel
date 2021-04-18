import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({ service }) => {

    const { imgUrl, serviceName, serviceCost, _id } = service;

    return (

        <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">

            <div className="box">
                <div className="img-container" >
                    <img src={imgUrl} alt="Avatar" class="image" />
                    <div class="middle">
                        <div class="text">{serviceName}</div>
                    </div>
                </div>
                <br />
                <h3>{serviceName}</h3>
                <h4><sup>৳</sup> {serviceCost} </h4>
                <Link to={`/orderform/${_id}`}>
                    <button class="btn text-uppercase btn-block btn-outline-success p-3">Get the Service</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleService;