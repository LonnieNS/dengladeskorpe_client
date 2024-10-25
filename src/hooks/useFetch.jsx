import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const useFetch = () => {

    const [data, setData] = useState([])


    const navigate = useNavigate()
    const {token} = useAuth(); 
    
    const fetchData = async (url) => {

        const response = await fetch(`http://localhost:3042${url}`);
        const result = await response.json();
        setData(result.data)

        return result;
    }

    const postData = async(url, data) => {

        const response = await  fetch(`http://localhost:3042${url}`, {
            "method" : "POST",
            "headers": {
                "Authorization": `Bearer ${token}`
            },
            "body" : data
        })

        const result = await response.json();
        
        setData(result.data)

        

        return result;
    }

    const putData = async(url, data) => {

        const response = await  fetch(`http://localhost:3042${url}`, {
            "method" : "PUT",
            "headers": {
                "Authorization": `Bearer ${token}`
            },
            "body" : data
        })

        const result = await response.json();
        
        setData(result.data)

        return result;
    }

    const deleteData = async(url) => {

        const response = await  fetch(`http://localhost:3042${url}`, {
            "method" : "DELETE",
            "headers": {
                "Authorization": `Bearer ${token}`
            },
            "body" : data
        })

        const result = await response.json();
        
        setData(result.data)

        navigate(0)

        return result;
    }

    

    return {
        data,
        fetchData,
        postData,
        putData,
        deleteData
    }

    
}

export default useFetch;