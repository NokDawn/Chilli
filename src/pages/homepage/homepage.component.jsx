import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import Meals from '../../components/meals/meals.component';

const HomePage = () => {
	return (
		<div className="homepage">
			<Header />
			<Meals />
		</div>
	);
};

export default HomePage;
