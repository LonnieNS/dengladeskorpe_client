import styles from "./employeeTemplate.module.css";


const EmployeeTemplate = ({employee}) => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={employee.image} />
            </div>
            <div className={styles.name}>{employee.name}</div>
            <div className={styles.position}>{employee.position}</div>

        </div>
    )
}

export default EmployeeTemplate;