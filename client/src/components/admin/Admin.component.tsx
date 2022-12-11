import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Navigate, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import Nav from './components/Nav';

const AdminComponent = () => {
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.post(`${import.meta.env.VITE_API_URL}/auth/verify`, { withCredentials: true })
        .then(res => {
            setLoggedIn(true);
        })
        .catch(err => {
            setLoggedIn(false);
        })
    });

    return (
        <>
            {!loggedIn && <Navigate to='/' replace />}
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <Dashboard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminComponent;