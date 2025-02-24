import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function MovieList(){
    let[movies,setMovies]=useState([]);

   async function getMovies(){
        const response = await fetch("https://dummyapi.online/api/movies");
        const data = await response.json();
        setMovies(data);

    }
    useEffect(()=>{
        getMovies();
    },[]);

    return(
        <>
           <div>
      <h1>Movie Database</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title} ({movie.year})</Link>
          </li>
        ))}
      </ul>
    </div>
        </>
    );
}
export default MovieList;