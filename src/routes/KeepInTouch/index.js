import { Component } from 'preact';
import PrizesHOC from '../../components/PrizesHOC';

export default class KeepInTouch extends Component {
    render({goToPage}) {
        return (
            <PrizesHOC
                title="keep in touch"
                subtitle="opt-in to our mailing list via the iPad at the entrance to be entered into the prize draw"
                items={[
                    {
                        img: '/assets/prizes/nomad_wallet.png',
                        title: '1st prize',
                        info: 'Nomad wireless wallet'
                    }
                ]}
                goToPage={goToPage}
            />
        );
    }
}
