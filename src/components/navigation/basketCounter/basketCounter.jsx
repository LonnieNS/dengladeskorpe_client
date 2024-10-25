import useBasket from "../../../hooks/useBasket";
import styles from "./basketCounter.module.css";

const BasketCounter = () => {

    const {basketCount} = useBasket();



    return (
        <div className={styles.container}>
            <p className="altTextStyle">
            {basketCount}
            </p>
        </div>
    )
}

export default BasketCounter