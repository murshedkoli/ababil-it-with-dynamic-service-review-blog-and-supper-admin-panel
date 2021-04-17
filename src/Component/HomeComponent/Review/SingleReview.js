import React from 'react';
import './SingleReview.css'
import pic from '../../../Images/hero-img.png'

const SingleReview = ({ review }) => {

    const { reviewDate, img,  userName,  reviewContent } = review;

    return (
        <div class="col-lg-6">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={img} class="img-fluid" alt="" /></div>
                <div class="member-info">
                    <h4>{userName}</h4>
                    <span>Review Date : {new Date(reviewDate).toDateString()} </span>
                    <p>{reviewContent}</p>
                    <div class="social">
                        <a class="twitter"><i class="fab fa-twitter"></i></a>
                        <a class="facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="instagram"><i class="fab fa-instagram"></i></a>
                        <a class="linkedin"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;