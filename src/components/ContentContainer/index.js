import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';

const ContentContainer = ({noBackground, children}) => {
    const classNames = classnames(st.contentContainer, {
        [st.noBackground]: noBackground
    });
    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default ContentContainer;