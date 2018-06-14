import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';
import InfoHeader from './InfoHeader';
import InfoDescription from './InfoDescription';

export default class Info extends Component {
    render({item, odd, imgBorder, isSpeaker}) {
        const {src, twitter, title, smallTitle, name, info} = item;
        const containerClassname = classnames(st.infoContainer, {
            [st.isSpeaker]: isSpeaker
        })
        return (
            <div class={containerClassname}>
                <InfoHeader src={src} odd={odd} imgBorder={imgBorder}/>
                <InfoDescription
                    name={name}
                    title={title}
                    smallTitle={smallTitle}
                    info={info}
                    twitter={twitter}
                    odd={odd}
                />
            </div>
        )
    }
}
