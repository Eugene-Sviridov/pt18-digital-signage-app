import { Component } from 'preact';
import st from './style.scss';
import { getRoutePath } from '../../helpers';

class PrizesList extends Component {
    onClick = () => {
        this.props.goToPage(getRoutePath(`drone-racing`), {
            isInnerPageIn: true,
            isInnerPageOut: false
        }, 1000);
    }
    render({goToPage}) {
        return (
            <div className={st.prizesList}>
                <div className={st.prizesListHeader}>
                    <p>this year at pt18 we’re giving more prizes away than ever before want to win?</p>
                    <p>click below to find out more on what you need to do to win?</p>
                </div>
                <div className={st.prizesListButtons}>
                    <button className={st.prizesListButton} onClick={this.onClick}>vendor giveaway</button>
                    <button className={st.prizesListButton} onClick={this.onClick}>social post</button>
                    <button className={st.prizesListButton} onClick={this.onClick}>raffle</button>
                    <button className={st.prizesListButton} onClick={this.onClick}>mailing opt-in</button>
                </div>
            </div>
        )
    }
}

export default PrizesList;