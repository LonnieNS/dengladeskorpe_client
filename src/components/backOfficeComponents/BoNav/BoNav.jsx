import { NavLink } from "react-router-dom";
import styles from "./BoNav.module.css";
import { useAuth } from "../../../hooks/useAuth";

const BoNav = () => {

    const {signOut} = useAuth();

    return (
        <div className={styles.container}>
           
            <div className={styles.heading}>
                <h2 className={styles.boheading}>Backoffice</h2>
            </div>
            <div className={styles.navlinks}> 
                <NavLink className={styles.singleLink} to="/backoffice/employees">Medarbejdere</NavLink>
                <NavLink className={styles.returnLink} to="/">Tilbage til FrontEnd</NavLink>
                <button type="button" onClick={ () => signOut()}>Sign Out</button>
            </div>

        </div>
    )
}

export default BoNav;