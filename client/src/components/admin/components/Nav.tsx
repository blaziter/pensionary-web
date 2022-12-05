import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const logOut = () => {
        axios.defaults.withCredentials = true;
        axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, { withCredentials: true })
        .then(res => {
            res.status == 200 ? setRedirect(true) : setRedirect(false); 
        })
    }

    const openNav = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            {redirect && <Navigate to='/' replace />}
            <div className='navbar admin-navbar'>
                <Link className="admin-brand" to='/admin/dashboard'>
                    Zdravotně sociální služby Turnov
                </Link>
                <div className="navbar-start">
                    <NavLink className="admin-item" to='/admin/dashboard'>
                        Home
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <div className={isMenuOpen ? 'dropdown is-right is-active user-menu' : 'dropdown is-right user-menu'} onClick={openNav}>
                        <div className='dropdown-trigger'>
                            <button className='button' aria-haspopup='true' aria-controls='dropdown-menu4'>
                                <span>Admin</span>
                                <span className='icon is-small'>
                                    <i className='fas fa-angle-down' aria-hidden='true' />
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu user-menu-active" id="dropdown-menu4" role="menu">
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    <div className="dropdown-item" onClick={logOut}>
                                        Log Out
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;