import { Component } from 'preact';
import style from './style.scss';
import Container from '../../components/Container';
import topics from '../topics/TopicsArray';
import TopicInfo from '../../components/TopicInfo';
import { getItemById } from '../../helpers'

export default class Topic extends Component {
    render({url}) {
        const topic = getItemById(url, topics);
        return (
            <Container>
                <TopicInfo topic={topic} />
            </Container>
        )
    }
}
