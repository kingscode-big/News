import React, { useState } from 'react'
import BlogForm from './BlogForm'
import BlogPosts from './components/BlogPosts'
import Latest from './components/Latest'
import Latest2 from './components/Latest2'
import Trending from './components/Trending'
import Topics from './components/Topics'
import iphone7 from '../src/Images/iphone7.webp'
import iphone6 from '../src/Images/iphone6.webp'
import image from  '../src/Images/image.png'
import News from './components/News'

import { Link } from 'react-router-dom'
import Posts from './components/Posts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHouse,faTv,faSackDollar,
faArrowUpFromBracket,faUsersBetweenLines,faThumbsUp,
faBolt,faXmark,faLandmark,faMoneyBillTransfer,
faHeadphones, faUser,faBars,faSquarePhoneFlip,      
faBookOpen,faComment,faChartSimple,faEnvelope,
faStar,faImage,faBell,} 
from '@fortawesome/free-solid-svg-icons' ;
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


 

export default function Header() {

    const[search ,setSearch]=useState( )
    const[result,setResult]=useState('')
    const[menu ,setMenu]= useState(false)

    const shareUrl = 'https://newslight.netlify.app';
    const title = 'Check out this news!';

    const handleMenu =()=>{
      setMenu(true)
    }
    const handleOut =()=>{
      setMenu(false)
    }
     
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
  return (
            
    
    <>
    <section>
      <div className=" App-header">
      <h1 className=" App-header-titles-name"> <i>Triple_update</i>
         
                <div className='App-menu-bar' onClick={handleMenu}   ><FontAwesomeIcon icon={faBars} /></div>
      </h1>
       <input className='App-header-search' type='search' placeholder=' search'  onChange={handleSearch} />
       
        <div className=" App-header-titles"> 
         <ul className='list-items'>
          <l className='App-header-titles-list'><p className='App-header1'><Link className='App-header1' to={'/category/latest'} >Latest</Link></p> </l>
          <l className='App-header-titles-list'><p className='App-header1'><Link className='App-header1' to={'/category/politics'}>politics</Link></p></l>
          <l className='App-header-titles-list'><p className='App-header1'><Link className='App-header1' to={'/category/sports'}>Sports</Link></p></l>
          <l className='App-header-titles-list'> <p className='App-header1'><Link className='App-header1'  to={'/category/Tech'}>Tech</Link></p></l>
          <l className='App-header-titles-list'> <p className='App-header1'><Link className='App-header1'  to={'/category/Entertainment'}>Entertainment</Link></p></l>
         </ul>
        </div>
        <div>
          <p className='App-header-header'><i></i> Welcome  @ Triple_update</p>
          <p className='App-header-header1'><i></i>  We  share news info happening around the world  , Gossip and junkies...
          <img className='App-smiling-emoji' src={image}  /><img className='App-smiling-emoji' src={image}  /></p>

        </div>

      
      
      </div>
      
    </section>
      {menu && <div className='App-list-overflow'> 
                <ul  className='App-list-hidden-overflow'>
                     <div className='App-dissapear-menu' onClick={handleOut}> <FontAwesomeIcon icon={faXmark} /></div>
                    <li className='App-profile-overflow'><Link to={'/category/latest'} >Latest</Link></li>
                    <li className='App-profile-overflow'><Link to={'/category/politics'}>politics</Link></li>
                    <li className='App-profile-overflow'><Link  to={'/category/sports'}>Sports</Link></li>
                    <li className='App-profile-overflow'><Link   to={'/category/Tech'}>Tech</Link></li>
                    <li className='App-profile-overflow'> <Link   to={'/category/Entertainment'}>Entertainment</Link></li>
              </ul>
            </div> }

    <section>  
        <div className="App-hero-container">

            <div className='App-hero-items0'>
                <div className='App-ads-container'>
                <img   className='App-sidebar-Ads' src={iphone7} alt="" />
                <img   className='App-sidebar-Ads' src={iphone6} alt="" />
                <button className='App-newest-iphone'>Check Out Newest Iphone </button>
                </div> 
              
                  
            </div>

             

         <div className="App-hero-items1">
         <div className="App-hero-side-side">
         
         <BlogPosts/>
         </div>
             <div className='App-bottom-bottom-container'>
                
                 
                  <br></br>
                
                <div ><Latest2 /></div>
           </div>
        </div>
        <div className='App-ads-resouces-list'> Ads space
           <div className='App-ads-resouces-list1'> Get 60% Discount on your Recharge Airtel</div>
            </div>
          
        
        
         <div className="App-hero-items2">
            <p className='App-trending-news-title'>TRENDING NEWS</p>
           <div className="App-hero-side-bar"><Trending /></div> 
           <div className="App-hero-side-bar"><Trending /></div> 
           <div className="App-hero-side-bar2">
             <p className='App-News-category-hero-title1'>POPULAR TOPICS</p>
             <div className='App-popular-topics'><Topics /></div>

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

 



        <section>
    <div className='App-hero-popular'>


        <div className='App-popular-News-all'>
            <div className='App-popular-list-News'>

              <div className='App-display'>
              <p className='App-popular-news'>Popular News</p>
              <News />
              </div>  
              <div className='App-display'>
               
              </div> 
              <div className='App-posts-ads'>
                <div className='App-ads-resouces-container'>
                    <div className='App-ads-resources'>
                         
                        
                        <div className='App-ads-resouces-list'>Ads spcae
                        <div className='App-ads-resouces-list1'> Get 60% Discount on your Recharge Airtel</div>
                        </div>
                         
                    </div>
                    <div className='App-ads-resources1'>
               
                   
                    </div>
                 
                
              </div> 
              <div className='App-footer-surrounds'>
                <div className='App-footers-headers'><h1>Company:</h1>
                  <ul className='App-lists-list'>
                    <li className='App-list-list-list'>About us</li>
                    <li className='App-list-list-list'>Careers</li>
                    <li className='App-list-list-list'>Event</li>
                    <li className='App-list-list-list'>Contact Us</li>
                    <li className='App-list-list-list' >Privacy Policy</li>
                    <li className='App-list-list-list'>Reach out with News </li>
                    <li className='App-list-list-list'>Legal </li>
                  </ul>
                </div>
                <div className='App-footers-headers'><h1>Resources:</h1>
                <ul className='App-lists-list'>
                    <li className='App-list-list-list'>Advertise with us</li>
                    <li className='App-list-list-list'>sale</li>
                    <li className='App-list-list-list'>Book an Ads</li>
                    <li className='App-list-list-list'>Customer STories</li>
                    <li className='App-list-list-list'>e-Books</li>
                     
                
                     
                  </ul>

                </div>
                <div className='App-footers-headers'><h1>Location</h1>
                <ul className='App-lists-list'>
                    <li className='App-list-list-list'>No3 junts Road Lagos</li>
                    <li className='App-list-list-list'>+237-345-4567</li>
                    <li className='App-list-list-list'>Book an Ads</li>
                    <li className='App-list-li st-list'>Become a Repoter</li>
                     
                  </ul>

                </div>
                <div className='App-footers-headers'><h1>Review to us </h1>

                    <input type='text' className='Appp-input-info'></input>
                </div>
                
             </div> 
             </div>  
    
        
                 
          </div>   
        </div>
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
    </section> 
  
    </section>
 

 

    
    
    
 

      
    </>

 
      
    
  )
}
