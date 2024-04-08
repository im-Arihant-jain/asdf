// src/components/Posts.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/postre')
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h2>{post.heading}</h2>
            <p>{post.mbody}</p>
            <br />
            <br />
          </li>
                
        ))}
      </ul>
    </div>
  );
};

export default Post;
