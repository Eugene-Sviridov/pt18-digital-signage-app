import { Component } from 'preact';
import st from './style.scss';
import VendorsList from '../../components/VendorsList';
import Container from '../../components/Container';

export default class Vendors extends Component {
    render() {
        return (
            <Container
                text="vendors"
                noBackground
            >
                <VendorsList />
            </Container>
        );
    }
}
