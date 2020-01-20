import React from 'react';

import './upper-nav.styles.scss';

import { FaShoppingBag } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const UpperNav = () => {
	return (
		<div className="upper-nav">
			<div className="logo-container">CHILI</div>
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
					<FaShoppingBag />
					<span className="counter">&nbsp;1&nbsp;</span>
				</div>
			</div>
		</div>
	);
};

export default UpperNav;
