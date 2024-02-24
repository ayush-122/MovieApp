import React from "react";

class MovieCard extends React.Component{
    
//    addStars =()=>{
//     console.log('add stars has been clicked');

//     if(this.state.stars<5)
//     {
//     this.setState((prevState)=>{
      
//       return{  stars:prevState.stars+0.5
//       }
//     })
//     }
//    };

//     decStars =()=>
//    {
//     console.log('dec stars has been clicked');
//     if(this.state.stars>0)
//     {
//     this.setState((prevState)=>
//     {
//         return{
//             stars:prevState.stars-0.5
//         }
//     })
//    }
//    };

//    handleFav=()=>
//    {
//     this.setState({
//         fav:!this.state.fav
//     })
//    }

//     handleAdd2Cart=()=>
//     {
//         this.setState({
//             addToCart:!this.state.addToCart
//         })
//     }
    render(){
        //Destructing the state object in render function
        const {movies:movie,addStars,decStars ,handleFav,handleAdd2Cart} =this.props;
        const {title, plot, poster, price, rating,star,fav,addToCart} =  this.props.movies;

       
          
        return(
            <div className="main">

                {/**Movie Card */}
                <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="poster" src={poster} />
                    </div>
                    
                    {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">{rating}</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                    onClick={()=>{
                                        decStars(movie);
                                    }} 
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                    onClick={()=>{ addStars(movie)

                                    }}
                                />
                                <span className="starCount">{star}</span>
                            </div>

                            
                            
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{handleFav(movie)}}>{fav?"Unfavourite":"Favourite"}</button>
                            <button className={addToCart?"addcart-btn":"removecart-btn"} onClick={()=>{handleAdd2Cart(movie)}}>{addToCart?"Add to Cart":"Remove from cart"}</button>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;