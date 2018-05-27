import { h, Component } from 'preact';
import style from './style';
import Container from '../../components/Container';
import Plan from '../../components/Plan';
import EventsContainer from '../../components/EventsContainer';

export default class Agenda extends Component {
    render() {
        return (
            <Container
                text="agenda"
            >
                <EventsContainer />
            </Container>

        )
    }
}
