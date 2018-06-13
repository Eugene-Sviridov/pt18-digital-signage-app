import { Component } from 'preact';
import Container from '../../components/Container';
import PrizesInfo from '../../components/PrizesInfo';

export default class DroneRacing extends Component {
    render({goToPage}) {
        return (
            <Container
                noBackground
                text="drone racing"
            >
                <PrizesInfo goToPage={goToPage} />
            </Container>
        );
    }
}
