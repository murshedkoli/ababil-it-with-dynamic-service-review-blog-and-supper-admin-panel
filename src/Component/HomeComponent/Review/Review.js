import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {


    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
          .then(res => res.json())
          .then(data => {
    
            setReviews(data)
    
          })
      },[] )



    return (
        <section id="team" class="team section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Review From Our Customar</h2>
                    <p>Here is {reviews.length} Review From our customar.  Check It.</p>
                </div>

                <div class="row">

                {
                    reviews.map(review=> <SingleReview review={review} />)
                }
                    


                </div>

            </div>
        </section>
    );
};

export default Review;