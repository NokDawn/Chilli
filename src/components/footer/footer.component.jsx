import React from 'react';

import './footer.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const Footer = () => {
	return (
		<footer className="footer">
			<h3>Skontaktuj się z nami</h3>
			<div className="info">
				<span className="place">Starogard Gdański</span>
				<span className="street">Aleja Armii Krajowej 15</span>
				<span className="phone">+48 123 456 789</span>
				<span className="email">chilli@gmail.com</span>
			</div>
			<CustomButton>Napisz do nas</CustomButton>
		</footer>
	);
};

export default Footer;
