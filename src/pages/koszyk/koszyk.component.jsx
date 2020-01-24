import React from 'react';

import './koszyk.styles.scss';

import BasketCard from '../../components/basket-cart/basket-cart.component';

import { createStructuredSelector } from 'reselect';

import { selectorOrders, selectorTotalValue } from '../../redux/food/food.selectors';

import { connect } from 'react-redux';

const KoszykPage = ({ orders, totalValue }) => {
	return (
		<section className="koszyk-page">
			{orders.map((order) => <BasketCard key={order.id} order={order} totalValue={totalValue} />)}
			<span className="total-price">{`Suma do zapłacenia: ${totalValue} złotych`}</span>
		</section>
	);
};

const mapStateToProps = createStructuredSelector({
	orders: selectorOrders,
	totalValue: selectorTotalValue
});

export default connect(mapStateToProps)(KoszykPage);
