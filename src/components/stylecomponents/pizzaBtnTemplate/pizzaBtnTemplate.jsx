import styles from "./pizzaBtnTemplate.module.css";

const PizzaBtnTemplate = ({item, textSize}) => {

    let itemImage = item.image;
    
    let itemStyle = {
        backgroundImage: `url(${itemImage})`,
    }
    let textStyle = {

        fontSize: textSize,

    }

    //Variabel og ternary operator til at tage højde for forskellige keys i databasen.

    let itemName = '';

    {item.name ? itemName = item.name : itemName = item.title}
    
    return (
       <div style={itemStyle} className={styles.container}>
        <h3 className="altTextStyle" style={textStyle}>{itemName}</h3>
       </div>
    )
}


export default PizzaBtnTemplate
 