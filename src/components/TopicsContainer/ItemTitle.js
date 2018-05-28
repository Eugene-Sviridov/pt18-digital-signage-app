
import { Component } from 'preact';
import style from './style.scss';
import { Link } from 'preact-router/match';

export default class ItemTitle extends Component {
    render({text, href}) {
        return (
            <Link class={style.itemTitle} href={href}>
                <span class={style.text}>{text}</span>
            </Link>
        )
    }
}
