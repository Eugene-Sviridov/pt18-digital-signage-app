import { Component } from 'preact';
import PrizesHOC from '../../components/PrizesHOC';

export default class Raffle extends Component {
    render({goToPage}) {
        return (
            <PrizesHOC
                title="candlelighters raffle"
                subtitle="purchase a candlelighters raffle ticket to be in with a chance of winning some great prizes."
                items={[
                    {
                        img: '/assets/prizes/6car_track_day.png',
                        title: '1st prize',
                        info: '6x car track day.'
                    },
                    {
                        img: '/assets/prizes/theman_behind_the_curtain.png',
                        title: '2nd prize',
                        info: '£200 Man Behind The Curtain Voucher'
                    }
                ]}
                goToPage={goToPage}
            />
        );
    }
}
