import React, {useState} from "react";
import styles from "./Item.module.css";
import Mode from "../../components/Mode/Mode";

const manuItem=({image, title, category, instructions}) => {
    const [show, setShow] = useState(false);
    return(
        <div className={styles.card}>
            <h3 className={styles.title}>Name: {title}</h3>
                <img className={styles.image} src={image} alt={meal} />
                <p>category: {category}</p>
                <button onClick={() => setShow(true)}>View recipe</button>
                
                <Mode />
            </div>
        </div>
    );
}
