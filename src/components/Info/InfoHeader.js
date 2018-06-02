import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';

export default class InfoHeader extends Component {
    render({src, odd, imgBorder}) {
        const classNames = classnames(st.infoHeader, {
            [st.odd]: odd,
            [st.even]: !odd
        });
        return (
            <div className={classNames}>
                <div className={st.imgWrapper}>
                    <img className={st.infoImg} src={src} />
                </div>
            </div>
        );
    }
}
