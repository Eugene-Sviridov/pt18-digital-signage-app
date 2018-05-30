import { Component } from 'preact';
import st from './style.scss';
import classnames from 'classnames';

export default class TopicInfo extends Component {
    render() {
        const classNames = classnames(st.topic, st.odd);
        const photo = "../../assets/topics/Advanced_Machine_Learning.svg";
        return (
            <div class={st.topicContainer}>
              <div className={classNames}>
                  <img className={st.topicImg} src={photo} />
              </div>
            </div>
        );
    }
}
