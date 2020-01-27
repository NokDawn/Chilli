import React from 'react';

import './meal.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { FaPlus, FaMinus } from 'react-icons/fa';

import { connect } from 'react-redux';

import { addFood, plusOne, minusOne, changeSize } from '../../redux/food/food.actions';

const Meal = ({
	meal: { name, ingredients, price, sizes, image, number },
	addFood,
	meal,
	plusOne,
	minusOne,
	changeSize
}) => {
	return (
		<div className="meal">
			<div className="meal-container">
				<div className="image-container">
					<img src={image} alt="meal" />
				</div>
				<h3>{name}</h3>
				<span className="ingredients">
					{ingredients.map((ingredient, idx) => (
						<React.Fragment key={idx}>{`${ingredient}, `}</React.Fragment>
					))}
				</span>
				<span className="price">{price} zł</span>
				{sizes ? (
					<span className="sizes">
						{sizes.map((size, idx) => (
							<span className="size" key={idx} onClick={() => changeSize(meal, size)}>
								{size} cm
							</span>
						))}
					</span>
				) : null}
				<div className="order-container">
					<span className="number">{number}</span>
					<div className="arrows">
						<FaPlus className="plus" onClick={() => plusOne(meal)} />
						<FaMinus className="minus" onClick={() => minusOne(meal)} />
					</div>
					<CustomButton onClick={() => addFood(meal)}>Zamów teraz</CustomButton>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addFood: (food) => dispatch(addFood(food)),
	plusOne: (food) => dispatch(plusOne(food)),
	minusOne: (food) => dispatch(minusOne(food)),
	changeSize: (food, size) => dispatch(changeSize(food, size))
});

export default connect(null, mapDispatchToProps)(Meal);
