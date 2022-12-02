import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import EventFooter from "../footer/EventFooter";
import Card from "../info/components/Card";
import Scroll from "../scroll/Scroll";
import { Event } from "./components/Event.component";

interface annoucement {
    title: string,
    description: string,
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
        axios.get(`${process.env.REACT_APP_API_URL}/events`)
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
                <Card title={'Petr Tran'} subtitle={'Stravování'}/>
                <Card title={'Petr Tran'} subtitle={'Smlouvy s klienty'}/>
                <Card title={'Petr Tran'} subtitle={'Sociální záležitosti'}/>
                <Card title={'Petr Tran'} subtitle={'Stížnosti'}/>
                <Card title={'Petr Tran'} subtitle={'Technické záležitosti'}/>
                <Card title={'Petr Tran'} subtitle={'Ošetřovatelská péče'}/>
                <Card title={'Petr Tran'} subtitle={'Manažerka sociální péče'}/>
                <Card title={'Petr Tran'} subtitle={'Vedoucí pracovnice'}/>
                <Card title={'Petr Tran'} subtitle={'Vedoucí sociální péče'}/>
                <Card title={'Petr Tran'} subtitle={'Pokladní pro klienty'}/>
                <Card title={'Petr Tran'} subtitle={'Úřední záležitosti'}/>
                <Card title={'Petr Tran'} subtitle={'Metodička'}/>
                {
                    events.map((event : annoucement) => {
                        return(
                            <>
                                <Event key={event.title} title={event.title} description={event.description} />
                            </>
                        )
                    })
                }
                <EventFooter />
            </div>
        </>
    );
}

export default Events;