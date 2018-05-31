import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';

export default class InfoHeader extends Component {
    render({src, odd, imgBorder}) {
        const classNames = classnames(st.infoHeader, {
            [st.odd]: odd,
            [st.even]: !odd
        });
        const imgClassNames = classnames(st.infoImg, {
            [st.border]: imgBorder
        });
        return (
            <div className={classNames}>
                <img className={imgClassNames} src={src} />
            </div>
        );
    }
}
