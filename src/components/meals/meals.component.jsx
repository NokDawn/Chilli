import React from 'react';

import './meals.styles.scss';

import Meal from '../meal/meal.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectorMeals } from '../../redux/food/food.selectors';

const Meals = ({ meals }) => {
	return <section className="meals">{meals.map((meal) => <Meal key={meal.id} meal={meal} />)}</section>;
};

const mapStateToProps = createStructuredSelector({
	meals: selectorMeals
});

export default connect(mapStateToProps)(Meals);
