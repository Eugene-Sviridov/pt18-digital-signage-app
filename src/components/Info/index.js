import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';
import InfoHeader from './InfoHeader';

export default class Info extends Component {
    render({topic}) {
        const {id, src, text} = topic;
        return (
            <div class={st.infoContainer}>
                <InfoHeader src={src} odd={id % 2 !== 0} />
            </div>
        )
    }
}
