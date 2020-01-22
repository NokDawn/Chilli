import React from 'react';

import './meal.styles.scss';

import Pizza from '../../assets/pizza.png';

import CustomButton from '../custom-button/custom-button.component';

import { FaPlus, FaMinus } from 'react-icons/fa';

const Meal = () => {
	return (
		<div className="meal">
			<div className="meal-container">
				<div className="image-container">
					<img src={Pizza} alt="meal" />
				</div>
				<h3>La Mafia</h3>
				<span className="ingredients">
					sos, ser, cebula, szynka, boczek, papryka, czerwona cebula, ogórek konserwowy
				</span>
				<span className="price">30 zł</span>
				<span className="size">30 cm</span>
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
