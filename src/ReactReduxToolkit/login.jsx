import {useDispatch, useSelector} from "react-redux"
import { login, logout } from "./userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username)
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate("/Home")}>Go to Home</button>
        <h1>The user is:{username}</h1>
        <input onChange={e => {setNewUsername(e.target.value)}}/>
        <button onClick={()=>{dispatch(login({username: newUsername}))}}>Login</button>
        <button onClick={() => {dispatch(logout())}}>Log out</button>
    </div>
  )
}

export default Login;