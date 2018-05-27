import { Component } from 'preact';
import Title from '../Title';

export default class Container extends Component {
    render({src, text, children}) {
        return (
            <div>
                <Title
                    src={src}
                    text={text}
                />
                {children}
            </div>
        )
    }
}
