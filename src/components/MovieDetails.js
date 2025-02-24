import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  
function MovieDetails(){
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    async function fetchMovies(){
        const response = await fetch(`https://dummyapi.online/api/movies/${id}`);
        const data = await response.json();
        setMovie(data);


    }
    useEffect(()=>{
        fetchMovies();
    },[id]);

    if (!movie) return <p>Loading...</p>;


    return(
        <>
      <div>
      <h2>{movie.title} ({movie.year})</h2>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Plot:</strong> {movie.plot}</p>
      </div>
        </>
    );
}
export default MovieDetails;