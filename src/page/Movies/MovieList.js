import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start col-sm-3 ' key={movie.Poster}>
					<img src={movie.Poster} alt='movie'  className="img-fluid"></img>
				</div>
			))}
		</>
	);
};

export default MovieList;