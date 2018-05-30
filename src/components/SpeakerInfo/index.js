import { Component } from 'preact';
import st from './style.scss';
import Info from '../Info';

export default class SpeakerInfo extends Component {
    render({speaker}) {
        const odd = speaker.id % 2 !== 0;
        return (
            <Info item={speaker} odd={odd} />
        );
    }
}
