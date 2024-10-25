import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./signInForm.module.css"

const SignInForm = () => {

    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const {email, password} = e.target.elements;
        let result = await signIn(email.value, password.value);

        navigate("/backoffice/employees");
    };

    return (
        <div className={styles.container}>

            <h2>Log ind for at tilgå backoffice</h2>
             <form onSubmit={handleSubmit}>

                <label>
                    Email
                    <input type="text" name="email" defaultValue="admin@mediacollege.dk"></input>
                </label>

                <label>
                    Password
                    <input type="password" name="password"></input>
                </label>

                <button type="submit">Log ind</button>{' '}

            </form>
        </div>
    )
}

export default SignInForm;