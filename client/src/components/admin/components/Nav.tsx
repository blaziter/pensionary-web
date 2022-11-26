import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {

    /*const logOut = () => {
        axios.defaults.withCredentials = true;
        axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
    }*/

    return (
        <>
            <div className='navbar admin-navbar'>
                <Link className="admin-brand" to='/admin'>
                    Zdravotně sociální služby Turnov
                </Link>
                <div className="navbar-start">
                    <NavLink className="admin-item" to='/admin'>
                        Home
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <div className='dropdown is-right is-active user-menu'>
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
                                    <a href={`${process.env.REACT_APP_API_URL}/auth/logout`} className="dropdown-item">
                                        Log Out
                                    </a>
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