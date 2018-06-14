import { Component } from 'preact';
import st from './style.scss';
import EventColumn from './EventColumn';

export default class EventsContainer extends Component {
    events = [
        {
            time: '09:15 - 09:30',
            title: 'event opens'
        },
        {
            time: '10:00 - 10:15',
            title: 'keynote'
        },
        {
            time: '10:15 - 10:45',
            title: 'Jamie Bartlett'
        },
        {
            time: '10:45 - 11:15',
            title: 'Sarah Shields, Dell EMC'
        },
        {
            time: '11:15 - 12:00',
            title: 'hands-on-tech'
        },
        {
            time: '12:00 - 13:00',
            title: 'lunch'
        },
        {
            time: '13:00 - 13:30',
            title: 'Neil Sawyer, HP'
        },
        {
            time: '13:30 - 14:15',
            title: 'hands-on-tech'
        },
        {
            time: '14:15 - 14:45',
            title: 'David Tweedale + Liam Hopwood, Mimecast'
        },
        {
            time: '14:45 - 15:15',
            title: 'Will Greenwood'
        },
        {
            time: '15:15 - 15:30',
            title: 'photos'
        },
        {
            time: '15:30 - 16:00',
            title: 'event close + prizes'
        },
        {
            time: '19:00 - 00:30',
            title: 'after party'
        },
    ]
    constructor() {
        super();

        this.times = this.events.map((event) => event.time);
        this.titles = this.events.map((event) => event.title);
    }
    render() {
        return (
            <div className={st.eventsContainer}>
                <div class={st.colWrapper}>
                    <EventColumn title="time." elements={this.times} />
                    <EventColumn title="event." elements={this.titles} /> 
                </div>
            </div>
        );
    }
}