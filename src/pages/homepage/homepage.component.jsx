import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import Meals from '../../components/meals/meals.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Shipment from '../../components/shipment/shipment.component';
import Footer from '../../components/footer/footer.component';

const HomePage = ({ history }) => {
	return (
		<div className="homepage">
			<Header />
			<Meals history={history} />
			<div className="button-container">
				<CustomButton>Zobacz nasze menu</CustomButton>
			</div>
			<Shipment />
			<Footer />
		</div>
	);
};

export default HomePage;
