import {useState } from "react";
import styles from "./dishTemplate.module.css";
import BigButton from "../stylecomponents/bigButton/bigButton";
import useBasket from "../../hooks/useBasket";

const DishTemplate = ({dish}) => {
    
    //States
    const [size, setSize] = useState('normal');

    //Egne Hooks
    const {addItem} = useBasket();

    //Map over ingredientser i den valgte ret, så de vises som liste.
    let listItems = "";

    {dish.ingredients !== undefined ? listItems = dish.ingredients.map(item => <li key={item} className={styles.listItem}>{item}</li>) : null}


    //Dynamisk liste over størrelser, hentet fra rettens prisliste.

    let options = [];
    let price = '';
    

    // Fail-safe for at undgå "undefined"-problemer ved indlæsning.
    {dish.price !== undefined ? options = Object.keys(dish.price) : null}

    {dish.price !== undefined ? price=dish.price[size] : null}


    //Styring af størrelsesvalg

    const handleChange = (e) => {
        setSize(e.target.value)
    }
   
    return(

        <div className={styles.container}>
            <div className={styles.splitBoxLeft}>
                <div className={styles.imageBox}>
                    <img src={dish.image} />
                </div>
                <div className={styles.infoBox}>
                    <h2 className="altTextStyle">{dish.title}</h2>
                    <ul className={styles.ingredientList}>{listItems}</ul>
                </div>
            </div>
            <div className={styles.splitBox}>
                <div className={styles.selectionBox}>
                    <h2 className={styles.selectionHeading}>Vælg størrelse</h2>
                    <form>
                        <select name="size" onChange={handleChange}>

                            {options.map((option, index) => {
                                return <option key={index} value={option}>{option}</option>
                            }) 
                            }
                        </select>
                    </form>
                </div>
                <div className={styles.priceBox}>
                    <h3 className={styles.priceHeading}>Pris</h3>
                    <p className={styles.priceParagraph}>{price}</p>
                </div>

                <div className={styles.button} onClick={() => addItem(dish._id, size)}>
                    <BigButton text={`Tilføj ${dish.title} til kurven`}></BigButton>
                </div>
            </div>
    </div>
    )
}

export default DishTemplate;