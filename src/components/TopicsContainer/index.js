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
                href: ''
            },
            {
                src: '../../assets/topics/augmented_virtual_reality.svg',
                text: 'augmented and virtual reality.',
                href: ''
            },
            {
                src: '../../assets/topics/blockchain.svg',
                text: 'blockchain.',
                href: ''
            },
            {
                src: '../../assets/topics/drones.svg',
                text: 'drones.',
                href: ''
            },
            {
                src: '../../assets/topics/hyperconvergence.svg',
                text: 'hyperconvergence.',
                href: ''
            },
            {
                src: '../../assets/topics/things_of_interest.svg',
                text: 'things of interest.',
                href: ''
            },
            {
                src: '../../assets/topics/mobility.svg',
                text: 'mobility.',
                href: ''
            },
            {
                src: '../../assets/topics/security.svg',
                text: 'security.',
                href: ''
            },
            {
                src: '../../assets/topics/communications.svg',
                text: 'communications.',
                href: ''
            }
        ]
    }

    render() {
        return (
            <div class={style.topicsContainer}>
                {
                    this.topics.map((topic) => (
                        <TopicItem src={topic.src} text={topic.text} href={topic.href} />
                    ))
                }
            </div>
        )
    }
}
