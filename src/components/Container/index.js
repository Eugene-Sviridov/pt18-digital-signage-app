import { Component } from 'preact';
import Title from '../Title';

export default class Container extends Component {
    render({text, children}) {
        return (
            <div>
                <Title
                    text={text}
                />
                {children}
            </div>
        )
    }
}
