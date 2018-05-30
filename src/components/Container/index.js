import { Component } from 'preact';
import Title from '../Title';
import st from './style.scss';
import classnames from 'classnames';

const Container = ({text, noBackground, children}) => {
    const classNames = classnames(st.container, {
        [st.noBackground]: noBackground
    });

    return (
        <div class={classNames}>
            { text && <Title text={text} solid={noBackground} /> }
            {children}
        </div>
    )
};

export default Container;