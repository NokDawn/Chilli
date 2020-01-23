import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import Meals from '../../components/meals/meals.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Shipment from '../../components/shipment/shipment.component';

const HomePage = () => {
	return (
		<div className="homepage">
			<Header />
			<Meals />
			<div className="button-container">
				<CustomButton>Zobacz nasze menu</CustomButton>
			</div>
			<Shipment />
		</div>
	);
};

export default HomePage;
