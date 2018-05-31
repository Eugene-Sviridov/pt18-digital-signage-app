
import { Component } from 'preact';
import style from './style.scss';

export default class ItemTitle extends Component {
    render({text}) {
        return (
            <div class={style.itemTitle}>
                <span class={style.text}>{text}</span>
            </div>
        )
    }
}
