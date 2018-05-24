import { Component } from 'preact';
import style from './style.scss';
import { Link } from 'preact-router/match';

export default class NavigationItem extends Component {
    render({src, href, title}) {
        return (
            <Link className={style.navigationItem} href={`/${href}`}>
                <img src={src} />
            </Link>
        )
    }
}