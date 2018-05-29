import { Component } from 'preact';
import style from './style.scss';
import classnames from 'classnames';

export default class FooterColumn extends Component {
    render({logos}) {
        const classname = classnames(style.footerColumn, {
            [style.threeEl]: logos.length === 3
        });
        return (
            <div className={classname}>
                {
                    logos.map((logo) => (
                        <div>
                            <img src={logo} />
                        </div>
                    ))
                }
            </div>
        )
    }
}