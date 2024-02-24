import MovieList from "./MovieList";
import NavBar from "./NavBar";
import React from "react";

import {movies} from "./moviedata";

class App extends React.Component{

  constructor(){
    super();
    //Creating the state object 
    this.state = {
        movies : movies,
        cartCount:0
    } 
    
  };

  handleIncStar = (movie)=>{
    const {movies} =this.state
     const mid =movies.indexOf(movie);
     if(movies[mid].star>=5)
     return;
     movies[mid].star+=0.5;

     this.setState({
        movies:movies
     })
  }

  handleDecStar = (movie)=>{
    const {movies} =this.state
     const mid =movies.indexOf(movie);
     if(movies[mid].star<=0)
     return;
     movies[mid].star-=0.5;

     this.setState({
        movies:movies
     })
  }
  handleFav = (movie)=>{
    const {movies} =this.state
     const mid =movies.indexOf(movie);
      movies[mid].fav =! movies[mid].fav;
   

     this.setState({
        movies:movies
     })
  }

  handleAdd2Cart = (movie)=>{
    let {movies,cartCount} =this.state
     const mid =movies.indexOf(movie);
     if(movies[mid].addToCart===true)
     {
      cartCount++;
     }
     else
      cartCount--;

    movies[mid].addToCart =! movies[mid].addToCart;

   

     this.setState({
        movies,
        cartCount

     })
  }



  render()
  {
    const {movies,cartCount}=this.state;
    
    return (
      <>
      <NavBar cartCount={cartCount}/>
      <MovieList
        movies={movies}
       addStars={this.handleIncStar}
       decStars={this.handleDecStar}
       handleFav={this.handleFav}
       handleAdd2Cart={this.handleAdd2Cart}
      
      />
      </>
    )
  }
  
}


export default App;