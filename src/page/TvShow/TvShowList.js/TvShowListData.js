import React, { useEffect, useState } from "react";
import SearchBox from "../../TvShow/TvShowList.js/SearchBox";
import TvListHeading from "./TvListHeading";
import AddFavourite from "./AddFavourite";
import RemoveFavourites from "./RemoveFavourites";
import TvList from "./TvList";
import './listMovi.css'
import { Link } from "react-router-dom";
import BookingData from "../../Booking/BookingData";

const TvShowListData = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
 
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=20be784f740b6b638c906dde5b35efae&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const addFavouriteMovie = (movie) => {
    // console.log(favourites ,"kfrfgv");
    if(favourites !== null){
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
    }
  
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="row d-flex align-items-center mt-4 mb-4 ">
          <TvListHeading heading="Tv Show" />
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
        <div className="row">
          <TvListHeading heading="Booking"
            // handleFavouritesClick={removeFavouriteMovie}
            // favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </>
  );
};

export default TvShowListData;
