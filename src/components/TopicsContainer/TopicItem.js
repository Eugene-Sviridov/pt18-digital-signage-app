import { Component } from 'preact';
import style from './style.scss';
import ItemTitle from './ItemTitle';

export default class TopicItem extends Component {
    render({src, text, href}) {
        return (
            <div class={style.itemContainer}>
                <img src={src} />
                <ItemTitle text={text} href={href} />
            </div>
        )
    }
}
