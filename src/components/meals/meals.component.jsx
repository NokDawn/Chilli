import React from 'react';

import './meals.styles.scss';

import Meal from '../meal/meal.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectorMeals } from '../../redux/food/food.selectors';

const Meals = ({ meals }) => {
	return (
		<React.Fragment>
			<h2 className="meals-heading">Pizza</h2>
			<section className="meals">
				{meals.filter((meal, id) => id < 8).map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
			<h2 className="meals-heading">Dania Dnia</h2>
			<section className="meals">
				{meals
					.filter((meal, id) => meal.category === 'dania_dnia' && meal.id < 34)
					.map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
			<h2 className="meals-heading">Makarony</h2>
			<section className="meals">
				{meals
					.filter((meal, id) => meal.category === 'makaron' && meal.id < 30)
					.map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
			<h2 className="meals-heading">Drób</h2>
			<section className="meals">
				{meals
					.filter((meal, id) => meal.category === 'drób' && meal.id < 39)
					.map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
			<h2 className="meals-heading">Wieprzowina</h2>
			<section className="meals">
				{meals
					.filter((meal, id) => meal.category === 'wieprzowina' && meal.id < 43)
					.map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
			<h2 className="meals-heading">Sałatki</h2>
			<section className="meals">
				{meals
					.filter((meal, id) => meal.category === 'sałatki')
					.map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
			<h2 className="meals-heading">Placki</h2>
			<section className="meals">
				{meals
					.filter((meal, id) => meal.category === 'placki')
					.map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
			<h2 className="meals-heading">Bagietki</h2>
			<section className="meals">
				{meals
					.filter((meal, id) => meal.category === 'bagietki' && meal.id < 56)
					.map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
			<h2 className="meals-heading">Inne</h2>
			<section className="meals">
				{meals
					.filter((meal, id) => meal.category === 'inne' && meal.id < 60)
					.map((meal) => <Meal key={meal.id} meal={meal} />)}
			</section>
		</React.Fragment>
	);
};

const mapStateToProps = createStructuredSelector({
	meals: selectorMeals
});

export default connect(mapStateToProps)(Meals);
