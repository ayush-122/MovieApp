import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component
{

  
  
    render()
    {

      console.log(this.props);
        const {movies ,addStars, decStars, handleFav, handleAdd2Cart}  = this.props;
        return(
            <>
            {movies.map((movie,index)=>{
                return (
                    <MovieCard key={index} movies={movie} addStars={addStars} decStars={decStars} handleFav={handleFav} handleAdd2Cart={handleAdd2Cart}/>
                )
            })}
            </>
        )
    }
}

export default MovieList;