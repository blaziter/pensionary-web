import React, { useState } from "react";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

const AdminComponent = () => {

    return (
        <>
            <Nav />
            <div className="section">
                <div className="columns">
                    <div className="column is-2">
                        <Menu />
                    </div>
                    <div className="column is-10">
                        <Dashboard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminComponent;