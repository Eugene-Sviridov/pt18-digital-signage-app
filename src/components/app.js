import { h, Component } from 'preact';
import { Router, route } from 'preact-router';

import './app.scss';
import Credit from '../components/Credit';
import Header from './Header';
import Home from '../routes/Home';
import Agenda from '../routes/Agenda';
import Topics from '../routes/Topics';
import Topic from '../routes/Topic';
import Vendors from '../routes/Vendors';
import Speakers from '../routes/Speakers';
import Speaker from '../routes/Speaker';
import Prizes from '../routes/Prizes';
import DroneRacing from '../routes/DroneRacing';
import SocialPosts from '../routes/SocialPosts';
import Raffle from '../routes/Raffle';
import PureLotto from '../routes/PureLotto';
import KeepInTouch from '../routes/KeepInTouch';
import ContentContainer from '../components/ContentContainer';
import Redirect from '../components/Redirect';
import createHashHistory from 'history/createHashHistory';
import classnames from 'classnames';

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
		isTopicPage: false,
		isPageIn: false,
		isPageOut: false,
		isInnerPageIn: false,
		isInnerPageOut: false
	};

	handleRoute = e => {
		this.currentUrl = e.url;

		this.setState({
			isHomePage: this.isHomePage(),
			isSpeakerPage: this.isSpeakerPage(),
			isTopicPage: this.isTopicPage(),
			isPrizePage: this.isPrizePage()
		});
	};

	goToPage = (link, config, delay) => {
		this.setState({
			...this.state,
			...config
		})
		setTimeout(() => {
			this.setState({
				...this.state,
				isPageIn: false,
				isPageOut: false,
				isInnerPageIn: false,
				isInnerPageOut: false
			})
			route(link);
		}, delay)
	}

	isHomePage = () => this.currentUrl === '/';

	isSpeakerPage = () => this.currentUrl.indexOf('speaker/') >= 0;
	isTopicPage = () => this.currentUrl.indexOf('topic/') >= 0;
	isPrizePage = () => this.currentUrl.indexOf('drone-racing') >= 0 || this.currentUrl.indexOf('social-posts') >= 0 || this.currentUrl.indexOf('raffle') >= 0 || this.currentUrl.indexOf('pure-lotto') >= 0 || this.currentUrl.indexOf('keep-in-touch') >= 0;

	render() {
		const classNames = classnames({
			'isIn': this.state.isPageIn,
			'isOut': this.state.isPageOut,
			'isInnerIn': this.state.isInnerPageIn,
			'isInnerOut': this.state.isInnerPageOut
		});
		return (
			<div id="app" className={classNames}>
				<Header
					isButtonHidden={this.state.isHomePage}
					href={this.state.isSpeakerPage ? 'speakers' : (this.state.isTopicPage ? 'topics' : this.state.isPrizePage ? 'prizes' :  false)}
					goToPage={this.goToPage}
				/>
				<ContentContainer >
					<Router onChange={this.handleRoute} history={createHashHistory()}>
						<Home path="/" goToPage={this.goToPage} />
						<Agenda path="/agenda" />
						<Topics path="/topics" goToPage={this.goToPage} />
						<Speakers path="/speakers" goToPage={this.goToPage} />
						<Speaker path="/speaker/:id" url={this.currentUrl} />
						<Topic path="/topic/:id" url={this.currentUrl} />
						<Vendors path="/vendors" />
						<Prizes path="/prizes" goToPage={this.goToPage} />
						<DroneRacing path="/drone-racing" />
						<SocialPosts path="/social-posts" />
						<Raffle path="/raffle" />
						<PureLotto path="/pure-lotto" />
						<KeepInTouch path="/keep-in-touch" />
					</Router>
				</ContentContainer>
				<Credit
					url={this.currentUrl}
				/>
			</div>
		);
	}
}
