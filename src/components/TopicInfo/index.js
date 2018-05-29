import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';

export default class TopicInfo extends Component {
    render() {
        const classNames = classnames(st.speaker, st.even);
        const photo = "../../assets/topics/Advanced_Machine_Learning.svg";
        return (
            <div className={classNames}>
                <img className={st.speakerImg} src={photo} />
            </div>
        );
    }
}
