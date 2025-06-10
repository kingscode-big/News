import React from 'react'
import { useState,useEffect } from 'react'

export default function Comment() {

    const [comment,setComment]=useState([''])
    
  return (
    <div> 
        <form>
          <p></p>
            Comment<br></br><textarea type='text' className='App-comments-area'  ></textarea><br></br>
            Name<br></br><input type='text' placeholder='username' className='App-name-area'></input><br></br>
            <button className='App-send-comments'>Send</button>
        </form>
      
    </div>
  )
}
