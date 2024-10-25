import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./gridList.module.css";
import PizzaBtnTemplate from "../stylecomponents/pizzaBtnTemplate/pizzaBtnTemplate";
import { Link } from "react-router-dom";


const GridList = ({filter}) => {

    const [dishes, setDishes] = useState([]);
    const {data, fetchData} = useFetch();


    useEffect( () => {

        fetchData('/dishes');

    }, [])

    useEffect( () => {

        setDishes(data)

    }, [data])


    let filteredList = dishes;

    {filter ? filteredList = dishes.filter((item) => item.category == filter) : null}


    return (
        <div className={styles.container}>

            {filteredList.map( (dish) => {

                return <div key={dish._id} className={styles.dish}>
                            <Link to={`/dish/${dish._id}`}>
                                <PizzaBtnTemplate item={dish} textSize='1.3rem'></PizzaBtnTemplate>
                            </Link>
                        </div>

            } )}

            

        </div>
    )
}

export default GridList;