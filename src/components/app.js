import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Home from '../routes/Home';
import Agenda from '../routes/Agenda';
import Topics from '../routes/Topics';
import Topic from '../routes/Topic';
import Vendors from '../routes/Vendors';
import Speakers from '../routes/Speakers';
import Speaker from '../routes/Speaker';
// import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
import ContentContainer from '../components/ContentContainer';
import Redirect from '../components/Redirect';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	state = {
		isHomePage: false,
		isSpeakerPage: false,
		isTopicPage: false
	};

	handleRoute = e => {
		this.currentUrl = e.url;

		this.setState({
			isHomePage: this.isHomePage(),
			isSpeakerPage: this.isSpeakerPage(),
			isTopicPage: this.isTopicPage()
		});
	};

	isHomePage = () => this.currentUrl === '/home';

	isSpeakerPage = () => this.currentUrl.indexOf('speaker/') >= 0;
	isTopicPage = () => this.currentUrl.indexOf('topic/') >= 0;

	render() {
		return (
			<div id="app">
				<Header
					isButtonHidden={this.state.isHomePage}
					href={this.state.isSpeakerPage ? 'speakers' : (this.state.isTopicPage ? 'topics' : false)}
				/>
				<ContentContainer>
					<Router onChange={this.handleRoute}>
  						<Redirect path="/" to="/home" />
						<Home path="/home" />
						<Agenda path="/agenda" />
						<Topics path="/topics" />
						<Speakers path="/speakers" />
						<Speaker path="/speaker/:id" url={this.currentUrl} />
						<Topic path="/topic/:id" url={this.currentUrl} />
						<Vendors path="/vendors" />
					</Router>
				</ContentContainer>
			</div>
		);
	}
}
