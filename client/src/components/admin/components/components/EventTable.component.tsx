// @ts-nocheck
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Menu from '../Menu';
import Nav from '../Nav';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import EventModal from './components/EventModal';

const EventTable = () => {
    const { role, page } = useParams();
    const [announcements, setAnnouncements] = useState([]);
    const [modal, setModal] = useState(false);
    const [deleteAnnouncement, setDeleteAnnouncement] = useState({});
    const [redir, setRedir] = useState(false);
    const navigate = useNavigate();
    const [maxLength, setMaxLength] = useState(0);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/announcement/all`)
            .then(async res => setAnnouncements(await res.data))
    }, []);

    useEffect(() => {
        if (page < 1 || page == undefined) return setRedir(true);
        setRedir(false)
        setMaxLength(Math.ceil(announcements.length / 10));
        console.log(maxLength)
    }, [role])

    return (
        <>
            {redir && <Navigate to='page/1' replace />}
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <div className='table-container'>
                            <div>
                                <Link to={`/admin/create-event`} className='no-deco'>
                                    <button className='button add-employee float-right'>Přidat událost</button>
                                </Link>
                            </div>
                            <table className='table admin-table'>
                                <thead>
                                    <th>Název události</th>
                                    <th>Popis události</th>
                                    <th>Správa</th>
                                </thead>
                                <tbody>
                                    {
                                        // slice(10 * (page - 1), 10 * page)
                                        announcements.slice(10 * (page - 1), 10 * page).map(announcement => {
                                            return (
                                                <tr key={announcement.ANNOUNCEMENTID}>
                                                    <td><p className='admin-value'>{announcement.TITLE}</p></td>
                                                    <td><p className='admin-value'>{announcement.ANNOUNCEMENT}</p></td>
                                                    <td>
                                                        <div className='button-holder'>
                                                            <Link to={`/admin/edit-event/${announcement.ANNOUNCEMENTID}`}><button className='button admin-edit'><AiFillEdit /></button></Link>
                                                            <button className='button admin-edit' onClick={() => {
                                                                setDeleteAnnouncement(announcement);
                                                                setModal(true);
                                                            }}><AiFillDelete /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <nav className='pagination table-pagination' role='navigation' aria-label='pagination'>
                    {
                        parseInt(page) != 1 ? <a className='pagination-previous table-pagination-previous' onClick={e => navigate('page/' + (parseInt(page) - 1))}>Previous</a> : <></>
                    }
                    {
                        parseInt(page) != maxLength ? <a className='pagination-next table-pagination-next' onClick={e => navigate('page/' + (parseInt(page) + 1))}>Next page</a> : <></>
                    }
                    <ul className='pagination-list table-pagination-list'>
                        {
                            parseInt(page) > 1 &&
                            <li>
                                <p className='pagination-link' aria-label='Goto page 1'>1</p>
                            </li>
                        }
                        {
                            parseInt(page) > 2 &&
                            <>
                                {
                                    parseInt(page) > 3 &&
                                    <li>
                                        <span className='pagination-ellipsis'>&hellip;</span>
                                    </li>
                                }
                                {
                                    parseInt(page) > 2 &&
                                    <li>
                                        <p className='pagination-link' aria-label={`Goto page ` + (parseInt(page) - 1)}>{parseInt(page) - 1}</p>
                                    </li>
                                }
                            </>
                        }
                        <li>
                            <p className='pagination-link is-current' aria-label={'Page ' + parseInt(page)} aria-current='page'>{page}</p>
                        </li>
                        {
                            parseInt(page) < maxLength &&
                            <>
                                {
                                    parseInt(page) < maxLength - 1 &&
                                    <li>
                                        <p className='pagination-link' aria-label={`Goto page ` + (parseInt(page) + 1)}>{parseInt(page) + 1}</p>
                                    </li>
                                }
                                {
                                    parseInt(page) < maxLength - 2 &&
                                    <li>
                                        <span className='pagination-ellipsis'>&hellip;</span>
                                    </li>
                                }
                            </>
                        }
                        {
                            parseInt(page) < maxLength &&
                            <li>
                                <p className='pagination-link' aria-label={`Goto page ` + maxLength}>{maxLength}</p>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
            {
                modal ? <EventModal className={modal ? 'is-active' : ''} announcement={deleteAnnouncement} /> : <></>
            }
        </>
    );
}

export default EventTable;