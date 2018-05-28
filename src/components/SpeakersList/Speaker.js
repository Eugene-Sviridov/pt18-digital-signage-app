import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';
import { route } from 'preact-router';
import { getRoutePath } from '../../helpers';

const Speaker = ({speaker, odd}) => {
    const {id, name, title, titleImg, photo} = speaker;
    const classNames = classnames(st.speaker, {
        [st.odd]: odd,
        [st.even]: !odd
    });

    const onSpeakerClick = () => {
        route(getRoutePath(`speaker/${id}`));
    };

    return (
        <div className={classNames} onClick={onSpeakerClick}>
            <div className={st.speakerInfo}>
                <div class={st.speakerName}>{name}</div>
                <div className={st.speakerTitle}>
                    { title && <span> {title} </span>}
                    { titleImg && <img src={titleImg} />}
                </div>
            </div>
            <img className={st.speakerImg} src={photo} />
        </div>
    )
};

export default Speaker;