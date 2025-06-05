import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
 

export default function Latest() {

    const[latest,setLatest]=useState([])
    useEffect(() => {
                fetch('http://localhost:3000/api/posts/latest1') // Replace with your API
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
        <img
          src={post.imageUrl}

          alt={post.title}
        //   style={{ width: '100px', height: 'auto', objectFit: 'cover', }}
          className='App-posts-latest-image'
          
        />
          <h3 className='App-latest-title'> {post.title}</h3>

          </Link>
          <p className='App-latest-title'>  {post.content.slice(0, 100)}...<button className='App-read-more'>Read more</button></p>
          
        <p className='App-latest-title'><strong>By:</strong> {post.author}</p>
         
      
      </div>
    ))}
  </div>
  )
}
