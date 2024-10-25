import styles from "./globalnav.module.css";
import BurgerMenu from "../burgerMenu/burgerMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BasketCounter from "../basketCounter/basketCounter";

const GlobalNav = () => {


    // Baggrund på navigation ved scroll under headerbilledet.
    const [navBg, setNavBg] = useState(false);

    const addNavBg = () => {
        if (window.scrollY >= 350) {
            setNavBg(true);
        } else {
            setNavBg(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", addNavBg);
    })
    
    let navBgStyle = '';

    {navBg == true ? navBgStyle = styles.bgCol : navBgStyle = ''}

    return (
        <div className={`${styles.container} ${navBgStyle}`}>
            <Link to="/"><img className={styles.logoImg} src="/logo.png"/></Link>
            <div className={styles.navRight}>
            <Link to="/basket"><BasketCounter></BasketCounter></Link>
                <BurgerMenu></BurgerMenu>
            </div>
            
        </div>
    );
};

export default GlobalNav;