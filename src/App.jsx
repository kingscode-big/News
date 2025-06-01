
import './App.css'
import BlogForm from './BlogForm'
 
import Header from './Header'
import Latest from './components/Latest'
import Posts from './components/Posts'
import Category from './components/Category'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter> 
    <Routes>

      <Route path='/' element={<Header />} /> 
        
      <Route path='/api/post/:id' element={<Posts />} />
      <Route path='/latest' element={<Latest />} />
      <Route path='/category/:category' element={<Category />} />
     
      
       
    
    </Routes>
    </BrowserRouter>
   
    
  )
}

export default App
