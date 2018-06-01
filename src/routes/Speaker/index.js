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
            <Container
                shape
                secondStyle={speaker.id % 2 === 0}
                thirdStyle={speaker.id % 2 !== 0}
            >
                <SpeakerInfo speaker={speaker} />
            </Container>
        )
    }
}
