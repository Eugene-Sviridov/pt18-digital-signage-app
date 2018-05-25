import { Component } from 'preact';
import style from './style';
import Navigation from '../../components/Navigation';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Navigation />
			</div>
		);
	}
}
