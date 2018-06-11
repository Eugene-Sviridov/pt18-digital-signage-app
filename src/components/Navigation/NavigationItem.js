import { Component } from 'preact';
import style from './style.scss';
import { getRoutePath } from '../../helpers';

export default class NavigationItem extends Component {
    navigate = (href) => {
        this.props.goToPage(getRoutePath(href), {
            isPageIn: true,
            isPageOut: false
        }, 1000);
    }
    render({src, href, title, goToPage}) {
        return (
            <button className={style.navigationItem} onClick={() => this.navigate(href)}>
                <img src={src} />
            </button>
        )
    }
}