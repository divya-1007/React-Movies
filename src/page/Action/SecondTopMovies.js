import React, { useState } from 'react';
import SecondTopMovies1 from './SecondTopMovies1';

const SecondTopMovies = () => {
    
    const [movies, setMovies] = useState([        {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "197",
        "imdbID": "tt0076759",
        "Type": "movie",
        "Poster": "https://image.tmdb.org/t/p/w342/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
    },
    {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "198",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://image.tmdb.org/t/p/w342/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "183",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://image.tmdb.org/t/p/w342/neMZH82Stu91d3iqvLdNQfqPPyl.jpg"
    }, {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "190",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://image.tmdb.org/t/p/w342/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
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

export default SecondTopMovies