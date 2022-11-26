import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tile from "./components/Tile";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className='breadcumb' aria-label='breadcrumbs'>
                
            </nav>
            <div className='tile is-ancestor has-text-centered align-items-center'>
                <Tile onClick={() => navigate('/table/doctor')} title='Lékaři' subtitle={0} />
                <Tile onClick={() => navigate('/table/nurse')} title='Sestřičky' subtitle={0}/>
                <Tile onClick={() => navigate('/table/admin')} title='Správci' subtitle={0}/>
            </div>
        </>
    );
}

export default Dashboard;