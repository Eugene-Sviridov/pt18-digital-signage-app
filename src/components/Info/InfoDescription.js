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
                    <p className={st.name}>{name}</p>
                    <p className={st.title}>{title}</p>
                    <p className={st.smallTitle}>{smallTitle}</p>
                    <p className={st.info}>{info}</p>
                </div>
            </div>
        );
    }
}
