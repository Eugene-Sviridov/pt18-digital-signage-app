import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';
import InfoHeader from './InfoHeader';
import InfoDescription from './InfoDescription';

export default class Info extends Component {
    render({item, odd, imgBorder}) {
        const {src, title, smallTitle, name, info} = item;
        return (
            <div class={st.infoContainer}>
                <InfoHeader src={src} odd={odd} imgBorder={imgBorder}/>
                <InfoDescription
                    name={name}
                    title={title}
                    smallTitle={smallTitle}
                    info={info}
                    odd={odd}
                />
            </div>
        )
    }
}
