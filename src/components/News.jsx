import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

export default function News() {
     const[latest,setLatest]=useState([])
    
         useEffect(() => {
                            fetch('http://localhost:3000/api/posts') // Replace with your API
                              .then((res) => res.json())
                              .then((data) => setLatest(data))
                              .catch((err) => console.error('Error fetching posts:', err));
                          }, []);
  return (
    <> 
    
    <div  className='App-posts-pop-image'>
          {latest.length === 0 && <p>Loading...</p>}
    {latest.map((post) => (
      <div key={post._id} style={{ borderBottom: '1px solid #ccc' }}  >
        
        <Link className='App-display-link-imagessss' to={`/api/post/${post._id}`}> 
        <img
       src={post.imageUrl || '/default-image.jpg'}

          alt={post.title}
        //   style={{ width: '100px', height: 'auto', objectFit: 'cover', }}
          className='App-posts-pop-images'
          
          
        />
        
       
          <h2 className='App-latest-title'>{post.title}</h2>
           <p className='App-latest-title'>  {post.content.slice(0, 100)}...<button className='App-read-more'>Read more</button></p>
          </Link>
          
        <p className='App-latest-title'><strong>By:</strong> {post.author}</p>
      
      </div>
    ))}
      
    </div>
    </>
  )
}
