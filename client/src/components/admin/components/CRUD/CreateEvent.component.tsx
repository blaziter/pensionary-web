import axios from 'axios';
import React, { useState } from 'react';
import Menu from '../Menu';
import Nav from '../Nav';

const CreateEvent = () => {
    const [announcement, setAnnouncement] = useState({
        TITLE: '',
        ANNOUNCEMENT: ''
    })
    const [warning, setWarning] = useState(false);
    const [errTitle, setErrTitle] = useState(false);
    const [errAnnouncement, setErrAnnouncement] = useState(false);

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
                console.log(res);
            })
    }

    return (
        <>
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

                        <button className='button crud float-right margin-top-10px' onClick={handleSubmit}>
                            Vytvořit událost
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateEvent;