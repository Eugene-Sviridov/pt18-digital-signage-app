import { Component } from 'preact';
import { Link } from 'preact-router/match';
import st from './style.scss';
import HeaderButton from '../HeaderButton';
import classnames from 'classnames';
import { route } from 'preact-router';
import { getRoutePath } from '../../helpers';

export default class Header extends Component {
	render({isButtonHidden}) {
		const headerClasses = classnames(st.header, {
			[st.buttonHidden]: isButtonHidden
		});

		const goHome = () => route('/');
		const goBack = (href) => {
			return () => {
				route(href ? getRoutePath(href) : '/');
			}
		}
		
		return (
			<header className={headerClasses}>
				{
					!isButtonHidden &&
						<div class={st.headerButtons}>
							<HeaderButton
								src="/assets/icons/pt_back_icon.svg"
								onClick={goBack(this.props.href)}
							/>
							<HeaderButton
								src="/assets/icons/pt_home_icon.svg"
								onClick={goHome}
							/>
						</div>
				}
				<div class={st.headerLogo}>
					<img src="/assets/icons/logo.svg" />
				</div>
				<div className={st.hashtag}>#JoinTheInnovation</div>
			</header>
		);
	}
}
