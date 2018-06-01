import { Component } from 'preact';
import Container from '../../components/Container';
import SpeakersList from '../../components/SpeakersList';
import speakers from './SpeakersArray.js';

export default class Speakers extends Component {
    render() {
        return (
            <Container
                text="speakers"
                shape
                firstStyle
            >
                <SpeakersList speakers={speakers} />
            </Container>
        );
    }
}
