import styles from "./BOEmployees.module.css";
import BoEmployeesList from "../../../components/backOfficeComponents/BoEmployees/BoEmployeesList/BoEmployeesList";
import AddEmployee from "../../../components/backOfficeComponents/BoEmployees/AddEmployee/AddEmployee";

const BOEmployees = () => {

    return (
        <div className={styles.container}>
            <div className={styles.tableContainer}>
                <BoEmployeesList></BoEmployeesList>
            </div>
            <div className={styles.formContainer}>
                <AddEmployee></AddEmployee>
            </div>
        </div>
    );
};

export default BOEmployees;