import { Component } from 'preact';
import style from './style.scss';
import Container from '../../components/Container';
import topicsArray from '../Topics/TopicsArray';
import TopicInfo from '../../components/TopicInfo';
import { getItemById } from '../../helpers'

export default class Topic extends Component {
    render({url}) {
        const currentTopic = getItemById(url, topicsArray);
        return (
            <Container>
                <TopicInfo topic={currentTopic} />
            </Container>
        )
    }
}
