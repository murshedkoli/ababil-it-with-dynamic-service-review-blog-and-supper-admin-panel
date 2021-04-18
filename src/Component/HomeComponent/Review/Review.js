import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import loading from '../../../Images/loading.gif';


const Review = () => {



    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://ababil-it-assignment-11.herokuapp.com/reviews')
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
                   reviews.length? reviews.map(review=> <SingleReview review={review} />):<img style={{width:'100%'}} src={loading} alt=""/>
                }
                    


                </div>

            </div>
        </section>
    );
};

export default Review;