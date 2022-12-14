//@ts-nocheck
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../Menu';
import Nav from '../Nav';

const UpdateEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [announcement, setAnnouncement] = useState({
        TITLE: '',
        ANNOUNCEMENT: ''
    })
    const [status, setStatus] = useState('');
    const [redir, setRedir] = useState(false);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/announcement/all`, { withCredentials: true })
            .then(res => {
                res.data.map(async announcement => {
                    if (announcement.ANNOUNCEMENTID.trim() === id) {
                        announcement.ANNOUNCEMENTID = id;
                        setAnnouncement(await announcement);
                    }
                })
            })
    }, [])

    const handleChange = (e: any) => {
        setAnnouncement({ ...announcement, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.put(`${import.meta.env.VITE_API_URL}/announcement/${id}/edit`, announcement, { withCredentials: true })
            .then(res => {
                if (res.status == 200) {
                    setStatus('success');
                    setTimeout(() => {
                        setRedir(true);
                    }, 3000)
                }
            })
            .catch(err => {
                setStatus('error');
            })
    }

    return (
        <>
            {redir ? navigate(-1) : null}
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <form>
                            <div className='field'>
                                <label className='label'>Název události</label>
                                <div className='control'>
                                    <input name='TITLE' className='input' type='text' placeholder={announcement.TITLE} />
                                </div>
                            </div>
                            <div className='field'>
                                <label className='label'>Popis události</label>
                                <div className='control'>
                                    <textarea name='ANNOUNCEMENT' className='textarea' placeholder={announcement.ANNOUNCEMENT} maxLength={255} />
                                </div>
                            </div>
                        </form>
                        {
                            status == 'success' ? <p className='has-text-success'>Událost byla úspěšně upravena, přesměrování bude za 3 sekundy</p> : status == 'error' ? <p className='has-text-danger'>Nezdařila se úprava události</p> : null
                        }
                        <button className='button crud float-right margin-top-10px' disabled={status == 'success' ? true : false}>
                            Upravit událost
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateEvent;