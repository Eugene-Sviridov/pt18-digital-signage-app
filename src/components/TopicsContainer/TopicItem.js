import { Component } from 'preact';
import style from './style.scss';
import ItemTitle from './ItemTitle';
import { route } from 'preact-router';
import { getRoutePath } from '../../helpers';

export default class TopicItem extends Component {
    render({src, text, id}) {
        const onItemTitleClick = () => {
            route(getRoutePath(`topic/${id}`));
        }

        return (
            <div class={style.itemContainer} onClick={onItemTitleClick}>
                <img src={src} />
                <ItemTitle text={text} id={id} />
            </div>
        )
    }
}
