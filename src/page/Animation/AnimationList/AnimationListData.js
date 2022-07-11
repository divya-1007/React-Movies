import React, { useEffect, useState } from "react";
import SearchBox from "../../TvShow/TvShowList.js/SearchBox";
import TvListHeading from "./AnimationListHeading";
import AddFavourite from "./AddFavourite";
import RemoveFavourites from "./RemoveFavourites";
import TvList from "./AnimationList";

const AnimationListData = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
 
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=20be784f740b6b638c906dde5b35efae&with_genres=16`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  

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
      <div className="container-fluid mt-5 ">
        <div className="row">
          <TvListHeading heading="Animation Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <TvList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourite}
          />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
          <TvListHeading heading="Favourites" />
        </div>
        <div className="row">
          <TvList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </>
  );
};

export default AnimationListData;
