import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';
import InfoHeader from './InfoHeader';

export default class Info extends Component {
    render({item, odd}) {
        const {src} = item;
        return (
            <div class={st.infoContainer}>
                <InfoHeader src={src} odd={odd} />
            </div>
        )
    }
}
