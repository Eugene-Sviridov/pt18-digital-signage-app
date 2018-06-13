import { Component } from 'preact';
import PrizesHOC from '../../components/PrizesHOC';

export default class SocialPosts extends Component {
    render({goToPage}) {
        return (
            <PrizesHOC
                title="top 3 social posts"
                subtitle="post to our social wall on twitter with #pt18 to be in with a chance to win."
                items={[
                    {
                        img: '/assets/prizes/DELL_v_laptop.png',
                        title: '1st prize',
                        info: 'Dell Vestro laptop'
                    },
                    {
                        img: '/assets/prizes/XYZ_3d_printer.png',
                        title: '2nd prize',
                        info: 'XYZ 3D printer'
                    },
                    {
                        img: '/assets/prizes/Beats_X_.png',
                        title: '3rd prize',
                        info: 'Beats X earphones'
                    }
                ]}
                goToPage={goToPage}
            />
        );
    }
}
