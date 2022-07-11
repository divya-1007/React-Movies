import React, { useState } from 'react';
import BookingData from '../../Booking/BookingData';
import { Link, } from 'react-router-dom'

const TvList = (props) => {
  if(props.favouriteComponent !== null){
  var FavouriteComponents = props.favouriteComponent;
  }
  const [favourites, setFavourites] = useState([0]);


  const handelStorage = (props) =>{
    // event.preventDefault();
    console.log("hello" ,props.movies)
    if(favourites !== null){
      const newFavouriteList = [...favourites, props.movies];
      setFavourites(newFavouriteList);
    }
    
  }
 

  return (
    <>
    {props.movies.map((movie, index) => (
      <div className='image-containers d-flex justify-content-start col-xs-6 col-sm-3 mb-3' key={movie.imdbID}>
        <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} className="img-fluid" />
        <div
          onClick={() => props.handleFavouritesClick(movie)}
          className='overlay d-flex align-items-center justify-content-center'
          >
					 <div style={{height: '24px' ,width:'22px'}}>
          <button  className='btn btn-block text-uppercase' style={{fontSize:'60%' ,fontWeight:"900"  ,color:"#FFF"}}  >
					<Link to='/List' style={{color:"#FFFFFF"}}>Details</Link>
					</button>
           <button  className='btn btn-block text-uppercase' style={{fontSize:'60%' ,fontWeight:"900",lineHeight:'2rem' ,color:"#FFF"}}  handleFavouritesClickss={handelStorage} >
            <Link to='/booking' style={{color:"#FFFFFF" ,marginTop:"25px"}} >Booking</Link>
          </button>
          </div>
          <FavouriteComponents />
        </div>
       
      </div>
    ))}
      
  </>
  )
}

export default TvList ;