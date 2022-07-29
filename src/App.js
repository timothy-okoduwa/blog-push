
import Header from './Header';
import Posts from './Posts/posts'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import PostBlogs from './PostBlogs';
import About from './About';
import Login from './Login';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth"))
  return (
  <BrowserRouter>
  <Header isAuth={isAuth} setIsAuth={setIsAuth} />
  <Routes>
  <Route path='/' element={ <Posts isAuth={isAuth} setIsAuth={setIsAuth} /> }/>
  <Route path='/PostBlog' element={<PostBlogs  isAuth={isAuth} setIsAuth={setIsAuth} /> }/>
  <Route path='/About' element={<About isAuth={isAuth} setIsAuth={setIsAuth} /> }/>
  <Route path='/Login' element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/> }/>
  
  </Routes>
  
  </BrowserRouter>

   
  );
}

export default App;
