import { Component } from 'preact';
import style from './style.scss';

export default class Title extends Component {
    render({src, text}) {
        return (
            <div class={style.title}>
                <span class={style.text}>{text}</span>
            </div>
        )
    }
}
