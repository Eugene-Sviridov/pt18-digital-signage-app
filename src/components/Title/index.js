import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';

export default class Title extends Component {
    render({text, solid}) {
        const classNames = classnames(st.title, {
            [st.solid]: solid
        });
        return (
            <div class={classNames}>
                <span class={st.text}>{text}</span>
            </div>
        )
    }
}
