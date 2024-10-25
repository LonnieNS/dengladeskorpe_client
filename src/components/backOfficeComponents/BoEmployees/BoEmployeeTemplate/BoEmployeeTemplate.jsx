import { Link } from "react-router-dom";
import styles from "./BoEmployeeTemplate.module.css";
import useFetch from "../../../../hooks/useFetch";

const BoEmployeeTemplate = ({employee}) => {

    const {deleteData} = useFetch();

    const deleteEmployee = async (id) => {

        deleteData(`/employee/${id}`)
        
    }

    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td><img src={employee.image} /></td>
            <td className={styles.actions}>
                <Link to ={`/backoffice/employees/edit/${employee._id}`} className={styles.tableBtn}>Rediger</Link>
                <button className={styles.tableBtn} onClick={() => deleteEmployee(employee._id)}>Slet</button>
            </td>
        </>
    )
}

export default BoEmployeeTemplate;