import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';
import loading from '../../../Images/loading.gif';

const BlogPosts = () => {



    const [blogposts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogposts')
          .then(res => res.json())
          .then(data => {
    
            setBlogPosts(data)
    
          })
      },[] )
    



    return (
        <section id="team" class="team ">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2 style={{color:'white'}}>Blog Posts</h2>
                <p className="text-secondary">Read Our {blogposts.length} blog post that write by our customars..</p>
            </div>

            <div class="row">

                {
                   blogposts.length? blogposts.map(post=> <SinglePost post={post}/>): <img style={{width:'100%'}} src={loading} alt=""/>
                }

                


            </div>

        </div>
    </section>
    );
};

export default BlogPosts;