import { h, Component } from 'preact';
import style from './style';
import Container from '../../components/Container';
import Plan from '../../components/Plan';

export default class Agenda extends Component {
    render() {
        return (
            <Container
                src="assets/title/tab.png"
                text="agenda"
            >
                <Plan src="assets/agenda/agenda.png" />
            </Container>

        )
    }
}
