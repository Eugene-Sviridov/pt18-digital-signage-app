import { Component } from 'preact';
import style from './style';

export default class Plan extends Component {
    render({src}) {
        return (
            <div class={style.plan}>
                <img src={src} />
            </div>
        )
    }
}
