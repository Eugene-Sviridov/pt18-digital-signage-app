import { h, Component } from 'preact';
import style from './style';
import Container from '../../components/Container';
import EventsContainer from '../../components/EventsContainer';

export default class Agenda extends Component {
    render() {
        return (
            <Container
                text="agenda"
                noBackground
            >
                <EventsContainer />
            </Container>

        )
    }
}
