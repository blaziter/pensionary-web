import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Card from "./components/Card";

interface Contact {
    NAME: string,
    ROLE: string,
    IMAGENAME: string,
}

const Info = () => {
    const max = 30;
    const [time, setTime] = useState(30);
    const [change, setChange] = useState(false);
    const [data, setData] = useState<Contact[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            let currentSecs = time;
            setTime(currentSecs-0.01);
            if (currentSecs <= 0) setChange(true);
        }, 10);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/employee/all`)
            .then(async res => {
                setData(await res.data)
            })
    }, [])

    return(
        <>
            {change && <Navigate to='/events' />}
            <div className='info-container has-text-centered font'>
                <h1 className="title info-title">Info Náš tým</h1>
                <progress className="progress is-danger is-large" value={time} max={max}></progress>
                {
                    data && data.filter(employee => employee.ROLE != 'doctor' && employee.ROLE != 'nurse' && employee.ROLE != 'chairman' && employee.ROLE != 'vice chairman' && employee.ROLE != 'head nurse' && employee.ROLE != 'social worker').map((contact : Contact) => {
                        return(
                            <Card title={contact.NAME} subtitle={contact.ROLE} image={contact.IMAGENAME} />
                        )
                    })
                }
                <Footer />
            </div>
        </>
    );
}

export default Info;