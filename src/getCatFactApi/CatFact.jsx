import axios from "axios";
import { useEffect, useState} from 'react';
function CatFact () {
    const [catFact, setCatFact] = useState("")
    const getCatfact = () => {
        axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        });
    }
    
    useEffect(() => { 
        getCatfact();
    }, [])
    return (
        <div>
            <button onClick={getCatfact}>generate cat fact</button>
            <p>{catFact}</p>
        </div>
    );
}
export default CatFact;