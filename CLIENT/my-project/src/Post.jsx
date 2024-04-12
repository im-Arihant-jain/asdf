// src/components/Posts.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { PostMaking } from './PostMaking';
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
    <div className='flex px-auto'>
      <div className='  h-full ml-0 px-0'>
    <Sidebar />
    </div>
    <div className="sm:ml-48 ml-24 flex-grow overflow-y-auto ">
      <h1>Posts</h1>
      <ul className="sm:grid sm:grid-cols-3 sm:gap-4 block">
        {posts.map(post => (
          <li key={post.id} className="p-4 rounded-md">
            <PostMaking id={post.id} heading={post.heading} mbody={post.mbody} />
          </li>
        ))}
      </ul>
    </div>
  </div>
  
  );
};

export default Post;
