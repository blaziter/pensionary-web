import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import Nav from '../Nav';

const CreateMember = () => {
    const navigate = useNavigate();
    const [redir, setRedir] = useState(false);
    const [member, setMember] = useState({
        prefix: '',
        suffix: '',
        name: '',
        role: '',
        availability: 0,
        shift: '',
        workplace: '',
        imagename: ''
    })
    const [errName, setErrName] = useState(false);
    const [errRole, setErrRole] = useState(false);
    const [errImage, setErrImage] = useState(false);
    const [status, setStatus] = useState('');
    const [file, setFile] = useState();

    const handleChange = (e: any) => {
        setMember({ ...member, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (member.name === '') {
            setErrName(true);
        }
        if (member.role === '') {
            setErrRole(true);
        }
        if (member.imagename === '') {
            setErrImage(true);
        }
        console.log(member)
        axios.defaults.withCredentials = true;
        axios.post(`${import.meta.env.VITE_API_URL}/employee/new`, member, { withCredentials: true })
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
            const formData = new FormData();
            formData.append('file', file as any)
            console.log(formData)
            axios({
                method: 'post',
                url: `${import.meta.env.VITE_API_URL}/image/upload`,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
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
                        <form className='create-update-container' encType='multipart/form-data'>
                            <div className='field create-field'>
                                <label className='label'>Akademický titul</label>
                                <div className='control'>
                                    <input name='prefix' className='input' type='text' placeholder='MUDr. PaedDr. PhD.' onChange={e => handleChange(e)} />
                                </div>
                            </div>
                            <div className='field create-field'>
                                <label className='label'>Nekademický titul</label>
                                <div className='control'>
                                    <input name='suffix' className='input' type='text' placeholder='DiS.' onChange={e => handleChange(e)} />
                                </div>
                            </div>
                            <div className='field create-field'>
                                <label className='label'>Jméno a příjmení</label>
                                <div className='control'>
                                    <input name='name' className={errName ? 'input is-danger' : 'input'} type='text' placeholder='Jméno a příjmení' onChange={e => {
                                        setErrName(false);
                                        handleChange(e)
                                    }
                                    } />
                                </div>
                            </div>
                            <div className='field create-field'>
                                <label className='label'>Role</label>
                                <div className='control'>
                                    <input name='role' className={errName ? 'input is-danger' : 'input'} type='text' placeholder='Role' onChange={e => {
                                        setErrRole(false);
                                        handleChange(e)
                                    }
                                    } />
                                </div>
                            </div>
                            <div className='field create-field image'>
                                <label className='label'>Obrázek</label>
                                <div className={errImage ? 'file has-name is-danger' : 'file has-name is-success'}>
                                    <label className='file-label'>
                                        <input required className='file-input' type='file' name='imagename' onChange={e => {
                                            setErrImage(false);
                                            if (e.target.files) setMember({ ...member, imagename: e.target.files[0].name })
                                            if (e.target.files) setFile(e.target.files[0] as any)
                                        }} />
                                        <span className='file-cta'>
                                            <span className='file-icon'>
                                                <i className='fas fa-upload'></i>
                                            </span>
                                            <span className='file-label'>
                                                Choose a file…
                                            </span>
                                        </span>
                                        <span className='file-name'>
                                            {member.imagename}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </form>

                        {errName ? <p className='has-text-danger'>Jméno není nastavené!</p> : null}
                        {errRole ? <p className='has-text-danger'>Role není nastavená!</p> : null}
                        {errImage ? <p className='has-text-danger'>Není vložený žádný obrázek</p> : null}
                        {status == 'success' ? <p className='has-text-success'>Člen týmu byl přidán, přesměrování bude za 3 sekundy</p> : status == 'error' ? <p className='has-text-danger'>Nepodařilo se přidat člena týmu</p> : null}

                        <button className='button crud float-right margin-top-10px' onClick={handleSubmit} disabled={status == 'success' ? true : false}>
                            Přidat člena rady
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateMember