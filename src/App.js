import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Layout from "./component/layout"
import LogUp from "./component/logup"
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from "./component/home"
import About from "./component/about"
import Contact from "./component/contact"
import Login from "./component/login"
import Page404 from "./component/page404"
import Filter from "./component/filter"
import MoviesListDataInfo from './component/MoviesListDataInfo';
import ActionMV from './component/ActionMV';
import TvShowData from './component/TvShowData';
import MovieAction from './component/MovieAction';
import Footer from './component/Foooter';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Booking from './component/Booking';

function App ()  {
 
  return (
    <div className='App'>
      <BrowserRouter>
      
        <Routes>
           <Route path="/" exact={true} element={<Login/>} />
           <Route path="/about" exact={true} element={<About/>} />
           <Route path="List" exact={true} element={<MoviesListDataInfo/>} />
           <Route path="/contact" exact={true} element={<Contact/>} />
           <Route path="/logUp" exact={true} element={<LogUp/>} />
           <Route path="/dashboard" exact={true} element={<Home/>} />
           <Route path='/filter' exact={true} element={<Filter/>} />
           <Route path='/actionmv' exact={true} element={<ActionMV/>} />
           <Route path='/tvshow' exact={true} element={<TvShowData/>} />
           <Route path='/movie' exact={true} element={<MovieAction/>} />
           <Route path='/booking' exact={true} element={<Booking/>} />


           <Route path="/*" element={<Page404/>} />
        </Routes>
    
      </BrowserRouter>
      
      
    </div>
  )
}


export default App;