import React from 'react'
import { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPosts() {
    const[posts,setPosts]= useState([])
    
        useEffect(() => {
            fetch('https://newsback-ylzh.onrender.com/api/posts/latest') // Replace with your API
              .then((res) => res.json())
              .then((data) => setPosts(data))
              .catch((err) => console.error('Error fetching posts:', err));
          }, []);
  return (
    <div className="blog-feed" style={{ padding: '2rem' }}>
   
    {posts.length === 0 && <p>Loading...</p>}
    {posts.map((post) => (
      <div key={post._id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
       
       <Link className='App-display-link-imagessss' to={`/api/post/${post._id}`}> 
        <img
          src={post.imageUrl}

          alt={post.title}
        //   style={{ width: '100px', height: 'auto', objectFit: 'cover', }}
          className='App-posts-displaty-image'
          
        />
          <h3 className='App-post-title'>{post.title}</h3>
           
        </Link>  
        <p className='App-post-title'><strong>By:</strong> {post.author}</p>
      
      </div>
    ))}
  </div>
  )
}
