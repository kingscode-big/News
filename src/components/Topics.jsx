import React from 'react';

import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Topics() {
     const[latest,setLatest]=useState([])

     useEffect(() => {
                        fetch('http://localhost:3000/api/posts') // Replace with your API
                          .then((res) => res.json())
                          .then((data) => setLatest(data))
                          .catch((err) => console.error('Error fetching posts:', err));
                      }, []);
  return (
    <div>
       {latest.length === 0 && <p>Loading...</p>}
    {latest.map((post) => (
      <div key={post._id} style={{ borderBottom: '1px solid #ccc' }}>
       
       <Link className='App-display-link-imagessss' to={`/api/post/${post._id}`}>
        <h2 className='App-latest-title'>{post.title}</h2>
        
       
       
       </Link>
          
          
        <p className='App-latest-title'><strong>By:</strong> {post.author}</p>
      
      </div>
    ))}
      
    </div>
  )
}
