import { Component } from 'preact';
import style from './style.scss';

export default class ButtonHome extends Component {
    render({src, onClick}) {
        return (
            <button type="button" className={style.btnHeader} onClick={onClick}>
                <img src={src} />
            </button>
        )
    }
}