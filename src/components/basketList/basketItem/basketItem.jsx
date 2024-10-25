import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import styles from "./basketItem.module.css";

const BasketItem = ({item}) => {

    const [dish, setDish] = useState({});

     //Egne Hooks
     const {data, fetchData} = useFetch();

    //Data
    useEffect( () => {

        fetchData(`/dish/${item.id}`);

    }, [])

    useEffect( () => {
        if(data.length !== 0){
            setDish(data)
        }
    }, [data])

    
    //failsafe ved indlæsning for at undgå undefined-problemer.
    let itemPrice = 0;
    {dish.price !== undefined ? itemPrice=dish.price[item.size] : null}
  



    return (
        <div className={styles.container}>

        <div className={styles.row}>
            <div className={styles.left}>
                <div className={styles.quantityEdit}></div>
                 {item.quantity} X
            </div>
            <div className={styles.middle}>
                <img src={dish.image} />
            </div>
            <div className={styles.right}>
                 {dish.title}
            </div>
        </div>

        <div className={styles.row}>
                <div className={styles.leftText}>Størrelse:</div>
                <div className={styles.rightText}>{item.size}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.leftText}>Pris:</div>
                <div className={styles.rightText}>{itemPrice}</div>
            </div>

        </div>
    )
}

export default BasketItem;