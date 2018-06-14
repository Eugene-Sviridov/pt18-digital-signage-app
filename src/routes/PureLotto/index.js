import { Component } from 'preact';
import PrizesHOC from '../../components/PrizesHOC';

export default class PureLotto extends Component {
    render({goToPage}) {
        return (
            <PrizesHOC
                title="pure lotto"
                subtitle="Talk to any of our partners here today and they'll hand you a pure lotto card. Be in with a chance of winning with our random prize draw later this afternoon."
                items={[
                    {
                        img: '/assets/prizes/cyber_essentials.png',
                        title: '1st prize',
                        info: '£300 towards Cyber Essentials certification'
                    },
                    {
                        img: '/assets/prizes/F-secure_sense.png',
                        title: '2nd prize',
                        info: 'Bitdefender BOX 2'
                    },
                    {
                        img: '/assets/prizes/1186d760894399.png',
                        title: '3rd prize',
                        info: 'F-secure Sense'
                    }
                ]}
                goToPage={goToPage}
            />
        );
    }
}
