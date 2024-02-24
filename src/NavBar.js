import React from "react";

import styles from "./NavBar.module.css";

class NavBar extends React.Component{

    render()
    {
        const {cartCount}=this.props;
        return(
           <div className={styles.Nav}>
            <div className={styles.title}>MOVIE-APP</div>
            <div className={styles.cart}>
                <img className={styles.cartIcon} alt ="cart icon" src="https://cdn-icons-png.flaticon.com/128/5665/5665541.png"/>
                <span className={styles.cartCount}>{cartCount}</span>
            </div>
           </div> 
        )
    }
}


export default NavBar;
