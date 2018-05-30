import { Component } from 'preact';
import Container from '../../components/Container';
import SpeakersList from '../../components/SpeakersList';
import speakers from './SpeakersArray.js';

export default class Speakers extends Component {
    render() {
        console.log(speakers.getSpeakers);
        return (
            <Container
                text="speakers"
            >
                <SpeakersList speakers={speakers} />
            </Container>
        );
    }
}
