import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';

export default class InfoDescription extends Component {
    render({name, title, smallTitle, info, odd}) {
        const classNames = classnames(st.descriptionWrapper, {
            [st.odd]: odd,
            [st.even]: !odd
        });
        return (
            <div className={st.descriptionContainer}>
                <div className={classNames}>
                    <div className={st.name}>{name}</div>
                    <div className={st.title}>{title}</div>
                    <div className={st.smallTitle}>{smallTitle}</div>
                    <div className={st.info}>{info}</div>
                </div>
            </div>
        );
    }
}
