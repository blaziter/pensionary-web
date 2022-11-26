import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Table = () => {
    const { role } = useParams();
    const [searchRole, setSearchRole] = useState('');
    const [employees, setEmployees] = useState(['ahoj', 'nazdar', 'cau']);

    useEffect(() => {
        /*axios.get(`${process.env.REACT_APP_API_URL}/employee/${role}`)
            .then(async res => {
                await setEmployees(res.data.employees);
            });*/
    }, [role]);

    const handleDelete = (id: string) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/employee/${id}`)
        .then(async res => {
            await setEmployees(res.data.employees);
        });
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
                        <table className='table'>
                            <thead>
                                <th>Akademický titul</th>
                                <th>Neakademický titul</th>
                                <th>Jméno a příjmení</th>
                                <th>Role</th>
                                <th>Dostupnost</th>
                                <th>Správa</th>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => {
                                        return (
                                            <tr>
                                                <td><p className='admin-value'>RNDr.</p></td>
                                                <td><p className='admin-value'></p></td>
                                                <td><p className='admin-value'>Iva Lišková</p></td>
                                                <td><p className='admin-value'>Doktorka</p></td>
                                                <td><p className='admin-value'>Dostupná</p></td>
                                                <td>
                                                    <div className='button-holder'>
                                                        <Link to='edit'><button className='button admin-edit'><AiFillEdit /></button></Link>
                                                        <button className='button admin-edit' onClick={() => {}}><AiFillDelete /></button>
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
        </>
    );
}

export default Table;