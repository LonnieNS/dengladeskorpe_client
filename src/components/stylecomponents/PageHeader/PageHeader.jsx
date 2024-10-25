import styles from "./PageHeader.module.css";

const PageHeader = ({subtitle}) => {

    return (
        <div className={styles.container}>

            <h1 className={styles.headerHeading}>
                <span className={styles.top}>Den</span>
                <span className={styles.middle}>glade</span>
                <span className={styles.bottom}>{subtitle}</span>
            </h1>
            
        </div>
    );
};

export default PageHeader;