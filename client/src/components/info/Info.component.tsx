import InfoFooter from "../footer/InfoFooter";
import Card from "./components/Card";

const Info = () => {
    return(
        <>
            <div className='info-container has-text-centered font'>
                <h1 className="title info-title">Náš tým</h1>
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