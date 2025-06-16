import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import iphone6 from '../Images/iphone6.webp'
import Header from '../Header';

export default function Category() {
   const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

    useEffect(() => {
    fetch(`https://newsback-ylzh.onrender.com/category/${category}`)
      .then(res => {
        if (!res.ok) throw new Error('No posts found');
        return res.json();
      })
      .then(data => {
        setPosts(data);
        console.log(data)
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);
  return (


    <> 

    <section>
          <div className=" App-header">
          <h1 className=" App-header-titles-name">TripleNews
          <input className='App-header-search' type='search' placeholder=' search' />
          </h1>
         
            <div className=" App-header-titles"> 
             <ul className='list-items'>
              <l className='App-header-titles-list'><p className='App-header1'>latest</p> </l>
              <l className='App-header-titles-list'><p className='App-header1'>Politics</p></l>
              <l className='App-header-titles-list'><p className='App-header1'>Sports</p></l>
              <l className='App-header-titles-list'> <p className='App-header1'>Tech</p></l>
              <l className='App-header-titles-list'> <p className='App-header1'>Entertainment</p></l>
             </ul>
            </div>
          </div>
        </section>




        <div  className='App-display-News1'>
        
                
            <div className='App-display-News-sidebar'>
                <div className='App-display-News1'>
                <div className='App-ads-resouces-list'> Ads space
                     <div className='App-ads-resouces-list1'> Get 60% Discount on your Recharge Airtel</div>
                 </div>
                 
                </div>
        
                <div className='App-display-News2'>
                 
                 {loading && <p>Loading posts...</p>}
                            {error && <p style={{ color: 'red' }}>{error}</p>}

                            {posts.length > 0 ? (
                              posts.map(post => (
                                <div key={post._id} className="category-post">
                                  
                                  
                                  <h3>{post.title}</h3>
                                   <h3>{post.category}</h3>
                                  
                                    <img
                                      src={post.imageUrl}

                                      alt={post.title}
                                      className='App-display-News-image'
                                      
                                      
                                    />

                                  <p>{post.content}</p>
                                   

                                  <br></br>
                                  <br></br>
                              
                                

                                </div>
                              ))
                            ) : (
                              !loading && <p>No posts available in this category.</p>
                            )}
                      </div>
                <div className='App-display-News3'>
                    <div className='App-ads-resources2'>
                                     
                        <img   className='App-sidebar-Ads1' src={iphone6} alt="" />
                        <button className='App-newest-iphone1'>Check Out Newest Iphone </button>
                                         
                    </div>
                </div>
                
            </div>  
        
          
               
           
              
            </div>




 
 
        
      
   
    
 </>
  )
}
