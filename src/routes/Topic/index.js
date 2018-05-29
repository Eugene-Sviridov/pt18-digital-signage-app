import { Component } from 'preact';
import style from './style.scss';
import Container from '../../components/Container';
import TopicInfo from '../../components/TopicInfo';

export default class Topic extends Component {

    render() {
        return (
            <Container>
                <TopicInfo />
            </Container>
        )
    }
}
