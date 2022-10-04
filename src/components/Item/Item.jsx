import React, {useState} from "react";
import styles from "./Item.module.css";
import Modal from "../..components/Modal/Modal.jsx";

const MenuItem=({image, title, category, instructions}) => {
    
    const [show, setShow] = useState(false);
    return(
        <div className={styles.card}>
            <h3 className={styles.title}>Name: {title}</h3>
                <img className={styles.image} src={image} alt="meal" />
                <p>category: {category}</p>
                <button onClick={() => setShow(true)}>View recipe</button>
                <Modal
                    show={show}
                    onClose={() => setShow(false)}
                    modalImg={image}
                    modalTitle={title}
                    modalInstructions={instructions}
                />
        </div>
        
    );
};
//Debugged line 7: const MenuItem=({image, title, category, instructions}) => //had names my app in small letters

export default MenuItem;
