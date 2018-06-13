import { Component } from 'preact';
import st from './style.scss';

class PrizesInfo extends Component {
    render({goToPage}) {
        return (
            <div className={st.prizesInfo}>
                <div className={st.prizesInfoHeader}>
                    be the best drone racer
                </div>
                <div className={st.prizesInfoList}>
                    <div className={st.prizesInfoEl}>
                        <div className={st.prizesInfoElImg}>
                            <img src="/assets/prizes/drone.png" />
                        </div>
                        <div className={st.prizesInfoElNumber}>
                            1st prize
                        </div>
                        <div className={st.prizesInfoElInfo}>
                            DJI Tello Drone
                        </div>
                    </div>
                    <div className={st.prizesInfoEl}>
                        <div className={st.prizesInfoElImg}>
                            <img src="/assets/prizes/laptop.png" />
                        </div>
                        <div className={st.prizesInfoElNumber}>
                            2st prize
                        </div>
                        <div className={st.prizesInfoElInfo}>
                            £100 voucher for Ivy York
                        </div>
                    </div>
                    <div className={st.prizesInfoEl}>
                        <div className={st.prizesInfoElImg}>
                            <img src="/assets/prizes/sense.png" />
                        </div>
                        <div className={st.prizesInfoElNumber}>
                            3st prize
                        </div>
                        <div className={st.prizesInfoElInfo}>
                            F-secure Sense
                        </div>
                    </div>

                </div>
                <div className={st.prizesInfoHow}>
                    <div className={st.prizesInfoHowHeader}>how to win?</div>
                    <div className={st.prizesInfoHowInfo}>you can win the social media post Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eum, natus veniam a mollitia vitae vero at quaerat dolore, in odit, suscipit ipsam unde blanditiis.</div>
                </div>
            </div>
        )
    }
}

export default PrizesInfo;