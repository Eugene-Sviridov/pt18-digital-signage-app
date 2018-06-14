import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';

export default class InfoDescription extends Component {
    render({name, title, twitter, smallTitle, info, odd}) {
        const classNames = classnames(st.descriptionWrapper, {
            [st.odd]: odd,
            [st.even]: !odd
        });
        return (
            <div className={st.descriptionContainer}>
                <div className={classNames}>
                    <div className={st.name}>
                        <span>{name}</span>
                    </div>
                    {twitter && <div className={st.twitter}>{twitter}</div>}
                    {title && <div className={st.title}>{title}</div>}
                    <div className={st.smallTitle}>{smallTitle}</div>
                    <div className={st.info}>{info}</div>
                </div>
            </div>
        );
    }
}
