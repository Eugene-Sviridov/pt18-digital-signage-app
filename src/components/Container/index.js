import { Component } from 'preact';
import Title from '../Title';
import st from './style.scss';
import classnames from 'classnames';

const Container = ({text, noBackground, firstStyle, secondStyle, thirdStyle, shape, children}) => {
    const classNames = classnames(st.container, {
        [st.noBackground]: noBackground,
        [st.backgroundFirst]: shape && firstStyle,
        [st.backgroundSecond]: shape && secondStyle,
        [st.backgroundThird]: shape && thirdStyle
    });

    return (
        <div class={classNames}>
            {
                shape && <img className={`${st.shape} ${st.shapeLeft}`} src="/assets/shape.png" />
            }
            {
                shape && <img className={`${st.shape} ${st.shapeRight}`} src="/assets/shape.png" />
            }
            { text && <Title text={text} solid={noBackground} /> }
            {children}
        </div>
    )
};

export default Container;