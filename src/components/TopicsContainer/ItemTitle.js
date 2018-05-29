
import { Component } from 'preact';
import style from './style.scss';
import { route } from 'preact-router';
import { getRoutePath } from '../../helpers';

export default class ItemTitle extends Component {
    render({text, id}) {
        const onItemTitleClick = () => {
            route(getRoutePath(`topic/${id}`));
        }

        return (
            <div class={style.itemTitle} onClick={onItemTitleClick}>
                <span class={style.text}>{text}</span>
            </div>
        )
    }
}
