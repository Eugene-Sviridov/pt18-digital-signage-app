import { Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';
import HeaderButton from '../HeaderButton';
import classnames from 'classnames';

export default class Header extends Component {
	render({isButtonHidden}) {
		const headerClasses = classnames(style.header, {
			[style.buttonHidden]: isButtonHidden
		});
		
		return (
			<header className={headerClasses}>
				{
					!isButtonHidden &&
						<div class={style.headerButtons}>
							<HeaderButton
								src="assets/icons/pt_back_icon.svg"
								onClick={() => {}}
							/>
							<HeaderButton
								src="assets/icons/pt_home_icon.svg"
								onClick={() => {}}
							/>
						</div>
				}
				<div class={style.headerLogo}>
					<img src="assets/icons/logo.svg" />
				</div>
			</header>
		);
	}
}
