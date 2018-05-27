import { Component } from 'preact';
import st from './style.scss';
import ColumnList from './ColumnList';

export default class EventColumn extends Component {
    render() {
        const { title, elements } = this.props;
        return (
            <div className={st.col}>
                <div className={st.colTitle}>{title}</div>
                <ColumnList elements={elements} />
            </div>
        )
    }
}