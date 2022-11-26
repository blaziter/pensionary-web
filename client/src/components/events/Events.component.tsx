import EventFooter from "../footer/EventFooter";
import { Event } from "./components/Event.component";

const Events = () => {
    return (
        <>
            <div className='event-container has-text-centered font'>
                <Event title={'title'} description={'desc'} />
                <EventFooter />
            </div>
        </>
    );
}

export default Events;