import { useEffect, useState } from "react";
import styles from "./EditEmployee.module.css";
import useFetch from "../../../../hooks/useFetch";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";


const EditEmployee = () => {

    //States

    const [image, setImage] = useState("http://localhost:3042/employees/no-employee.jpg")
    const [employee, setEmployee] = useState({})
    const [employees, setEmployees] = useState([])

    // Egne Hooks
    const {putData, fetchData, data} = useFetch();

    //React Router
    const {id} = useParams();
    const navigate = useNavigate();

    //React Hook Forms
    const { register, handleSubmit, setValue, formState: { errors }  } = useForm({defaultValues:{
        name: "",
        position: "", 
        image: "",
    
    }})

    //Data

    useEffect( () => {

        fetchData(`/employee/${id}`);
        
    }, [])

    useEffect( () => {

        setEmployee(data)

        if(employee[0] !== undefined){
            setValue('name', employee[0].name)
            setValue('position', employee[0].position)
            setValue('image', employee[0].image)

            //Visuelt. Retter billede i formularen til medarbejderens nuværende billede.
            setImage(employee[0].image)
        }

    }, [data])

    //Funktioner

    const onImageChange = async (e) => {

        if(e.target.files.length > 0)
        {
            let objectUrl = window.URL.createObjectURL(e.target.files[0])
            setImage(objectUrl);
        }
        
    }

    const updateUser = async (formData) => {

        putData('/employee', formData)

        let employeeIndex=employees.findIndex(obj => obj._id == formData.get("id"));
        employees[employeeIndex] = data;
    
        setEmployees([
            ...employees,
        ])
    }

    const onHandleSubmit = (formData) => {

        const data = new FormData()

        for (const key in formData) {
        
            if(key === "file"){
                data.append(key, formData[key][0])
            } else {
                data.append(key, formData[key])
            }
        }
    
        data.append("id", id);
    
        updateUser(data)

        //Sender brugeren tilbage til oversigten
        navigate("/backoffice/employees");
     
    }


    return(
        <div className={styles.container}>
            <h2>Rediger medarbejder</h2>

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                <label>
                    Navn
                        <input type="text" {...register("name", {minLength:{
                            value: 2,
                            message: "Medarbejderens navn skal være på mindst 2 karakterer",
                        }})}>
                        </input>
                </label>
                    
                    <label>
                        Stilling
                        <input type="text" {...register("position", {minLength:{
                            value: 5,
                            message: "Stillingen skal være på mindst 5 karakterer",
                        }})}>
                        </input>
                    </label>

                    <label>
                        Billede <br></br>
                        {image ? <img src={image} width={"100px"} ></img> : "Intet billede valgt"}
                        <input className={styles.imageInput}
                        type="file"
                        name="file"
                        {...register("file", {
                            onChange : (e) => onImageChange(e)
                        })}
                        />
                        </label>
                    <input type="submit" value="Send"></input>
                    {errors.name && <p>{errors.name?.message}</p>}
                    {errors.position && <p>{errors.position?.message}</p>}
                
                </form>
            </div>
        </div>
    )
}

export default EditEmployee;