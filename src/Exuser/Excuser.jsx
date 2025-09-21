import axios from "axios";
import {useState} from 'react';
function Excuser() {
    const [excuse, setExcuse] = useState("")
    const [category, setCategory] = useState("")
    const [inputCategory, setInputCategory] = useState("")

    const generateExcuse = () => {
        
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res) => {
            setExcuse(res.data[0]?.excuse || "No excuse found");
            console.log(category)
            setInputCategory(category)
        });
        setCategory("");
    }
    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
        setInputCategory(selectedCategory)
        axios
        .get(`https://excuser-three.vercel.app/v1/excuse/${selectedCategory}/`)
        .then((res) => {
            setExcuse(res.data[0]?.excuse || "No excuse found");
        })
        .catch((err) => {
            console.error("API Error:", err);
            setExcuse("Failed to fetch excuse.");
        });
    };
    const getCategory = (event) => {
        const category = event.target.value.toLowerCase()
        setCategory(category);
        setInputCategory(category)
    }
    return (

    <>
        <p>Input Category for which you want to find excuse for. These are the list of categories available</p>
        <div>
            <button onClick={() => handleCategoryClick("family")}>Family</button>
            <button onClick={() => handleCategoryClick("office")}>Office</button>
            <button onClick={() => handleCategoryClick("children")}>Children</button>
            <button onClick={() => handleCategoryClick("college")}>College</button>
            <button onClick={() => handleCategoryClick("party")}>Party</button>
            <button onClick={() => handleCategoryClick("funny")}>Funny</button>
            <button onClick={() => handleCategoryClick("gaming")}>Gaming</button>
            <button onClick={() => handleCategoryClick("unbelievable")}>Unbelievable</button>
            <button onClick={() => handleCategoryClick("developers")}>Developers</button>
        </div>
        <input value={category} placeholder="Eg: Family" onChange={getCategory}/>
        <button onClick={generateExcuse}>Generate Excuse</button>
        <h1>{excuse}</h1>
        {inputCategory && <h3>Here is the category you chose: {inputCategory}</h3>}
        
        {console.log(excuse)}
    </>
    );
}
export default Excuser;