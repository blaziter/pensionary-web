import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Card from "../info/components/Card";
import Scroll from "../scroll/Scroll";
import { Event } from "./components/Event.component";

interface annoucement {
    title: string,
    description: string,
    date: Date,
}

const Events = () => {
    const [events, setEvents] = useState([]);
    const max = 30;
    const [time, setTime] = useState(30);
    const [change, setChange] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            let currentSecs = time;
            setTime(currentSecs-0.01);
            if (currentSecs <= 0) setChange(true);
        }, 10);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/announcement/all`)
            .then(async res => {
                setEvents(await res.data);
            })
    }, [])

    return (
        <>
            {change && <Navigate to='/info' />}
            <div className='event-container has-text-centered font'>
                <h1 className="title info-title">Události</h1>
                <progress className="progress is-danger is-large" value={time} max={max}></progress>
                {
                    events && events.slice(0, 8).map((event : annoucement) => {
                        return(
                            <>
                                <Event className={event.date ? 'is-warning' : 'is-primary'} key={event.title} title={event.title} description={event.description} />
                            </>
                        )
                    })
                }
                <Footer />
            </div>
        </>
    );
}

export default Events;