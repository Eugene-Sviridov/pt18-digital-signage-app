import { Component } from 'preact';
import st from './style.scss';
import Info from '../Info';

export default class TopicInfo extends Component {
    render({topic}) {
        const odd = true;
        const imgBorder = true;
        return (
            <Info item={topic} odd={odd} imgBorder={imgBorder}/>
        );
    }
}
