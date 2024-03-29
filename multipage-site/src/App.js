import './App.css'
import {  BrowserRouter, NavLink, Navigate, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Article from "./pages/Article"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/about" > About </NavLink>
        <NavLink to="/contact" > Contact </NavLink>

        {/* <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a> */}
      </nav>
     
      <Routes> 
      <Route path='/' element={<Home/>} /> 
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/articles/:id' element={<Article/>} />
 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
