import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";

const Table = () => {
    const { role } = useParams();
    const [searchRole, setSearchRole] = useState('');
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/employee/${role}`)
            .then(async res => {
                await setEmployees(res.data.employees);
            });
    }, [role]);

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
                                <th>Titul/y před jménem</th>
                                <th>Titul/y za jménem</th>
                                <th>Jméno</th>
                                <th>Role</th>
                                <th>Dostupnost</th>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => {
                                        return (
                                            <>
                                            </>
                                        )
                                    }
                                    )
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