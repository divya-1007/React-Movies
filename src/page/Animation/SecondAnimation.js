import React from 'react'

const SecondAnimation = (props) => {
  return (
    <>
        {props.movies.map((movie, index) => (
            <div className='col-xs-6 col-sm-3 mb-3 ' key={movie.Year}>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} className="img-fluid" />
            </div>
        ))}
		</>
  )
}
export default SecondAnimation