import { Component } from 'preact';
import st from './style.scss';

export default class VendorsList extends Component {
    vendors = [
        {
            modificator: st.barracuda,
            src: 'assets/sponsors/barracuda.png',
        },
        {
            modificator: st.citrix,
            src: 'assets/sponsors/citrix.png',
        },
        {
            modificator: st.dell,
            src: 'assets/sponsors/Dell EMC Partner Logos-02.png',
        },
        {
            modificator: st.digitalxraid,
            src: 'assets/sponsors/DigitalXRAID.png',
        },
        {
            modificator: st.hp,
            src: 'assets/sponsors/HP Partner Logos-03.png',
        },
        {
            modificator: st.huawei,
            src: 'assets/sponsors/Huawei Partner Logos-04.png',
        },
        {
            modificator: st.ikonic,
            src: 'assets/sponsors/ikonic logo.png',
        },
        {
            modificator: st.jct600,
            src: 'assets/sponsors/jct600 - logo.png',
        },
        {
            modificator: st.lenovo,
            src: 'assets/sponsors/lenovo.png',
        },
        {
            modificator: st.bitdefender,
            src: 'assets/sponsors/LOGO - Bitdefender whiteout 001.png',
        },
        {
            modificator: st.canon,
            src: 'assets/sponsors/LOGO - Canon white.png',
        },
        {
            modificator: st.dji,
            src: 'assets/sponsors/LOGO - DJI whiteout 001.png',
        },
        {
            modificator: st.fsecure,
            src: 'assets/sponsors/LOGO - F-secure whiteout 001.png',
        },
        {
            modificator: st.microsoft,
            src: 'assets/sponsors/LOGO - microsoft whiteout 001.png',
        },
        {
            modificator: st.powervision,
            src: 'assets/sponsors/LOGO - powervision - whiteout 001.png',
        },
        {
            modificator: st.tesla,
            src: 'assets/sponsors/LOGO - Tesla whiteout 001.png',
        },
        {
            modificator: st.ubtech,
            src: 'assets/sponsors/LOGO - ubtech - whiteout 001.png',
        },
        {
            modificator: st.toshiba,
            src: 'assets/sponsors/LOGO -Toshiba white out 001.png',
        },
        {
            modificator: st.yhrccu,
            src: 'assets/sponsors/LOGO YHRCCU (police) whiteout 001.png',
        },
        // {
        //     modificator: st.mclaren,
        //     src: 'assets/sponsors/mclaren - logo whiteout.png',
        // },
        {
            modificator: st.mimecast,
            src: 'assets/sponsors/mimecast.png',
        },
        {
            modificator: st.marble,
            src: 'assets/sponsors/pt18_black_marble.png',
        },
        {
            modificator: st.symantec,
            src: 'assets/sponsors/pt18_symantec.png',
        },
        {
            modificator: st.s2s,
            src: 'assets/sponsors/S2S logo.png',
        },
        // {
        //     modificator: st.sphero,
        //     src: 'assets/sponsors/Sphero - whiteout 001.png',
        // },
        {
            modificator: st.vapour,
            src: 'assets/sponsors/Vapour Partner Logos-11.png',
        },
        {
            modificator: st.virtualCollege,
            src: 'assets/sponsors/virtual college logo.png',
        },
        {
            modificator: st.zen,
            src: 'assets/sponsors/Zen Office Main Logo B+W - reversed.png',
        },
    ]
    render() {
        return (
            <ul className={st.vendorsList}>
                {
                    this.vendors.map((vendor, i) => (
                        <li className={st.vendorEl} key={i}>
                            <img className={`${st.vendorImg} ${vendor.modificator}`} src={vendor.src} />
                        </li>
                    ))
                }
            </ul>
        );
    }
}
