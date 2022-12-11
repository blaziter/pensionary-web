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

    const handleChange = (e: any) => {
        setAnnouncement({ ...announcement, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        announcement.ANNOUNCEMENT.length > 255 ? setWarning(true) : setWarning(false);
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
                                    <input name='TITLE' className='input' type='text' placeholder='Název události' onChange={e => handleChange(e)} />
                                </div>
                            </div>
                            <div className='field'>
                                <label className='label'>Popis události</label>
                                <div className='control'>
                                    <textarea name='ANNOUNCEMENT' className='textarea' placeholder='Popis události' maxLength={255} onChange={e => handleChange(e)} />
                                </div>
                            </div>
                        </form>
                        {warning && <p className='warning'>Popis události nesmí být delší než 255 znaků!</p>}
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