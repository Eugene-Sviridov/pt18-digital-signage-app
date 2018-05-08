import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class ButtonBack extends Component {
    render() {
        return (
            <button type="button" class={style.btnBack}>
                <img src="assets/icons/back-icon.svg" />
            </button>
        )
    }
}