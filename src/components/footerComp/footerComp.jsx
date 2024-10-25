import { Link } from "react-router-dom";
import styles from "./footerComp.module.css";

const FooterComp = () => {

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
            <Link to={'/'} className={styles.footerLink}><img src='/logo.png'/></Link>
                

            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoOne}>
                    <p>Email: <Link to={'mailto:gladskorpe@pizzaglad.dk'} className={styles.footerLink}>gladskorpe@pizzaglad.dk</Link> </p>
                </div>
                <div className={styles.infoTwo}>
                    <p>Tlf: <Link to={'tel:12345678'} className={styles.footerLink}>12345678</Link> </p>
                </div>
                <div className={styles.infoThree}>
                    <p>Adresse: Skorpevej 42, 1234 Pizzabyen </p>
                </div>
            </div>

        </div>
    )
}

export default FooterComp;