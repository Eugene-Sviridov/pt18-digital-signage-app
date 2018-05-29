import { Component } from 'preact';
import style from './style.scss';
import ItemTitle from './ItemTitle';

export default class TopicItem extends Component {
    render({src, text, id}) {
        return (
            <div class={style.itemContainer}>
                <img src={src} />
                <ItemTitle text={text} id={id} />
            </div>
        )
    }
}
