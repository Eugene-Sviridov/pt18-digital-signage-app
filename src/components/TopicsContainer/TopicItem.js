import { Component } from 'preact';
import style from './style.scss';
import ItemTitle from './ItemTitle';
import { route } from 'preact-router';
import { getRoutePath } from '../../helpers';

export default class TopicItem extends Component {
    render({src, text, id, goToPage}) {
        const onItemTitleClick = () => {
            goToPage(getRoutePath(`topic/${id}`), {
                isInnerPageIn: true,
                isInnerPageOut: false
            }, 1000);
        }

        return (
            <div className={style.itemContainer} onClick={onItemTitleClick}>
                <div className={style.itemImg}>
                    <img src={src} />
                </div>
                <ItemTitle text={text} id={id} />
            </div>
        )
    }
}
