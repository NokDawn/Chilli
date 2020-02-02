import React from 'react';

import './koszyk.styles.scss';

import BasketCard from '../../components/basket-cart/basket-cart.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { createStructuredSelector } from 'reselect';

import { selectorOrders, selectorTotalValue } from '../../redux/food/food.selectors';

import { clearCart } from '../../redux/food/food.actions';

import { connect } from 'react-redux';

const KoszykPage = ({ orders, totalValue, clearCart }) => {
	return (
		<section className="koszyk-page">
			{orders.map((order, id) => <BasketCard key={id} order={order} totalValue={totalValue} />)}
			<span>Do zamówienia naliczamy opłatę jezdną w wysokości 4 złotych!</span>
			<span className="total-price">{`Suma do zapłacenia: ${totalValue} złotych`}</span>
			<CustomButton onClick={clearCart}>Usuń wszystko</CustomButton>
		</section>
	);
};

const mapStateToProps = createStructuredSelector({
	orders: selectorOrders,
	totalValue: selectorTotalValue
});

const mapDispatchToProps = (dispatch) => ({
	clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(KoszykPage);
