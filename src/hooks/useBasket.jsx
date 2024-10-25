import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useBasket = () => {

    const [basket, saveBasket] = useLocalStorage("basket", [])
    
    //states
    const [dishes, setDishes] = useState([]);
    const [total, setTotal] = useState(0)
    const [basketCount, setBasketCount] = useState(0)



    //Egne Hooks
    const {data, fetchData} = useFetch();

    //Data

    useEffect( () => {

        fetchData("/dishes");

    }, [])

    useEffect( () => {
        if(data.length !== 0){
            setDishes(data)
        }
    }, [data])


    const getDish = (id) => {
        return dishes.find( (dish) => dish._id === id)
    }
   
    //Tilføj ret til kurv

    const addItem = (id, size, quantity = 1) => {
        let basketItemIndex = basket.findIndex( (item) => item.id === id)

        if(basketItemIndex === -1) {
            saveBasket([
                ...basket,
                {
                    id,
                    size,
                    quantity
                }
            ])

        } else {

            basket[basketItemIndex].quantity += quantity;

             let sum = basket[basketItemIndex].quantity * getDish(id).price[size]; 
            setTotal(sum); 
 
            saveBasket([
                ...basket
            ])
            
        }
    }
    
    // Slet ret
    const deleteItem = (id) => {

        let newBasketList = basket.filter( (item) => item.id !== id )

        saveBasket([

            ...newBasketList

        ])
    }

    
    //Fjern ret fra kurv
    const removeItem = (id, quantity = 1) => {

        let basketItemIndex = basket.findIndex( (item) => item.id === id)
     
        if(basketItemIndex !== -1)
        {
            basket[basketItemIndex].quantity -= quantity;

          let sum = basket[basketItemIndex].quantity * getDish(id).price;
            setTotal(sum); 

            if(basket[basketItemIndex].quantity === 0)
            {
                deleteItem(id)

            } else {
                saveBasket([

                    ...basket
    
                ])
            }
        }
    }

    useEffect( () => {

        if(basket.length !== 0 && dishes.length !== 0)
        {
            let sum = 0;
            let basketAmount = 0;

            basket.map( (item) => {
                sum += item.quantity * getDish(item.id).price[item.size];
                setTotal(sum)
                basketAmount += item.quantity;
                setBasketCount(basketAmount)
            } )

        }
    

    }, [basket, dishes]) 
    

    return {
        addItem,
        removeItem,
        total,
        basketCount
    }

    
}


export default useBasket;