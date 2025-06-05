import React, { useState } from 'react'
 




const[search,setSearch]= useState()
export default function Search() {


    const handleSearch = (e)=>{
        setSearch(e.target.value)
        const query =(e.target.value)
  
        e.preventDefault()
        if (e.target.value!=='') {
          fetch(`https://newsback-ylzh.onrender.com/search/${query}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              setSearch(data);
              
            })
            .catch(err => {
              console.error('Search error:', err);
            });
        }
        else
        {
          setSearch([]);
        }
          
    }  
  return (
    <div>
      
      
    </div>
  )
}
