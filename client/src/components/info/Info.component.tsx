import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import InfoFooter from "../footer/InfoFooter";
import Card from "./components/Card";

const Info = () => {
    const max = 30;
    const [time, setTime] = useState(30);
    const [change, setChange] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            let currentSecs = time;
            setTime(--currentSecs);
            if (currentSecs <= 0) setChange(true);
        }, 1000);
        return () => clearInterval(interval);
    });

    return(
        <>
            {change && <Navigate to='/events' />}
            <div className='info-container has-text-centered font'>
                <h1 className="title info-title">Info Náš tým</h1>
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
                <InfoFooter />
            </div>
        </>
    );
}

export default Info;