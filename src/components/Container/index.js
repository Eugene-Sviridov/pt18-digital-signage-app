import { Component } from 'preact';
import style from './style';
import Title from '../Title';

export default class Container extends Component {
    render({src, text, children}) {
        return (
            <div class={style.container}>
                <Title
                    src={src}
                    text={text}
                />
                {children}
            </div>
        )
    }
}
