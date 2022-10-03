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
        const fetchItems = async () => {
            const result = await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await result.json();
            setItems(data.items);
        };
        fetchItems();
    }