import { Component } from 'preact';
import st from './style.scss';

class PrizesInfo extends Component {
    render({subtitle, items, goToPage}) {
        return (
            <div className={st.prizesInfo}>
                <div className={st.prizesInfoHeader}>
                    {subtitle}
                </div>
                <div className={st.prizesInfoList}>
                    {
                        items.map((item, i) => (
                            <div className={st.prizesInfoEl} key={i}>
                                <div className={st.prizesInfoElImg}>
                                    <img src={item.img} />
                                </div>
                                <div className={st.prizesInfoElNumber}>
                                    {item.title}
                                </div>
                                <div className={st.prizesInfoElInfo}>
                                    {item.info}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default PrizesInfo;