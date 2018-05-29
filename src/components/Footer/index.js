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
                            'assets/sponsors/huawei.png',
                            'assets/sponsors/hp.png',
                            'assets/sponsors/vapour.png'
                        ]}
                    />
                    <FooterColumn
                        logos={[
                            'assets/sponsors/microsoft.png',
                            'assets/sponsors/mimecast.png',
                            'assets/sponsors/dellemc.png',
                            'assets/sponsors/virtualcollege.png'
                        ]}
                    />
                    <FooterColumn
                        logos={[
                            'assets/sponsors/citrix.png',
                            'assets/sponsors/barracuda.png',
                            'assets/sponsors/DigitalXRAID.png',
                            'assets/sponsors/lenovo.png'
                        ]}
                    />
                    <FooterColumn
                        logos={[
                            'assets/sponsors/ikonic.png',
                            'assets/sponsors/f-secure.png',
                            'assets/sponsors/canon.png',
                            'assets/sponsors/YHRCCU.png'
                        ]}
                    />
                    <FooterColumn
                        logos={[
                            'assets/sponsors/jct600.png',
                            'assets/sponsors/zen.png',
                            'assets/sponsors/powervision.png',
                            'assets/sponsors/ubtech.png'
                        ]}
                    />
                    <FooterColumn
                        logos={[
                            'assets/sponsors/bitdefender.png',
                            'assets/sponsors/tesla.png',
                            'assets/sponsors/toshiba.png',
                            'assets/sponsors/symantec.png'
                        ]}
                    />
                    <FooterColumn
                        logos={[
                            'assets/sponsors/s2s.png',
                            'assets/sponsors/black-marble.png',
                            'assets/sponsors/DJI.png'
                        ]}
                    />
                </div>
            </footer>
        )
    }
}
