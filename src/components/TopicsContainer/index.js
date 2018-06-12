import { Component } from 'preact';
import style from './style.scss';
import TopicItem from './TopicItem';

export default class TopicsContainer extends Component {
    render({topics, goToPage}) {
        return (
            <div class={style.topicsContainer}>
                {
                    topics.map((topic) => (
                        <TopicItem src={topic.src} text={topic.title} id={topic.id} goToPage={goToPage} />
                    ))
                }
            </div>
        )
    }
}
