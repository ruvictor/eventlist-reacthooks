import React, {useState, useContext} from 'react';
import './Main.css';
import Event from './Event/Event';
import { GlobalContext } from '../context/GlobalState';

const Main = () => {
    // hooks
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');

    const { addEvent } = useContext(GlobalContext);
    const { events } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            event,
            time
        }

        addEvent(newEvent);

        // restet the form
        setEvent('');
        setTime('');
      }

    return (
        <div className="Content">
            <div className="Header">
                <div className="Layer">
                    Events
                </div>
            </div>
            <div className="Body">
                <ul className="Events">
                    {events.map(item => (<Event key={item.id} item={item} />))}
                </ul>
                <div className="AddEvent">
                    <form onSubmit={onSubmit}>
                        <input className="eventFiled" value={event} type="text" onChange={(e) => setEvent(e.target.value)} placeholder="New Event" />
                        <input className="eventTime" value={time} type="text" onChange={(e) => setTime(e.target.value)} placeholder="Time" />
                        <button className="submitBtn">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;