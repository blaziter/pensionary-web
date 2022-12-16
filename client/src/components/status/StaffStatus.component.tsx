import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsCheckLg, BsFillInfoCircleFill, BsXLg } from 'react-icons/bs';
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
                    <div className='card'>
                        <div className='card-header'>
                            <div className='date-holder'><p className='date'>Dnešní datum: </p> <p className='date'>{currentDate}</p> <p className='date time'>{currentTime}</p></div>
                        </div>
                        <div className='card-content'>
                            <div className="content">
                                <div className='card'>
                                    {
                                        staff.filter(employee => employee.ROLE != 'doctor' && employee.ROLE != 'nurse').map((employee) => {
                                            return (
                                                <div className='director'>
                                                    <p className='director-role'>{employee.ROLE == 'chairman' ? 'Ředitel/ka' : employee.ROLE == 'vice chairman' ? 'Zástupce ředitele' : employee.ROLE == 'head nurse' ? 'Vedoucí sestra' : employee.ROLE == 'social worker' ? 'Sociální pracovník' : null}</p>
                                                    <p className='director-name'>{employee.PREFIX} {employee.NAME.split(' ')[0].charAt(0)}. {employee.NAME.split(' ')[1]}</p>
                                                    {
                                                        employee.AVAILABILITY == 1 ?
                                                            <>
                                                                <p className='employee-text available'>Dostupný/á</p><BsCheckLg className='employee-text available' size='1.5em' />
                                                            </>
                                                            :
                                                            <>
                                                                <p className='employee-text unavailable'>Nedostupný/á</p><BsXLg className='employee-text unavailable' size='1.5em' />
                                                            </>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containers general-nurse'>
                    <div className='card'>
                        <div className='card-header'>
                            <p>Všeobecné sestry</p>
                        </div>
                        <div className='card-content'>
                            <div className="content">
                                <div className='general-nurse-info'>
                                    <div className="card status-items">
                                        <div className="day-title">Denní</div>
                                        <div className="day-body">
                                            {
                                                
                                            }
                                        </div>
                                    </div>
                                    <div className="card status-items">
                                        <div className="night-title">Noční</div>
                                        <div className="night-body">
                                            {

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containers village'>
                    <div className='card'>
                        <div className='card-header'>
                            <p>Vesnička</p> <p>Vedoucí oddělení: { }</p>
                        </div>
                        <div className='card-content'>
                            <div className="content">
                                <div className='general-nurse-info'>
                                    <div className="card status-items">
                                        <div className="cart-content">
                                            <div className="content">
                                                <div className="day-title">Denní</div>
                                                <div className="day-body">
                                                    {

                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card status-items">
                                        <div className="night-title">Noční</div>
                                        <div className="night-body">
                                            {

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containers first-floor'>
                    <div className='card is-warning'>
                        <div className='card-header'>
                            <p>1. patro</p> <p>Vedoucí oddělení: { }</p>
                        </div>
                        <div className='card-content'>
                            <div className="content">
                                <div className='general-nurse-info'>
                                    <div className="card status-items">
                                        <div className="day-title">Denní</div>
                                        <div className="day-body">
                                            {

                                            }
                                        </div>
                                    </div>
                                    <div className="card status-items">
                                        <div className="night-title">Noční</div>
                                        <div className="night-body">
                                            {

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containers ground-floor'>
                    <div className='card'>
                        <div className='card-header'>
                            <p>Přízemí</p> <p>Vedoucí oddělení: { }</p>
                        </div>
                        <div className='card-content'>
                            <div className="content">
                                <div className='general-nurse-info'>
                                    <div className="card status-items">
                                        <div className="day-title">Denní</div>
                                        {

                                        }
                                    </div>
                                    <div className="card status-items">
                                        <div className="night-title">Noční</div>
                                        <div className="night-body">
                                            {

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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