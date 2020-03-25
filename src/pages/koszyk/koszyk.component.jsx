import React from 'react';

import './koszyk.styles.scss';

import BasketCard from '../../components/basket-cart/basket-cart.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Alert from 'react-s-alert';

import { createStructuredSelector } from 'reselect';

import { selectorOrders, selectorTotalValue } from '../../redux/food/food.selectors';

import { clearCart } from '../../redux/food/food.actions';

import { connect } from 'react-redux';

const KoszykPage = ({ orders, totalValue, clearCart }) => {
	const deleteAllNotes = () => {
		Alert.error('<h3>Usunięto wszystko z koszyka!</h3>', {
			position: 'top-right',
			effect: 'scale',
			beep: false,
			timeout: 3000,
			offset: 50
		});
	};

	return (
		<section className="koszyk-page">
			{orders.map((order, id) => <BasketCard key={id} order={order} totalValue={totalValue} />)}
			<div className="koszyk-value">
				<span className="total-price">{`Suma do zapłacenia: ${totalValue} złotych`}</span>
				<CustomButton
					onClick={() => {
						clearCart();
						deleteAllNotes();
					}}
				>
					Usuń wszystko
				</CustomButton>
			</div>
			<CustomButton>Zapłać teraz!</CustomButton>
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
