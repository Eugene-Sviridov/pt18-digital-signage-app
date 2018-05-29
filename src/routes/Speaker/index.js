import { Component } from 'preact';
import st from './style.scss';
import Container from '../../components/Container';
import SpeakerInfo from '../../components/SpeakerInfo';

export default class Speaker extends Component {
    render() {
        return (
            <Container>
                <SpeakerInfo />
            </Container>
        )
    }
}