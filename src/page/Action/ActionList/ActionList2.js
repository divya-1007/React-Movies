import React from 'react'
import { Link } from 'react-router-dom';

const ActionList2 = (props) => {
   
    if(props !== undefined){
      var popular = props.movies;
      // console.log(popular ,"eif");
    }
    const FavouriteComponent = props.favouriteComponent;
  return (
    <>
        {popular.map((movie, index) => (
      <div className='image-containers d-flex justify-content-start m-3 col-sm-3' key={movie.id}>
        <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path}  className="img-fluid" />
        <div
          onClick={() => props.handleFavouritesClick(movie)}
          className='overlay d-flex align-items-center justify-content-center'
          >
					 <div style={{height: '24px' ,width:'22px'}}>
          <button  className='btn btn-block text-uppercase' style={{fontSize:'60%' ,fontWeight:"900"  ,color:"#FFF"}} moviesdata={movie} >
					<Link to='/List' style={{color:"#FFFFFF"}}>Details</Link>
					</button>
           <button  className='btn btn-block text-uppercase' style={{fontSize:'60%' ,fontWeight:"900",lineHeight:'2rem' ,color:"#FFF"}}  >
            <Link to='/booking' style={{color:"#FFFFFF" ,marginTop:"25px"}} >Booking</Link>
          </button>
          </div>
          <FavouriteComponent />
        </div>
        </div>
    ))}
    </>
  )
}

export default ActionList2;