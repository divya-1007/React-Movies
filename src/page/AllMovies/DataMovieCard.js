import React, { useEffect, useState } from "react";
import DataMovieList from "./DataMovieList";

const DataMovieCard = () => {
   
    const [movies, setMovies] = useState([]);
	// const [searchValue, setSearchValue] = useState('');
	// const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		fetchPopular();
	}, []);
	// https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14
	const fetchPopular = async (searchValue) => {
		const url = `https://api.themoviedb.org/3/discover/movie?api_key=20be784f740b6b638c906dde5b35efae&page=1&with_genres=14`;
		const response = await fetch(url);
		const responseJson = await response.json();
     
        setMovies(responseJson.results)
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
  return (
    <div className="col-lg-12">
    <div className='container-fluid '>
    <div className='row' >
        <DataMovieList movies={movies} />
    </div>
    </div>
   </div>
  );
};

export default DataMovieCard;
