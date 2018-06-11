import { Component } from 'preact';
import Navigation from '../../components/Navigation';
import Container from '../../components/Container';

export default class Home extends Component {
	render({ goToPage }) {
		return (
			<Container
				noBackground
			>
				<Navigation goToPage={goToPage} />
			</Container>
		);
	}
}
