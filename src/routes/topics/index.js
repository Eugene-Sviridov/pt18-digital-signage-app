import { Component } from 'preact';
import style from './style.scss';
import Container from '../../components/Container';
import TopicsContainer from '../../components/TopicsContainer';
import topicsArray from './TopicsArray.js';

export default class Topics extends Component {
    render() {
        return (
            <Container
                text="topics"
            >
              <TopicsContainer topics={topicsArray}/>
            </Container>
        )
    }
}
