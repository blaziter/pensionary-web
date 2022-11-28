import EventFooter from "../footer/EventFooter";
import { Event } from "./components/Event.component";

const Events = () => {
    return (
        <>
            <div className='event-container has-text-centered font'>
                <Event title={'title'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo quaerat quasi at cumque. Ducimus rerum hic maiores inventore. Sequi autem explicabo expedita assumenda enim illum, laudantium ea mollitia nostrum beatae. Debitis ipsum culpa ipsa, ducimu'} />
                <EventFooter />
            </div>
        </>
    );
}

export default Events;