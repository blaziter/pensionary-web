import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsCheckLg, BsFillInfoCircleFill } from 'react-icons/bs';
import Footer from '../footer/Footer';

interface Employee {
    PREFIX: string;
    SUFFIX: string;
    NAME: string;
    ROLE: string;
    AVAILABILITY: number;
    SHIFT: string;
    WORKPLACE: string;
}

const StaffStatus = () => {
    const [staff, setStaff] = useState([] as Employee[]);
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        let finished = false;
        axios.get(`${import.meta.env.VITE_API_URL}/external/all`)
            .then(async (res) => {
                setStaff(await res.data);
            });

        return () => {
            finished = true;
        }
    }, []);

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
            {console.log(staff)}
            <div className='status-container has-text-centered font'>
                <div className='containers directors-container'>
                    <article className='message is-danger'>
                        <div className='message-header'>
                            <div className='date-holder'><p className='date'>Dnešní datum: </p> <p className='date'>{currentDate}</p> <p className='date time'>{currentTime}</p></div>
                        </div>
                        <div className='message-body'>
                            <div className='directors'>
                                {
                                    staff.filter(employee => employee.ROLE != 'doctor' && employee.ROLE != 'nurse').map((employee) => {
                                        return (
                                            <div className='director'>
                                                <p className='director-role'>{employee.ROLE == 'chairman' ? 'Ředitel/ka' : employee.ROLE == 'vice chairman' ? 'Zástupce ředitele' : employee.ROLE == 'head nurse' ? 'Vedoucí sestra' : employee.ROLE == 'social worker' ? 'Sociální pracovník' : null}</p>
                                                <p className='director-name'>{employee.PREFIX} {employee.NAME.split(' ')[0].charAt(0)}. {employee.NAME.split(' ')[1]}</p>
                                                <p className='employee-text available'>Dostupný/á</p><BsCheckLg className='employee-text available' size='1.5em' />
                                            </div>
                                        )
                                    })
                                }
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
                                            <p className='employee-text'>{'Jana'.charAt(0)}. Petrová, {'Jana'.charAt(0)}. Bartoňová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Vanda'.charAt(0)}. Rolincová, {'Eva'.charAt(0)}. Martincová</p>
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
                                            <p className='employee-text'>{'Jana'.charAt(0)}. Petrová, {'Jana'.charAt(0)}. Bartoňová</p>
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
                                            <p className='employee-text'>{'Jana'.charAt(0)}. Petrová, {'Jana'.charAt(0)}. Bartoňová</p>
                                        </div>
                                        <div className='employee'>
                                            <p className='employee-text'>{'Vanda'.charAt(0)}. Rolincová, {'Eva'.charAt(0)}. Martincová</p>
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
                <Footer />
            </div>
        </>
    );
}

/* * headmasters
{
    staff.map(employee => {
        let names = employee.name.split(' ');
        return (
            <>
                <div className='employee'>
                    <p className='employee-text'>{employee.role}</p>
                    <p className='employee-text'>{employee.prefix} {names[0].charAt(0). names[1]} {employee.suffix}</p>
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