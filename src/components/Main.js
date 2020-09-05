import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="Content">
            <div className="Header">
                <div className="Layer">
                    Events
                </div>
            </div>
            <div className="Body">
                <ul className="Events">
                    <li>
                        <span className="Event">Live music</span>
                        <span className="Time">11:30PM</span>
                        <span className="Action">&#10007;</span>
                    </li>
                    <li>
                        <span className="Event">Live music</span>
                        <span className="Time">11:30PM</span>
                        <span className="Action">&#10007;</span>
                    </li>
                    <li>
                        <span className="Event">Live music</span>
                        <span className="Time">11:30PM</span>
                        <span className="Action">&#10007;</span>
                    </li>
                    <li>
                        <span className="Event">Live music</span>
                        <span className="Time">11:30PM</span>
                        <span className="Action">&#10007;</span>
                    </li>
                </ul>
                <div className="AddEvent">
                    <form>
                        <input className="eventFiled" type="text" name="newevent" placeholder="New Event" />
                        <input className="eventTime" type="text" name="newevent" placeholder="Time" />
                        <button className="submitBtn">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;