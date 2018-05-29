import { Component } from 'preact';
import style from './style.scss';
import TopicItem from './TopicItem';

export default class TopicsContainer extends Component {
    constructor() {
        super();

        this.topics = [
            {
                src: '../../assets/topics/Advanced_Machine_Learning.svg',
                text: 'AI & Advanced Machine Learning.',
                id: '1'
            },
            {
                src: '../../assets/topics/augmented_virtual_reality.svg',
                text: 'augmented and virtual reality.',
                id: '2'
            },
            {
                src: '../../assets/topics/blockchain.svg',
                text: 'blockchain.',
                id: '3'
            },
            {
                src: '../../assets/topics/drones.svg',
                text: 'drones.',
                id: '4'
            },
            {
                src: '../../assets/topics/hyperconvergence.svg',
                text: 'hyperconvergence.',
                id: '5'
            },
            {
                src: '../../assets/topics/things_of_interest.svg',
                text: 'things of interest.',
                id: '6'
            },
            {
                src: '../../assets/topics/mobility.svg',
                text: 'mobility.',
                id: '7'
            },
            {
                src: '../../assets/topics/security.svg',
                text: 'security.',
                v: '8'
            },
            {
                src: '../../assets/topics/communications.svg',
                text: 'communications.',
                id: '9'
            }
        ]
    }

    render() {
        return (
            <div class={style.topicsContainer}>
                {
                    this.topics.map((topic) => (
                        <TopicItem src={topic.src} text={topic.text} id={topic.id} />
                    ))
                }
            </div>
        )
    }
}
