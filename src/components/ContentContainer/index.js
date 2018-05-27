import { Component } from 'preact';
import st from './style.scss';

const ContentContainer = (props) => (
    <div className={st.contentContainer}>
        {props.children}
    </div>
);

export default ContentContainer;