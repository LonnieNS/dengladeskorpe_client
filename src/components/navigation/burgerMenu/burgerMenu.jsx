import { useState } from "react";
import styles from "./burgerMenu.module.css";
import { NavLink } from "react-router-dom";


const BurgerMenu = () => {

    const [mainNavigationOpen, setMainNavigationOpen] = useState(false);

    const openNavigation = mainNavigationOpen ? styles.open : "";
    const barAnim = mainNavigationOpen ? styles.active : "";


    return (
        <div className={styles.container}>

            <div className={styles.burgerBtn} onClick={() => setMainNavigationOpen(!mainNavigationOpen)}>
                <div className={`${styles.bar} ${barAnim}`}></div>
                <div className={`${styles.bar} ${barAnim}`}></div>
                <div className={`${styles.bar} ${barAnim}`}></div>
            </div>

            <div className={`${styles.nav} ${openNavigation}`} onClick={() => setMainNavigationOpen(false)}>

                <NavLink to="/"  className={styles.navlink}> Forside</NavLink>
                <NavLink to="/employees"  className={styles.navlink}> Personale</NavLink>
                <NavLink to="/contact"  className={styles.navlink}> Kontakt</NavLink>
                <NavLink to="/basket"  className={styles.navlink}> Kurv</NavLink>
         
            </div>

        </div>
    )
}

export default BurgerMenu