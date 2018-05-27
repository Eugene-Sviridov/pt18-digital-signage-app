import { Component } from 'preact';
import style from './style.scss';
import { Link } from 'preact-router/match';
import { getRoutePath } from '../../helpers';

export default class NavigationItem extends Component {
    render({src, href, title}) {
        return (
            <Link className={style.navigationItem} href={getRoutePath(href)}>
                <img src={src} />
            </Link>
        )
    }
}