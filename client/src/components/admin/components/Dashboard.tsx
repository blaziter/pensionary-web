import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tile from "./components/Tile";

const Dashboard = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState(0);
    const [nurses, setNurses] = useState(0);
    const [announcements, setAnnouncements] = useState(0);
    const [admins, setAdmins] = useState(0);

    useEffect(() => {
        axios.defaults.withCredentials=true;
        axios.get(`${import.meta.env.VITE_API_URL}/user/all`, { withCredentials: true })
        .then(res => setAdmins(res.data.length))
    })

    useEffect(() => {
        axios.defaults.withCredentials=true;
        axios.get(`${import.meta.env.VITE_API_URL}/announcement/all`, { withCredentials: true })
        .then(res => setAnnouncements(res.data.length))
        .catch(err => console.log(err))
    })

    useEffect(() => {
        axios.defaults.withCredentials=true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/?group=ROLE&data=doctor`, { withCredentials: true })
        .then(res => setDoctors(res.data.length))
    })

    useEffect(() => {
        axios.defaults.withCredentials=true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/?group=ROLE&data=nurse`, { withCredentials: true })
        .then(res => setNurses(res.data.length))
    })

    return (
        <>
            <nav className='breadcumb' aria-label='breadcrumbs'>
                
            </nav>
            <div className='tile is-ancestor has-text-centered align-items-center'>
                <Tile onClick={() => navigate('/table/doctor')} title='Lékaři' subtitle={doctors} />
                <Tile onClick={() => navigate('/table/nurse')} title='Sestřičky' subtitle={nurses}/>
                <Tile onClick={() => navigate('/table/announcements')} title='Události' subtitle={announcements}/>
                <Tile onClick={() => navigate('/table/admin')} title='Správci' subtitle={admins}/>
            </div>
        </>
    );
}

export default Dashboard;