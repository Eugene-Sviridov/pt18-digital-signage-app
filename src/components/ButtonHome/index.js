import { Component } from 'preact';
import style from './style.css';

export default class ButtonHome extends Component {
    render() {
        return (
            <button type="button" class={style.btnHome}>
                <img src="assets/icons/home-icon.svg" />
            </button>
        )
    }
}