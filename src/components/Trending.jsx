import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
export default function Trending() {
    const[latest,setLatest]=useState([])
        useEffect(() => {
                    fetch('https://newsback-ylzh.onrender.com/api/posts/trending') // Replace with your API
                      .then((res) => res.json())
                      .then((data) => setLatest(data))
                      .catch((err) => console.error('Error fetching posts:', err));
                  }, []);
  return (
    <div  >
        
    {latest.length === 0 && <p>Loading...</p>}
    {latest.map((post) => (
      <div key={post._id} style={{ borderBottom: '1px solid #ccc' }}  >
       <div  className='App-post-trending-header-div'> 
       <Link className='App-display-link-imagessss' to={`/api/post/${post._id}`}> 
        <img
          src={post.imageUrl}

          alt={post.title}
        //   style={{ width: '100px', height: 'auto', objectFit: 'cover', }}
          className='App-posts-trend-image'
          
          
        />
          <p className='App-trending-title'>{post.title}</p>
          <br></br>
          
            <p className='App-latest-title'>  {post.content.slice(0, 100)}...<button className='App-read-more'>Read more</button></p>
          </Link>
           
        </div>
      </div>
      
    ))}
      
    </div>
  )
}
