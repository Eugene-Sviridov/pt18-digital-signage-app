import { Component } from 'preact';
import PrizesHOC from '../../components/PrizesHOC';

export default class DroneRacing extends Component {
    render({goToPage}) {
        return (
            <PrizesHOC
                title="drone racing"
                subtitle="Place 1st, 2nd or 3rd in the DJI drone race to win a prize."
                items={[
                    {
                        img: '/assets/prizes/DJI_Trello.png',
                        title: '1st prize',
                        info: 'DJI Tello Drone'
                    },
                    {
                        img: '/assets/prizes/the_ivy_.png',
                        title: '2nd prize',
                        info: '£100 voucher for Ivy York'
                    },
                    {
                        img: '/assets/prizes/Canon_printer.png',
                        title: '3rd prize',
                        info: 'Canon printer'
                    }
                ]}
                goToPage={goToPage}
            />
        );
    }
}
