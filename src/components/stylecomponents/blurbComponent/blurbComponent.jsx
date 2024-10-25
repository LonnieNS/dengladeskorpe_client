import styles from "./blurbComponent.module.css";

const BlurbComponent = ({blurbHeading, blurbParagraph}) => {

    return (
        <div className={styles.container}>

            <h2 className={styles.blurbHeading}>
                {blurbHeading}
            </h2>
            <p className={styles.blurbParagraph}>
                {blurbParagraph}
            </p>

        </div>
    )
}

export default BlurbComponent;