import styles from "./basketList.module.css";
import useFetch from "../../hooks/useFetch";
import { useLocalStorage } from "@uidotdev/usehooks";
import useBasket from "../../hooks/useBasket";
import BasketItem from "./basketItem/basketItem";
import BigButton from "../stylecomponents/bigButton/bigButton";

const BasketList = () => {

    //localstorage
    const [basket] = useLocalStorage("basket", []);

     //Egne Hooks
     const {postData} = useFetch();

     const {total} = useBasket()

    

    return (
        <div className={styles.container}>
            
            <div className={styles.listWrapper}>
                <h2>Bestilling</h2>
                {basket.map( (item ) => {
                    return <div key={item.id}>
                        <BasketItem item={item}></BasketItem>
                        </div>
                })}
                
            </div> 
            
            <div className={styles.formContainer}> 
                <h3>I alt: {total} </h3>
                <label>
                    Kommentarer til ordren
                    <input type="text" name="comments"></input>
                </label>
                <div className={styles.button}><BigButton text={'Afgiv ordre'}></BigButton></div>
            </div>

           
          
        </div>
    )
}
export default BasketList;