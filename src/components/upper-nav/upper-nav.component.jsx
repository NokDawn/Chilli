import React from 'react';

import './upper-nav.styles.scss';

import { FaShoppingBag } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectorTotalItems } from '../../redux/food/food.selectors';

const UpperNav = ({ history, totalItems }) => {
	return (
		<div className="upper-nav">
			<div className="logo-container" onClick={() => history.push('/')}>
				<span className="logo">Chili</span>
			</div>
			<div className="right-block">
				<span className="phone-number">
					Zadzwoń i zamów <span>+48 123 456 789</span>
				</span>
				<span className="city">
					<MdLocationOn />
					<span>Starogard Gdański</span>
				</span>
				<div className="shop-details">
					<span className="price">
						<span>39</span> zł
					</span>
					<FaShoppingBag className="shopping-bag" onClick={() => history.push('/koszyk')} />
					<span className="counter">&nbsp;{totalItems}&nbsp;</span>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	totalItems: selectorTotalItems
});

export default withRouter(connect(mapStateToProps)(UpperNav));
