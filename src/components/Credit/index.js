import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';

const Credit = ({ url }) => {
    const urlWithWhiteCredit = [
        '/',
        '/agenda',
        '/vendors',
        '/prizes',
        '/drone-racing'
    ];

    const isWhiteCreditShouldBeRendered = (url) => {
        return urlWithWhiteCredit.indexOf(url) >= 0;
    }

    const imgSrc = isWhiteCreditShouldBeRendered(url) ? '/assets/credit-white.png' : '/assets/credit-black.png';

    const classNames = classnames(st.credit, {
        [st.white]: isWhiteCreditShouldBeRendered(url)
    });
    
    return (
        <div className={classNames}>
            <span>created by</span>
            <img src={imgSrc} />
        </div>
    )
}

export default Credit;