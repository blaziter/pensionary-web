import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";

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
        workplace: ''
    })
    const [errName, setErrName] = useState(false);
    const [errRole, setErrRole] = useState(false);
    const [status, setStatus] = useState('');

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
                        <form className='create-update-container'>
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
                        </form>
                        
                        {errName ? <p className='has-text-danger'>Jméno není nastavené!</p> : null}
                        {errRole ? <p className='has-text-danger'>Role není nastavená!</p> : null}
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