import React, { useState } from 'react';
import SecondTopMovies1 from './SecondTV';

const SecondTvpMovies = () => {
    
    const [movies, setMovies] = useState([        {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "197",
        "imdbID": "tt0076759",
        "Type": "movie",
        "Poster": "https://occ-0-2611-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZEj4xDgN0Qo8QlvLsBGV2cAxsACysRsnFMOkqMpwvyLPjTwtIA7mD59zBy-xr8QTUPmRYj4mK54Ul-j-4Zk-XJHXCU5n_zPCu69jawm4KTx68sl_8exiDlOEF6hwDhLb2FI.jpg?r=937"
    },
    {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "198",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://occ-0-2611-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWOxAHOiqXjnQCUY5rhDsa1-PiUZW7ljrzUVltbwWJhD6qunD_YIBV1enBJam4xbglW2_uFMDhMxuZg7vdW-pp1v77fEEK7JLCBupWUrC7M9h0Pb-9wCixxREjRN9HLcaCph.jpg?r=9d4"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "183",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
    }, {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "190",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://occ-0-2611-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfktHGwetZ4V41qwDYiozGF4887uJ-WZ3G1hYjxnQDvi5EYOHN5Wyqkae8FOR70039nmeUH1nc2OSh9TXPxXbIkcvhsdMPdmDRbm6FjZwbBH6ojiUh4BgpSEh3RE4pZgks6x.jpg?r=31a"
    },
]);
  return (
    <div className="col-lg-12">
    <div className='container-fluid movie-app '>
    <div className='row mt-5 p-5' >
     <SecondTopMovies1 movies={movies} />
    </div>
    </div>
   </div>
       
  )
}

export default SecondTvpMovies ;