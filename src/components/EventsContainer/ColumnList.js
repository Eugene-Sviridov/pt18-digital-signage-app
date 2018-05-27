import { Component } from 'preact';
import st from './style.scss';
import ColumnElement from './ColumnElement';

export default class EventList extends Component {
    render() {
        const { elements } = this.props;
        return (
            <ul className={st.eventList}>
                {elements.map((el, index) => (
                    <li class={st.eventListEl} key={index}>
                        <ColumnElement el={el} />
                    </li>
                ))}
            </ul>
        );
    }
}