import React from 'react';

import './header.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
	return (
		<header className="header">
			<h1>
				Najlepsza pizza<br /> w Starogardzie !!!
			</h1>
			<CustomButton onClick={() => history.push('/pizza')}>Zamów teraz</CustomButton>
		</header>
	);
};

export default withRouter(Header);
