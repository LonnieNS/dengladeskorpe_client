import { useEffect, useState } from "react";
import styles from "./employeesList.module.css";
import useFetch from "../../hooks/useFetch";
import EmployeeTemplate from "../stylecomponents/employeeTemplate/employeeTemplate";

const EmployeesList = () => {

    const [employees, setEmployees] = useState([]);
    const {data, fetchData} = useFetch();


    useEffect( () => {

        fetchData('/employees');

    }, [])

    useEffect( () => {

        setEmployees(data)

    }, [data])

    return (
        <div className={styles.container}>

            {employees.map( (employee) => {

                return <div key={employee._id} className={styles.employee}>
                    <EmployeeTemplate employee={employee}></EmployeeTemplate>
                </div>

                } )}

        </div>
    )
}

export default EmployeesList;