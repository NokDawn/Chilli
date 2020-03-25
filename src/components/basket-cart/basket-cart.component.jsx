import React from 'react';

import Alert from 'react-s-alert';

import './basket-cart.styles.scss';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';

import { connect } from 'react-redux';
import { removeFood, addFood, removeOne, cartPlus } from '../../redux/food/food.actions';

const BasketCard = ({ order: { name, quantity, price, image }, removeItem, order, addItem, removeOne, cartPlus }) => {
	const deleteNote = () => {
		Alert.error('<h3>Usunięto pizzę z koszyka!</h3>', {
			position: 'top-right',
			effect: 'scale',
			beep: false,
			timeout: 3000,
			offset: 50
		});
	};
	return (
		<div className="basket-cart">
			<div className="image-container">
				<img src={image} alt="food" />
			</div>
			<span className="name">{name}</span>
			<div className="quantity-container">
				<div className="arrow-left">
					<FaAngleLeft onClick={() => removeOne(order)} />
				</div>
				<span className="name">{quantity} szt.</span>
				<div className="arrow-right">
					<FaAngleRight onClick={() => cartPlus(order)} />
				</div>
			</div>
			<span className="name">{price * quantity}zł</span>
			<IoIosCloseCircle
				className="close"
				onClick={() => {
					removeItem(order);
					deleteNote();
				}}
			/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (food) => dispatch(removeFood(food)),
	addItem: (food) => dispatch(addFood(food)),
	removeOne: (food) => dispatch(removeOne(food)),
	cartPlus: (food) => dispatch(cartPlus(food))
});

export default connect(null, mapDispatchToProps)(BasketCard);
