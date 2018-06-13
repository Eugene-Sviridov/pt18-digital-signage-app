import { Component } from 'preact';
import st from './style.scss';
import { getRoutePath } from '../../helpers';

class PrizesList extends Component {
    onClick = (href) => {
        return () => {
            this.props.goToPage(getRoutePath(href), {
                isInnerPageIn: true,
                isInnerPageOut: false
            }, 1000);
        }
    }
    render({goToPage}) {
        return (
            <div className={st.prizesList}>
                <div className={st.prizesListHeader}>
                    <p>this year at pt18 we’re giving more prizes away than ever before want to win?</p>
                    <p>click below to find out more on what you need to do to win?</p>
                </div>
                <div className={st.prizesListButtons}>
                    <button className={st.prizesListButton} onClick={this.onClick('drone-racing')}>
                            <img src="/assets/prizes-navigation/drone racing@3x.png" />
                    </button>
                    <button className={st.prizesListButton} onClick={this.onClick('social-posts')}>
                            <img src="/assets/prizes-navigation/top 3 social@3x.png" />
                    </button>
                    <button className={st.prizesListButton} onClick={this.onClick('raffle')}>
                            <img src="/assets/prizes-navigation/raffle@3x.png" />
                    </button>
                    <button className={st.prizesListButton} onClick={this.onClick('pure-lotto')}>
                            <img src="/assets/prizes-navigation/pure lotto@3x.png" />
                    </button>
                    <button className={st.prizesListButton} onClick={this.onClick('keep-in-touch')}>
                            <img src="/assets/prizes-navigation/keep in touch@3x.png" />
                    </button>
                </div>
            </div>
        )
    }
}

export default PrizesList;