import { Component } from 'preact';
import Container from '../../components/Container';
import SpeakersList from '../../components/SpeakersList';
import speakers from './SpeakersArray.js';

export default class Speakers extends Component {
    render({goToPage}) {
        return (
            <Container
                text="speakers"
                shape
                firstStyle
            >
                <SpeakersList goToPage={goToPage} speakers={speakers} />
            </Container>
        );
    }
}
