import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <>
            <div className='navbar admin-navbar'>
                <div className="admin-brand">
                    <div className="admin-brand-item">
                        Zdravotně sociální služby Turnov
                    </div>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>
                <div className="navbar-start">
                    <NavLink className="admin-item" to='/admin'>
                        Home
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <div className='dropdown is-right is-active'>
                        <div className='dropdown-trigger'>
                            <button className='button' aria-haspopup='true' aria-controls='dropdown-menu4'>
                                <span>Admin</span>
                                <span className='icon is-small'>
                                    <i className='fas fa-angle-down' aria-hidden='true' />
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    <a href='http://localhost:8080/api/auth/logout' className="dropdown-item">
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