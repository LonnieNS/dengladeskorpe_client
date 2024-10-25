import styles from "./DishPage.module.css";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/stylecomponents/PageHeader/PageHeader";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useForm } from "react-hook-form";
import DishTemplate from "../../components/dishTemplate/dishTemplate";

const DishPage = () => {


    let {id} = useParams()
    const {data, fetchData} = useFetch();

    //States
    const [dish, setDish] = useState({});

    useEffect( () => {

        fetchData(`/dish/${id}`);

    }, [])

    useEffect( () => {

        setDish(data)

    }, [data])


   
        return (
            <div className="pageWrapper">
            <PageHeader subtitle={dish.title}></PageHeader>
            <DishTemplate dish={dish}></DishTemplate>
           

        </div>
    );
};

export default DishPage;