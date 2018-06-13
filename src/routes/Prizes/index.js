import { Component } from 'preact';
import Container from '../../components/Container';
import PrizesList from '../../components/PrizesList';

export default class Prizes extends Component {
    render({goToPage}) {
        return (
            <Container
                noBackground
                text="prizes"
            >
                <PrizesList goToPage={goToPage} />
            </Container>
        );
    }
}
