// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import EventModal from "./components/EventModal";

const EventTable = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [modal, setModal] = useState(false);
    const [deleteAnnouncement, setDeleteAnnouncement] = useState({});

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/announcement/all`)
            .then(async res => setAnnouncements(await res.data))
    }, []);

    return (
        <>
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <Link to={`/admin/create-event`} className='no-deco'>
                            <button className='button add-employee float-right'>Přidat událost</button>
                        </Link>
                        <table className='table'>
                            <thead>
                                <th>Název události</th>
                                <th>Popis události</th>
                                <th>Správa</th>
                            </thead>
                            <tbody>
                                {
                                    announcements.map(announcement => {
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
            {
                modal ? <EventModal className={modal ? 'is-active' : ''} announcement={deleteAnnouncement}/> : <></>
            }
        </>
    );
}

export default EventTable;