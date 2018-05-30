import { Component } from 'preact';
import st from './style.scss';

export default class VendorsList extends Component {
    vendors = [
        'assets/sponsors/huawei.png',
        'assets/sponsors/microsoft.png',
        'assets/sponsors/citrix.png',
        'assets/sponsors/ikonic.png',
        'assets/sponsors/mimecast.png',
        'assets/sponsors/DigitalXRAID.png',
        'assets/sponsors/bitdefender.png',
        'assets/sponsors/s2s.png',
        'assets/sponsors/dellemc.png',
        'assets/sponsors/barracuda.png',
        'assets/sponsors/powervision.png',
        'assets/sponsors/virtual-college.png',
        'assets/sponsors/lenovo.png',
        'assets/sponsors/YHRCCU.png',
        'assets/sponsors/canon.png',
        'assets/sponsors/hp.png',
        'assets/sponsors/DJI.png',
        'assets/sponsors/black-marble.png',
        'assets/sponsors/vapour-partner.png',
        'assets/sponsors/ubtech.png',
        'assets/sponsors/jct600.png',
        'assets/sponsors/f-secure.png',
        'assets/sponsors/zen.png',
        'assets/sponsors/tesla.png',
        'assets/sponsors/toshiba.png',
        'assets/sponsors/symantec.png',
    ]
    render() {
        return (
            <ul className={st.vendorsList}>
                {
                    this.vendors.map((src, i) => (
                        <li className={st.vendorEl} key={i}>
                            <img src={src} />
                        </li>
                    ))
                }
            </ul>
        );
    }
}
