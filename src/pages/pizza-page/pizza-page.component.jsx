import React from 'react';

import './pizza-page.styles.scss';

import Meal from '../../components/meal/meal.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectorMeals } from '../../redux/food/food.selectors';

const PizzaPage = ({ meals }) => {
	return (
		<section className="pizza-page">
			{meals.filter((meal) => meal.category === 'pizza').map((meal) => <Meal key={meal.id} meal={meal} />)}
		</section>
	);
};

const mapStateToProps = createStructuredSelector({
	meals: selectorMeals
});

export default connect(mapStateToProps)(PizzaPage);
