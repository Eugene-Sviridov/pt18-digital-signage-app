import { Component } from 'preact';
import style from './style.scss';
import FooterColumn from './FooterColumn';

export default class Footer extends Component {
    render() {
        return (
            <footer className={style.footer}>
                <div className={style.footerWrapper}>
                    <FooterColumn
                        logos={[
                            'assets/sponsors/huawei.png'
                        ]}
                    />
                    <FooterColumn
                        logos={[
                            'assets/sponsors/microsoft.png',
                            'assets/sponsors/mimecast.png'
                        ]}
                    />
                    <FooterColumn
                        logos={[
                            'assets/sponsors/hp.png'
                        ]}
                    />
                    <FooterColumn
                        logos={[
                            'assets/sponsors/dellemc.png',
                            'assets/sponsors/citrix.png',
                        ]}
                    />
                </div>
            </footer>
        )
    }
}
