import { useEffect, useState } from "react";
import styles from "./categorySelection.module.css";
import useFetch from "../../hooks/useFetch";
import PizzaBtnTemplate from "../stylecomponents/pizzaBtnTemplate/pizzaBtnTemplate";
import GridList from "../gridList/gridList";


const CategorySelection = () => {

    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');

    const {data, fetchData} = useFetch();
    

    useEffect( () => {
        fetchData('/categories');
    }, [])

    useEffect( () => {
        setCategories(data);
    },[data])

    const handleClick = (category) => {
        setActiveCategory(category.name)
    }

    return (
        <div className={styles.container}>
            <div className={styles.catContainer}>
                <h2 className="altTextStyle">Vælg kategori</h2>
                <div className={styles.categories}>

                    {categories.map((category) => {
                    return <div key={category._id} className={styles.category} onClick={() => handleClick(category)}> <PizzaBtnTemplate item={category} textSize={'2rem'}></PizzaBtnTemplate> </div>
                        
                    })}

                </div>
            </div>
            <GridList filter={activeCategory}></GridList>

        </div>
    )
}

export default CategorySelection;