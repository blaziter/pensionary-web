import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import Nav from '../Nav';

const CreateEvent = () => {
    const navigate = useNavigate();
    const [announcement, setAnnouncement] = useState({
        TITLE: '',
        ANNOUNCEMENT: ''
    })
    const [warning, setWarning] = useState(false);
    const [errTitle, setErrTitle] = useState(false);
    const [errAnnouncement, setErrAnnouncement] = useState(false);
    const [status, setStatus] = useState('');
    const [redir, setRedir] = useState(false);

    const handleChange = (e: any) => {
        setAnnouncement({ ...announcement, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (announcement.TITLE == '') setErrTitle(true);
        if (announcement.ANNOUNCEMENT == '') return setErrAnnouncement(true);
        if (announcement.ANNOUNCEMENT == '' && announcement.TITLE == '') {
            setErrTitle(true);
            setErrAnnouncement(true);
            return
        }
        if (announcement.ANNOUNCEMENT.length > 255) return setWarning(true);
        axios.defaults.withCredentials = true;
        axios.post(`${import.meta.env.VITE_API_URL}/announcement/new`, announcement, { withCredentials: true })
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
                                    <input name='TITLE' className={errTitle ? 'input is-danger' : 'input'} type='text' placeholder='Název události' onChange={e => {
                                        setErrTitle(false);
                                        handleChange(e)
                                    }
                                    } />
                                </div>
                            </div>
                            <div className='field'>
                                <label className='label'>Popis události</label>
                                <div className='control'>
                                    <textarea name='ANNOUNCEMENT' className={errAnnouncement ? 'textarea is-danger' : 'textarea'} placeholder='Popis události' maxLength={255} onChange={e => {
                                        setErrAnnouncement(false);
                                        handleChange(e)
                                    }
                                    } />
                                </div>
                            </div>
                        </form>

                        {warning && <p className='has-text-danger'>Popis události nesmí být delší než 255 znaků!</p>}
                        {errTitle ? <p className='has-text-danger'>Název události nesmí být prázdný!</p> : null}
                        {errAnnouncement ? <p className='has-text-danger'>Popis události nesmí být prázdný!</p> : null}
                        {status == 'success' ? <p className='has-text-success'>Událost byla úspěšně přidána, přesměrování bude za 3 sekundy</p> : status == 'error' ? <p className='has-text-danger'>Nepodařilo se přidat událost</p> : null}

                        <button className='button crud float-right margin-top-10px' onClick={handleSubmit} disabled={status == 'success' ? true : false}>
                            Vytvořit událost
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateEvent;