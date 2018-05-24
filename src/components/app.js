import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Footer from './Footer';
import Home from '../routes/Home';
// import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	state = {
		isHomePage: false
	};

	handleRoute = e => {
		this.currentUrl = e.url;

		this.setState({
			isHomePage: this.isHomePage()
		});
	};

	isHomePage = () => this.currentUrl === '/';

	render() {
		return (
			<div id="app">
				<Header
					isButtonHidden={this.state.isHomePage}
				/>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
				<Footer />
				
			</div>
		);
	}
}
