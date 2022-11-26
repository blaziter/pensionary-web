import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsCheckLg, BsFillInfoCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import StatusFooter from '../footer/StatusFooter';

interface Employee {
    prefix: string;
    suffix: string;
    firstName: string;
    lastName: string;
    role: string;
    availability: boolean;
}

const StaffStatus = () => {
    const [staff, setStaff] = useState([
        {
            prefix: 'Dr.',
            suffix: '',
            firstName: 'Jan',
            lastName: 'Novák',
            role: 'doctor',
            availability: true
        },
        {
            prefix: 'Dr.',
            suffix: '',
            firstName: 'Jan',
            lastName: 'Novák',
            role: 'doctor',
            availability: true
        }
    ]);
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        /*let finished = false;
        axios.get(`${process.env.REACT_APP_API_URL}/employees`)
            .then(async (res) => {
                const data = await res.data;
                await setStaff(data);
                console.log(staff);
            });

        return () => {
            finished = true;
        }*/
    }, [staff]);

    // useEffect update every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Intl.DateTimeFormat(['ban', 'id']).format(new Date()).replaceAll('/', '. '));
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='info-container has-text-centered font'>
                <div className='containers directors-container'>
                    <article className='message is-danger'>
                        <div className='message-header'>
                            <div className='date-holder'><p className='date'>Dnešní datum: </p> <p className='date'>{currentDate}</p> <p className='date time'>{currentTime}</p></div>
                        </div>
                        <div className='message-body'>
                            <div className='directors'>
                                <div className='employee'>
                                    <p className='employee-text'>Ředitelka</p>
                                    <p className='employee-text'>Bc. {'Renata'.charAt(0)}. Poláková DiS.</p>
                                    <p className='employee-text available'>Dostupný/á</p><BsCheckLg className='employee-text available' size='1.5em' />
                                </div>
                                <div className='employee'>
                                    <p className='employee-text'>Zást. ředitele</p>
                                    <p className='employee-text'>{'Iva'.charAt(0)}. Čermáková</p>
                                    <p className='employee-text available'>Dostupný/á</p><BsCheckLg className='employee-text available' size='1.5em' />
                                </div>
                                <div className='employee'>
                                    <p className='employee-text'>Vedoucí sestra</p>
                                    <p className='employee-text'>{'Sigmund'.charAt(0)}. Rigová</p>
                                    <p className='employee-text available'>Dostupný/á</p><BsCheckLg className='employee-text available' size='1.5em' />
                                </div>
                                <div className='employee'>
                                    <p className='employee-text'>Sociální pracov.</p>
                                    <p className='employee-text'>Bc. {'Klára'.charAt(0)}. Svobodová</p>
                                    <p className='employee-text available'>Dostupný/á</p><BsCheckLg className='employee-text available' size='1.5em' />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className='containers general-nurse'>
                    <article className='message is-warning'>
                        <div className='message-header'>
                            <p>Všeobecné sestry</p>
                        </div>
                        <div className='message-body'>
                            <div className='general-nurse-info'>
                                <div className="day">
                                    <div className="day-title">Denní</div>
                                    <div className="day-body">
                                        <div className='employee'>
                                            <p className='employee-text'>{'Dana'.charAt(0)}. Lehká</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Adéla'.charAt(0)}. Mrkáčková</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="night">
                                    <div className="night-title">Noční</div>
                                    <div className="night-body">
                                        <div className='employee'>
                                            <p className='employee-text'>{'Markéta'.charAt(0)}. Králíková</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className='containers village'>
                    <article className='message is-danger'>
                        <div className='message-header'>
                            <p>Vesnička</p> <p>Vedoucí oddělení: {'Martina'.charAt(0)}. Kubešová</p>
                        </div>
                        <div className='message-body'>
                            <div className='general-nurse-info'>
                                <div className="day">
                                    <div className="day-title">Denní</div>
                                    <div className="day-body">
                                        <div className='employee'>
                                            <p className='employee-text'>{'Jana'.charAt(0)}. Petrová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Jana'.charAt(0)}. Bartoňová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Vanda'.charAt(0)}. Rolincová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Eva'.charAt(0)}. Martincová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Kateřina'.charAt(0)}. Peřinková</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="night">
                                    <div className="night-title">Noční</div>
                                    <div className="night-body">
                                        <div className='employee'>
                                            <p className='employee-text'>{'Simona'.charAt(0)}. Potměšilová</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className='containers first-floor'>
                    <article className='message is-warning'>
                        <div className='message-header'>
                            <p>1. patro</p> <p>Vedoucí oddělení: </p>
                        </div>
                        <div className='message-body'>
                            <div className='general-nurse-info'>
                                <div className="day">
                                    <div className="day-title">Denní</div>
                                    <div className="day-body">
                                        <div className='employee'>
                                            <p className='employee-text'>{'Jana'.charAt(0)}. Petrová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Jana'.charAt(0)}. Bartoňová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Vanda'.charAt(0)}. Rolincová</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="night">
                                    <div className="night-title">Noční</div>
                                    <div className="night-body">
                                        <div className='employee'>
                                            <p className='employee-text'>{'Simona'.charAt(0)}. Potměšilová</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className='containers ground-floor'>
                    <article className='message is-danger'>
                        <div className='message-header'>
                            <p>Přízemí</p> <p>Vedoucí oddělení: </p>
                        </div>
                        <div className='message-body'>
                            <div className='general-nurse-info'>
                                <div className="day">
                                    <div className="day-title">Denní</div>
                                    <div className="day-body">
                                        <div className='employee'>
                                            <p className='employee-text'>{'Jana'.charAt(0)}. Petrová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Jana'.charAt(0)}. Bartoňová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Vanda'.charAt(0)}. Rolincová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Eva'.charAt(0)}. Martincová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Kateřina'.charAt(0)}. Peřinková</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="night">
                                    <div className="night-title">Noční</div>
                                    <div className="night-body">
                                        <div className='employee'>
                                            <p className='employee-text'>{'Simona'.charAt(0)}. Potměšilová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Simona'.charAt(0)}. Potměšilová</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <StatusFooter />
            </div>
        </>
    );
}

/* * headmasters
{
    staff.map(employee => {
        return (
            <>
                <div className='employee'>
                    <p className='employee-text'>{employee.role}</p>
                    <p className='employee-text'>{employee.prefix} {employee.firstName.charAt(0)}. {employee.lastName} {employee.suffix}</p>
                    <p className={employee.availability ? 'employee-text available' : 'employee-text unavailable'}>{employee.availability ? 'Dostupný' : 'Nedostupný'}</p> {employee.availability ? <BsCheckLg className='employee-text available' size='1.5em' /> : null}
                </div>
            </>
        );
    })
}
*/
/* * nurses
{
    staff.map(employee => {
        return (
            <>
                <div className='employee'>
                    <p className='employee-text'>{employee.firstName.charAt(0)}. {employee.lastName} {employee.suffix}</p>
                </div>
            </>
        );
    })
}
*/

export default StaffStatus;