import { h, Component } from 'preact';
import style from './style.scss';
import Container from '../../components/Container';
import TopicsContainer from '../../components/TopicsContainer';


export default class Topic extends Component {
    render() {
        return (
            <Container
                text="topics"
            >
            <TopicsContainer />
            </Container>
        )
    }
}
