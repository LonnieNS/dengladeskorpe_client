import { useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import styles from "./contactForm.module.css";
import { icons } from '../../services/icons';
import { useState } from "react";


const ContactForm = () => {

    //states
    const [confirmed, setConfirmed] = useState(false);
    const [senderName, setSenderName] = useState('')

    //Egne Hooks
    const {postData} = useFetch();

    //React Hook Form
    const { register, handleSubmit, reset, formState: { errors }} = useForm({defaultValues:{
    
        name: "",
        subject: "", 
        description: "",
    
    }})

    const msgSent =  confirmed ? styles.sent : styles.hidden;

    const sendMessage = async (formData) => {
        postData('/message', formData)
    }

    const onHandleSubmit = async (formData) => {
    
        const data = new FormData()
        
        for (const key in formData) {
        
                data.append(key, formData[key])
        }

        sendMessage(data)
        reset();
        setConfirmed(true)
        setSenderName(formData.name)
        console.log(senderName)
        };

    return (
        <div className={styles.container}>
            <div className={`${msgSent}`}>
                <div className={styles.msgOverlay}>
                <div className={styles.iconPosition}>
                    <div onClick={() => setConfirmed(false)}>{icons['Close']}</div>
                </div>
                <div className={styles.banner}>
                    <p>Tak for din besked {senderName}! <br></br>
                    Vi vender tilbage hurtigst muligt!</p>
                    
                </div>
                </div>
            
            </div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <label className="altTextStyle">
                    Navn
                    <input type="text" {...register("name", {required: "Du skal indtaste dit navn"})}></input>
                </label>
                {errors.name && <p>{errors.name?.message}</p>}
                <label className="altTextStyle">
                    Emne
                    <input type="text" {...register("subject", {required: "Du skal indtaste et emne"})}></input>
                    {errors.subject && <p>{errors.subject?.message}</p>}
                    <label className="altTextStyle">
                    Beskrivelse
                    <textarea
                        {...register("description",  {required: "Indtast venligst din besked "})}
                        />
                </label>
                {errors.description && <p>{errors.description?.message}</p>}
                </label>
                <input type="submit" value="Send" className={styles.button}></input>
            </form>

            

        </div>
    )
}

export default ContactForm;