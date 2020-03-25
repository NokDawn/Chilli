import React from 'react';

import './meal.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { FaPlus, FaMinus } from 'react-icons/fa';

import { connect } from 'react-redux';

import { addFood, plusOne, minusOne, changeSize } from '../../redux/food/food.actions';

import Alert from 'react-s-alert';

const Meal = ({
	meal: { name, ingredients, price, sizes, image, number },
	addFood,
	meal,
	plusOne,
	minusOne,
	changeSize
}) => {
	const addNote = () => {
		Alert.success('<h3>Dodano pizzę do koszyka!</h3>', {
			position: 'top-right',
			effect: 'scale',
			beep: false,
			timeout: 3000,
			offset: 50
		});
	};

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
					<CustomButton
						onClick={() => {
							addFood(meal);
							addNote();
						}}
					>
						Zamów teraz
					</CustomButton>
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
