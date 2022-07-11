import React from 'react'
import { Link,} from 'react-router-dom'

const MoviList = (props) => {
  // console.log(props.movies);
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
    {props.movies.map((movie, index) => (
      <div className='image-containers d-flex justify-content-start m-3 col-sm-3' key={movie.imdbID}>
        <img src={movie.Poster} alt='movie' className="img-fluid"></img>
        {/* <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} className="img-fluid" /> */}
        <div
          onClick={() => props.handleFavouritesClick(movie)}
          className='overlay d-flex align-items-center justify-content-center'
          >
          <div style={{height: '24px' ,width:'22px'}}>
          <button  className='btn btn-block text-uppercase mb-2 rounded-pill shadow-sm' style={{fontSize:'20px' ,fontWeight:"900" ,color:"#FFF"}} moviesdata={movie} >
					<Link to='/List' style={{color:"#FFFFFF"}}>Details</Link>
					</button>
          <button  className='btn btn-block text-uppercase mb-2 rounded-pill shadow-sm' style={{fontSize:'20px' ,fontWeight:"900" ,color:"#FFF"}} moviesdata={movie} >
					<Link to='/booking' style={{color:"#FFFFFF"}}>Booking</Link>
					</button>
          <FavouriteComponent />
          </div>
        
        </div>
      </div>
    ))}
      
  </>
  )
}

export default MoviList