import React from 'react';
import { useEffect, useState } from 'react';

const SinglePost = () => {

    const userInLoggedIn = JSON.parse(sessionStorage.getItem('user'));


    const [blogposts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch("https://ababil-it-assignment-11.herokuapp.com/userpost?email=" + userInLoggedIn.email)
            .then(res => res.json())
            .then(data => {

                setBlogPosts(data)

            })
    }, [userInLoggedIn.email])



    return (
        <div class="card mb-2 mt-5">
            <h2 className="text-center">Your Previous Post</h2>
            <div class="card-body">
                {
                    blogposts.length?<table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Thubnail</th>
                            <th scope="col">Title</th>
                            <th scope="col">Publish Date</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogposts.map((post, i) => <tr>
                                <th scope="row">{i + 1}</th>
                                <td> <img style={{ width: '100px' }} src={post.imgUrl} alt="" /> </td>
                                <td>{post.postTitle}</td>
                                <td>{new Date(post.postDate).toDateString()}</td>
                               

                            </tr>)
                        }

                    </tbody>
                </table>:
                <h5 style={{textAlign:'center', color:'black'}}>You have no post yet</h5>
                }
            </div>
        </div>
    );
};

export default SinglePost;