import { Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import ButtonBack from '../ButtonBack';
import ButtonHome from '../ButtonHome';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<div class={style.headerButtons}>
					<ButtonBack />
					<ButtonHome />
				</div>
				<div class={style.headerLogo}>
					<img src="assets/icons/logo.svg" />
				</div>
			</header>
		);
	}
}
