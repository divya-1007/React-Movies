import React from 'react';

const AllMovieList = (props) => {
	// console.log(props.data ,"oef");
	return (
		<>
		
			{props.movies.map((movie, index) => (
				<div className="col-xs-6 col-sm-3 mb-3"  key={movie.Poster}>
					<img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} className="img-fluid" />
				</div>
			))}


		</>
	);
};

export default AllMovieList;