import { useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
// import Card from "./card"
// import Login from "./login"
// import LogUp from "./logup"
import Layout from "./layout"
import Footer from "./Foooter";
import SecondTopMovies from '../page/Action/SecondTopMovies';
import MovieCard from '../page/Movies/MovieCard';
import SecondTvpMovies from '../page/TvShow/SecondTvMovies'
import AllMovieCard from '../page/AllMovies/AlMovieCard';
import DataMovieCard from '../page/AllMovies/DataMovieCard';
import Animation from '../page/Animation/AnimationData';
 
function Home (){
    const [items, setItems] = useState([]);
    
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = "/";
      }
    }, []);
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('user'));
      if (items) {
      setItems(items);
      }
    }, []);
 
    return (
        <>
        <Layout />
      <div  className="main_container mt-5">
       {/* <header id="home">
        <div  className="overlays"></div>
         <div  className="tophead">
            <div  className="container-fluid">
                <div  className="row">
                <img src='https://user-images.githubusercontent.com/22106880/147141573-1865cb4e-5adc-46c5-9256-6c3e8d509a23.png' className='subtitle-main wow fadeInUp' />
                    <div  className="col-md-7 ">
                        <h1  className="title-main  fadeInRight" style={{color:"#FFF"}} >MOVIES CREATIVE</h1>
                        <h3  className="title-main-para fadeInRight" >The App component will hold the state for the app. That way we can keep everything organised in one place and pass different pieces of state to different components.</h3>
                        <div  className="title-main  fadeInRight" >
                        <NavLink  className="btn-account " to="/logUp">Create Account</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="sesgoabajo"></div>
        </header> */}
        <div>
        <section  className="galeria">
            <div  className="sesgoarriba"></div>
            <div  className="imagenes">
               <div  className="enmica">
                  <img src='https://user-images.githubusercontent.com/22106880/147141573-1865cb4e-5adc-46c5-9256-6c3e8d509a23.png'  />
                </div>
            </div>
            
            <div  className="sesgoabajo"></div>
        </section>
      
        <section  className="overview-wrap" id="overview">
        <div  className="gap-2 pt-5  ">
        <h2 className='btn btn-block text-uppercase mb-2 rounded-pill shadow-sm' style={{fontSize:'20px' ,fontWeight:"900",color:"#FFF"}}>Trending Now</h2>
        </div>
        <AllMovieCard />
        <div  className="gap-2 pt-5  ">
        <h2 className='btn btn-block text-uppercase mb-2 rounded-pill shadow-sm' style={{fontSize:'20px' ,fontWeight:"900" ,color:"#FFF"}}>History Movies</h2>
        </div>
        <DataMovieCard />
        </section>

        <section  className="galeria">
            <div  className="sesgoarriba"></div>
            <div  className="imagenes">
               <div  className="enmica">
                    <h2>ACTION MOVIES</h2>
                    <div></div>
                    <h5>"Web design and web development this are the things we enjoy doing daily"</h5>  
                </div>
            </div>
            
            <div  className="sesgoabajo"></div>
        </section>
       
        <section  className="our-team" id="team">
         <MovieCard />           
        <div  className="d-grid gap-2 seeMore">
        <button  className="btns btn-primary btn-block text-uppercase mb-5 rounded-pill shadow-sm"><Link to='/movie' style={{color:"#FFFFFF"}}>See More</Link></button>
        </div>
        </section>


        <section  className="galeria">
            <div  className="sesgoarriba"></div>
            <div  className="imagenes">
               <div  className="enmica">
                    <h2>Tv Shows</h2>
                    <div></div>
                    <h5>"Web design and web development this are the things we enjoy doing daily"</h5>  
                </div>
            </div>
            
            <div  className="sesgoabajo"></div>
        </section>

        <section  className="our-team" id="team">
         {/* <Card /> */}
         <SecondTvpMovies />
         <div  className="d-grid gap-2 mt-5 seeMore">
        <button  className="btns btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"><Link to='/tvshow' style={{color:"#FFFFFF"}}>See More</Link></button>
        </div>  
        </section>

         <section  className="galeria">
            <div  className="sesgoarriba"></div>
            <div  className="imagenes">
                
               <div  className="enmica">
                    <h2>Trending Now</h2>
                    <div></div>
                    <h5>"Web design and web development this are the things we enjoy doing daily"</h5>  
                </div>
            </div>
            
            <div  className="sesgoabajo"></div>
        </section>

        <section  className="blog-wrap" id="blog"> 
        {/* <Card /> */}
        <SecondTopMovies />
         <div  className="d-grid gap-2 mt-5 seeMore">
        <button  className="btns btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"><Link to='/actionmv' style={{color:"#FFFFFF"}}>See More</Link></button>
        </div>  
        </section>

        <section  className="galeria">
            <div  className="sesgoarriba"></div>
            <div  className="imagenes">
                
               <div  className="enmica">
                    <h2>Animation Movies</h2>
                    <div></div>
                    <h5>"Web design and web development this are the things we enjoy doing daily"</h5>  
                </div>
            </div>
            
            <div  className="sesgoabajo"></div>
        </section>

        <section  className="blog-wrap" id="blog"> 
        {/* <Card /> */}
        <Animation />
       <div  className="d-grid gap-2 mt-5 seeMore">
        <button  className="btns btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"><Link to='/contact' style={{color:"#FFFFFF"}}>See More</Link></button>
        </div>  
        </section>
        </div>
      </div>
      <Footer />
      </>
    ) 
}
 
export default Home;