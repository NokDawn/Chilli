import React from 'react';

import './meals.styles.scss';

import Meal from '../meal/meal.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectorMeals, selectorMakarony } from '../../redux/food/food.selectors';

const Meals = ({ meals, makarony }) => {
	console.log(makarony);
	return (
		<section className="meals">
			{meals.filter((meal, id) => id < 8).map((meal) => <Meal key={meal.id} meal={meal} />)}
			{makarony.filter((meal, id) => id < 8).map((meal) => <Meal key={meal.id} meal={meal} />)}
		</section>
	);
};

const mapStateToProps = createStructuredSelector({
	meals: selectorMeals,
	makarony: selectorMakarony
});

export default connect(mapStateToProps)(Meals);
