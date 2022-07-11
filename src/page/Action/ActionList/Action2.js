import React, { useEffect, useState } from 'react';
import SearchBox from '../../Movies/Movies2/SearchBox';
import ActionHeading from './ActionHeading';
import ActionList2 from './ActionList2';
import AddFavourite from './AddFavourite';
import RemoveFavourites from './RemoveFavourites';


const Action2 = () => {
  const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		fetchPopular();
	}, []);

	const fetchPopular = async (searchValue) => {
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&with_genres=10749`;
		const response = await fetch(url);
		const responseJson = await response.json();
    setMovies(responseJson.results)
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
  // console.log("movies", movies);

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

    const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};
  

  return (
    <>
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<ActionHeading heading='Action' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<ActionList2
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourite}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<ActionHeading heading='Favourites' />
			</div>
			<div className='row'>
				<ActionList2
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
      
    </> 
  )
}

export default Action2;




   

	