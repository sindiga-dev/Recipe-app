import React, {useState, useEffect} from "react";
import Item from "../../components/Item/Item";
import styles from "./Form.module.css";

const Form = () => {
    const [inputValue, setInputValue] = useState("");
    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(inputValue);
        setInputValue("");
    };

    useEffect(() => {
        const getItems = async () => {
            try{
            const result = await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            if (Response.ok) {
                const data = await result.json();
                setItems(data.meals);
                console.log(data.meals);
            }
            else {
                throw new Error("Ooops Request Failed");
            }
        } catch (error) {
            console.log(error);
        }
        };

        getItems();
    }, [query]);
    return(
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for a meal"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <input type="submit" value="Search" />
            </form>
            
            <div className={styles.container}>
                {items.map((item) => {
                return (
                    <Item
                    key={item.idMeal}
                    title={item.strMeal}
                    image={item.strMealThumb}
                    category={item.strCategory}
                    instructions={item.strInstructions}
                    />
                );
            })}
            </div>
        </div>
    );
};

export default Form;
//debugged line 33
