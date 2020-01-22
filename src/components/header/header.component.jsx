import React from 'react';

import './header.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const Header = () => {
	return (
		<header className="header">
			<h1>
				Najlepsza pizza<br /> w Starogardzie !!!
			</h1>
			<CustomButton>Zamów teraz</CustomButton>
		</header>
	);
};

export default Header;
