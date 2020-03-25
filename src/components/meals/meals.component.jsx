import React from 'react';

import './meals.styles.scss';

import Meal from '../meal/meal.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectorMeals } from '../../redux/food/food.selectors';

const Meals = ({ meals, history }) => {
	return (
		<React.Fragment>
			<h2 className="meals-heading">Pizza</h2>
			<section className="meals">
				{meals.filter((meal, id) => id < 8).map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
			<CustomButton onClick={() => history.push('/pizza')} style={{ margin: '0 0 2rem 0' }}>
				Zobacz wszystkie Pizze
			</CustomButton>
		</React.Fragment>
	);
};

const mapStateToProps = createStructuredSelector({
	meals: selectorMeals
});

export default connect(mapStateToProps)(Meals);
