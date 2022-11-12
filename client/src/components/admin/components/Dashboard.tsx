import React, { useState } from "react";
import Tile from "./components/Tile";

const Dashboard = () => {

    return (
        <>
            <nav className='breadcumb' aria-label='breadcrumbs'>
                
            </nav>
            <div className='tile is-ancestor has-text-centered align-items-center'>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
        </>
    );
}

export default Dashboard;