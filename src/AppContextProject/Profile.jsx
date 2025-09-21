import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import ChangeUsername from './ChangeUsername';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {username} = useContext(AppContext);
    return (
        <div>
            <div>
                <Link to="/profile">Profile</Link>
                <Link to="/UserDetails">UserDetails</Link> </div>
            <h1>This profile belongs to: {username} </h1>
            <ChangeUsername/>
        </div>
    );
}

export default Profile;
