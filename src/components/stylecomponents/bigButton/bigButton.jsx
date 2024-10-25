import styles from "./bigButton.module.css";

const BigButton = ({text}) => {

    return (
        <div className={styles.container}>
            {text}
        </div>
    )
}

export default BigButton;