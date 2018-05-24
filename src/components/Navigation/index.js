import { Component } from 'preact';
import style from './style.scss';
import NavigationItem from './NavigationItem';

export default class Navigation extends Component {
    render() {
        return (
            <div class={style.navigation}>
                <NavigationItem
                    href="agenda"
                    title="agenda"
                    src="assets/navigation/agenda_button.png"
                />
                <NavigationItem
                    href="speakers"
                    title="speakers"
                    src="assets/navigation/speakers_button.png"
                />
                <NavigationItem
                    href="topics"
                    title="topics"
                    src="assets/navigation/topics.png"
                />
            </div>
        )
    }
}