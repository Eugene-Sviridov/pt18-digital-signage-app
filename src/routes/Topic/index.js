import { Component } from 'preact';
import style from './style.scss';
import Container from '../../components/Container';
import TopicInfo from '../../components/TopicInfo';
import topics from '../topics/TopicsArray';
import Info from '../../components/Info';

export default class Topic extends Component {
    render({url}) {
        const arr = url.split('/');
        const id = arr[2];
        const topic = topics.filter((topic) => topic.id === id)[0];
        return (
            <Container>
                <Info topic={topic} />
            </Container>
        )
    }
}
