import axios from "axios";
import {useState} from 'react';
function PredictAgeApi () {
    const [getName, setGetName] = useState("");
    const [getAge, setGetAge] = useState(null)
    const fetchAge = () => {
        axios.get(`https://api.agify.io/?name=${getName}`).then((res) => {
            setGetAge(res.data)
        });
    };
    const inputchange = (event) => {
        const val = event.target.value
        setGetName(val);
    }
    return (
        <>
            <input onChange={inputchange}></input>
            <button onClick={fetchAge}>Predict Age</button>
            {getAge && (
                <>
                <p>Name: <b>{getAge.name}</b></p>
                <p>Age: <b>{getAge.age}</b></p>
                </>
            )}
        </>
    );

}
export default PredictAgeApi;