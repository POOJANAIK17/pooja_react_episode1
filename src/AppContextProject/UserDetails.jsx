import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

function UserDetails() {
    const {username} = useContext(AppContext);
  return (
    <div>
        <div>
            <Link to="/profile">Profile</Link>
        <Link to="/UserDet">UserDetails</Link> </div>
        <h1>UserDetails:</h1>
        <h2>Profile created by {username}</h2>
    </div>
  )
}

export default UserDetails