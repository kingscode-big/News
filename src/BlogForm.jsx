import React from 'react'
import { useState } from 'react';

export default function BlogForm() {

        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
        const [author, setAuthor] = useState('');
        const [image, setImage] = useState(null);
        const [message, setMessage] = useState('');
      
        
         const handleSubmit = (e)=>{
          console.log(e.target.value)
          e.preventDefault();
       
         

        
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('author', author);
            formData.append('avatar', image);

            fetch('http://localhost:3000/api/post', {
                method: 'POST',
                body: formData
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  setMessage(data);
                  // Reset fields
                  setTitle('');
                  setContent('');
                  setAuthor('');
                  setImage(null);
                })
                .catch(err => {
                  console.error(err);
                  setMessage('Error posting blog');
                });
            
        };
         


        
           // 👈 must match multer's `upload.single('avatar')`
      
           
  return (
    
    <div style={{ maxWidth: 500, margin: 'auto' }}>
    <h2>Create a Blog Post</h2>
    <p>{message}</p>
    
   
    <form onSubmit={handleSubmit} encType="multipart/form-data" >
  
      <div>
        <label>Title</label><br />
        <input  type="text"  value={title}  required onChange={(e)=> setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label><br />
        <textarea type="text" value={content}  required  onChange={(e)=>setContent(e.target.value)}/>
      </div>
      <div>
        <label>Author</label><br />
        <input value={author} type="text" required  onChange={(e)=>setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Image</label><br />
        <input   type="file" accept="image/*" required  onChange={(e)=>setImage(e.target.files[0])} />
      </div>
      <button type="submit" style={{ marginTop: '1rem' }} >Submit</button>
    </form>
  </div>
  )
}
