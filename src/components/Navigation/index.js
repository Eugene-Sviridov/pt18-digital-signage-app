import { Component } from 'preact';
import style from './style.scss';
import NavigationItem from './NavigationItem';

export default class Navigation extends Component {
    render({ goToPage }) {
        const navigations = [
            {
                href: "agenda",
                title: "agenda",
                src: "assets/navigation/agenda_button.png",
            },
            {
                href: "speakers",
                title: "speakers",
                src: "assets/navigation/speakers_button.png",
            },
            { 
                href: "topics",
                title: "topics",
                src: "assets/navigation/topics.png",
            },
            {
                href: "vendors",
                title: "vendors",
                src: "assets/navigation/vendors.png",
            }
        ];
        return (
            <div class={style.navigation}>
                {
                    navigations.map((item) => (
                        <NavigationItem
                            key={item.title}
                            href={item.href}
                            title={item.title}
                            src={item.src}
                            goToPage={goToPage}
                        />
                    ))
                }
            </div>
        )
    }
}
