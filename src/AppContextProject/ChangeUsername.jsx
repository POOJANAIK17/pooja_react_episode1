import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

function ChangeUsername() {
    const [ newUsername, setNewUsername] = useState("")
    const {setUsername} = useContext(AppContext);
    const newName = () => {
        setUsername(newUsername);
    }
    return (
        <>
        <div>Change Username by entering a new one</div>
        <input onChange={(event) => {setNewUsername(event.target.value)}}></input>
        <button onClick={newName}>Change</button>
        </>
    )
}

export default ChangeUsername