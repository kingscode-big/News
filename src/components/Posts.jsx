import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import iphone6 from '../Images/iphone6.webp'
import { Link } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

 

export default function Posts() {

    const{id} = useParams();

    const [post, setPost] = useState(null);

    const[search ,setSearch]=useState('' )
    const[result,setResult]=useState('')

    
    const shareUrl = 'https://newslight.netlify.app';
    const title = 'Check out this news!';
        
    const handleSearch = (e)=>{
        
         const input =(e.target.value)
           setSearch(input)
   
         e.preventDefault()
         if (input!=='') {
           fetch(`https://newsback-ylzh.onrender.com/search/${input}`, {
             method: 'GET',
             headers: {
               'Content-Type': 'application/json'
             }
           })
             .then(res => res.json())
             .then(data => {
               setResult(data);
                
            

               
             })
             .catch(err => {
               console.error('Search error:', err);
             });
         }
         else
         {
           setResult([]);
         }
           
         
        }
   


   useEffect(() => {
    fetch(`https://newsback-ylzh.onrender.com/api/post/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error('Fetch single post error:', err));
  }, [id]);

  if (!post) return <p>Loading...</p>;
  return (
    <> 

     <section>
          <div className=" App-header">
          <h1 className=" App-header-titles-name">TripleNews
          <input className='App-header-search' type='search' placeholder=' search' onChange={handleSearch} value={result} />
          </h1>
         
            <div className=" App-header-titles"> 
             <ul className='list-items'>
               <l className='App-header-titles-list'><p className='App-header1'><Link className='App-header1' to={'/category/latest'} >Latest</Link></p> </l>
                         <l className='App-header-titles-list'><p className='App-header1'><Link className='App-header1' to={'/category/politics'}>politics</Link></p></l>
                         <l className='App-header-titles-list'><p className='App-header1'><Link className='App-header1' to={'/category/sports'}>Sports</Link></p></l>
                         <l className='App-header-titles-list'> <p className='App-header1'><Link className='App-header1'  to={'/category/Tech'}>Tech</Link></p></l>
                         <l className='App-header-titles-list'> <p className='App-header1'><Link className='App-header1'  to={'/category/Entertainment'}>Entertainment</Link></p></l>
             </ul>
            </div>
          </div>
        </section>


         

        
    
        
    <div  className='App-display-News'>

        
    <div className='App-display-News-sidebar'>
        <div className='App-display-News1'>
        <div className='App-ads-resouces-list'> Ads space
             <div className='App-ads-resouces-list1'> Get 60% Discount on your Recharge Airtel</div>
         </div>
        <div className='App-ads-resouces-list'> Ads space
             <div className='App-ads-resouces-list1'> Get 60% Discount on your Recharge Airtel</div>
         </div>
        <div className='App-ads-resouces-list'> Ads space
             <div className='App-ads-resouces-list1'> Get 60% Discount on your Recharge Airtel</div>
         </div>
        <div className='App-ads-resouces-list'> Ads space
             <div className='App-ads-resouces-list1'> Get 60% Discount on your Recharge Airtel</div>
         </div>
        </div>

        <div className='App-display-News2'>
                <div style={{ padding: '2rem' , borderBottom: '1px solid #ccc'}}>
            <h2>{post.title}</h2>
        
            <img
                src={post.imageUrl}

                alt={post.title}
                 className='App-display-News-image'
            />
            <p>{post.content}</p>
            
            <p><strong>By:</strong> {post.author}</p>
     </div>
    
        </div>
        <div className='App-display-News3'>
            <div className='App-ads-resources2'>
                             
                <img   className='App-sidebar-Ads1' src={iphone6} alt="" />
                <button className='App-newest-iphone1'>Check Out Newest Iphone </button>

                
                                 
            </div>


             {result.length > 0 && (
        <div className="App-display-search">
          {result.map((item) => (
            <Link  className='App-display-link-imagessss' key={item._id} to={`/api/post/${item._id}`}>
              <p className='App-search-item-list'><li>{item.title}</li> </p>
            </Link>
          ))}
        </div>
      )} 
   
        <div className='App-stay-connected'><h1 className='App-words-connected'>Stay Connected</h1> 
                        <div className='App-connection'>
                            <ul className='App-connection-ul' >
                                <li className='App-text-deco'>  
                                   <FacebookShareButton url={shareUrl} quote={title}>
                                       <FacebookIcon size={32} round />
                                    </FacebookShareButton></li>
                                <li className='App-text-deco' >
                                   <WhatsappShareButton url={shareUrl} title={title}>
                                      <WhatsappIcon size={32} round />
                                  </WhatsappShareButton>
                                </li>
                                <li className='App-text-deco'>
                                  <LinkedinShareButton url={shareUrl} title={title}>
                                            <LinkedinIcon size={32} round />
                                    </LinkedinShareButton>
                                </li>
                                <li className='App-text-deco'>
                                  <TwitterShareButton url={shareUrl} title={title}>
                                     <TwitterIcon size={32} round />
                                  </TwitterShareButton>
                                </li>
                            </ul>
                             
                        </div>
                        </div>
        </div>

 

        
        
    </div>  

  
        
      
    </div>

    
    </>
  )
}
