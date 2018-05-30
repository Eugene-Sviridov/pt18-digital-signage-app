import { Component } from 'preact';
import st from './style.scss';
import Container from '../../components/Container';
import speakers from '../Speakers/SpeakersArray';
import SpeakerInfo from '../../components/SpeakerInfo';
import { getItemById } from '../../helpers'

export default class Speaker extends Component {
    render({url}) {
        const speaker = getItemById(url, speakers);
        return (
            <Container>
                <SpeakerInfo speaker={speaker} />
            </Container>
        )
    }
}
