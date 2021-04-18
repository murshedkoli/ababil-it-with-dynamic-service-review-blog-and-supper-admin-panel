import React from 'react';
import './SinglePost.css'

const SinglePost = ({post}) => {
    const {imgUrl, postContent, postDate, postTitle} = post;
    return (
        <div class="col-lg-4 mt-2">
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={imgUrl} alt="Post Image"/>
                <div class="card-body">
                    <h5 class="card-title"> {postTitle}</h5>
                    <p class="card-text">{postContent}</p>
                    <p>Publish Date: {new Date(postDate).toDateString()} </p>
                    <a class="btn btn-primary">Read Post</a>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;