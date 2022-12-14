import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tile from "./components/Tile";

interface IMember {
    ROLE: string
}

const Dashboard = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState(0);
    const [nurses, setNurses] = useState(0);
    const [announcements, setAnnouncements] = useState(0);
    const [members, setMembers] = useState<IMember[]>([]);
    const [admins, setAdmins] = useState(0);

    useEffect(() => {
        axios.defaults.withCredentials=true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/all`, { withCredentials: true })
        .then(async res => setMembers(await res.data))
    }, [])

    useEffect(() => {
        axios.defaults.withCredentials=true;
        axios.get(`${import.meta.env.VITE_API_URL}/announcement/all`, { withCredentials: true })
        .then(async res => setAnnouncements(await res.data.length))
    })

    useEffect(() => {
        axios.defaults.withCredentials=true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/?group=ROLE&data=doctor`, { withCredentials: true })
        .then(async res => setDoctors(await res.data.length))
    })

    useEffect(() => {
        axios.defaults.withCredentials=true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/?group=ROLE&data=nurse`, { withCredentials: true })
        .then(async res => setNurses(await res.data.length))
    })

    useEffect(() => {
        axios.defaults.withCredentials=true;
        axios.get(`${import.meta.env.VITE_API_URL}/user/all`, { withCredentials: true })
        .then(async res => setAdmins(await res.data.length))
    })

    return (
        <>
            <nav className='breadcumb' aria-label='breadcrumbs'>
                
            </nav>
            <div className='tile is-ancestor has-text-centered align-items-center'>
                <Tile onClick={() => navigate('/table/administration/page/1')} title='Vedení' subtitle={members.filter(member => member.ROLE != 'doctor' && member.ROLE != 'nurse').length}/>
                <Tile onClick={() => navigate('/table/doctor/page/1')} title='Lékaři' subtitle={doctors} />
                <Tile onClick={() => navigate('/table/nurse/page/1')} title='Sestřičky' subtitle={nurses}/>
                <Tile onClick={() => navigate('/table/announcements/page/1')} title='Události' subtitle={announcements}/>
                <Tile onClick={() => navigate('/table/admin/page/1')} title='Správci' subtitle={admins}/>
            </div>
        </>
    );
}

export default Dashboard;