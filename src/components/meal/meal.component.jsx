import React from 'react';

import './meal.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { FaPlus, FaMinus } from 'react-icons/fa';

const Meal = ({ meal: { name, ingredients, price, sizes, image } }) => {
	return (
		<div className="meal">
			<div className="meal-container">
				<div className="image-container">
					<img src={image} alt="meal" />
				</div>
				<h3>{name}</h3>
				<span className="ingredients">
					{ingredients.map((ingredient) => <React.Fragment>{`${ingredient}, `}</React.Fragment>)}
				</span>
				<span className="price">{price} zł</span>
				<span className="size">{sizes.map((size) => <span className="size">{size} cm</span>)}</span>
				<div className="order-container">
					<span className="number">1</span>
					<div className="arrows">
						<FaPlus className="plus" />
						<FaMinus />
					</div>
					<CustomButton>Zamów teraz</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default Meal;
