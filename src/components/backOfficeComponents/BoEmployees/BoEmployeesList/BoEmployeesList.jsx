import { useEffect, useState } from "react";
import styles from "./BoEmployeesList.module.css";
import useFetch from "../../../../hooks/useFetch";
import BoEmployeeTemplate from "../BoEmployeeTemplate/BoEmployeeTemplate";


const BoEmployeesList = ()=>{

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

            <h2>Medarbejdere</h2>

            <table>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Stilling</th>
                        <th>Billede</th>
                        <th>Handlinger</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map( (employee) => {
                        return <tr key={employee._id} className={styles.employee}>
                            <BoEmployeeTemplate employee={employee}></BoEmployeeTemplate>
                        </tr>
                    } )}
                </tbody>
            </table>
        
        </div>
    )
}

export default BoEmployeesList