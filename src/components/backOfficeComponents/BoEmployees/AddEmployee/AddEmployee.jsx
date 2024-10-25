import { useState } from "react";
import styles from "./AddEmployee.module.css";
import { useForm } from "react-hook-form";
import useFetch from "../../../../hooks/useFetch";


const AddEmployee = () => {

    const [image, setImage] = useState("http://localhost:3042/employees/no-employee.jpg")
    
    //Egne Hooks
    const {postData} = useFetch();

     //React Hook Form
    const { register, handleSubmit, reset, formState: { errors } } = useForm({defaultValues:{
        
        name: "",
        position: "", 
        image: "",
    
    }})

    const createNewEmployee = async (formData) => {
            postData('/employee', formData)
    }

    const onImageChange = async (e) => {

        if(e.target.files.length > 0)
        {
            let objectUrl = window.URL.createObjectURL(e.target.files[0])
            setImage(objectUrl);
        }
        
    }

    const onHandleSubmit = async (formData) => {
        
        const data = new FormData()
        
        for (const key in formData) {
        
            if(key === "file"){
                data.append(key, formData[key][0])
            } else {
                data.append(key, formData[key])
            }
        }

        createNewEmployee(data)
        reset();
    };

    return (
        <div className={styles.container}>
            <h2>Tilføj medarbejder</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <label>
                    Navn <br></br>
                    <input type="text" {...register("name", {required: "Du skal indtaste medarbejderens navn", minLength:{
                        value: 2,
                        message: "Medarbejderens navn skal være på mindst 2 karakterer",
                    }})}></input>
                </label>

                <label>
                    Stilling <br></br>
                    <input type="text" {...register("position", {required: "Du skal indtaste medarbejderens Jobtitel", minLength:{
                        value: 5,
                        message: "Stillingen skal være på mindst 5 karakterer",
                    }})}></input>
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
                </label><br></br>

                <button className={styles.formBtn} type="submit">Opret</button>
                {errors.name && <p>{errors.name?.message}</p>}
                {errors.position && <p>{errors.position?.message}</p>}
            </form>



        </div>
    )
}

export default AddEmployee;