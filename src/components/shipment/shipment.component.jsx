import React from 'react';

import './shipment.styles.scss';

import { FaShoppingCart, FaMotorcycle, FaUserClock, FaCreditCard } from 'react-icons/fa';

import CustomButton from '../custom-button/custom-button.component';

const Shipment = () => {
	return (
		<section className="shipment">
			<div className="shipment_container">
				<h3>Darmowa dostawa</h3>
				<span>Pizzę dostarczamy w jak najszybszym czasie!</span>
				<span>Nie zdziw się, gdy w słuchawce usłyszysz 45 minut a pizza będzie po 25 minutach!</span>
				<div className="icons">
					<div className="icons-1">
						<FaShoppingCart />
						<span>Pyszne jedzenie w niskiej cenie</span>
					</div>
					<div className="icons-1">
						<FaMotorcycle />
						<span>Darmowa dostawa w Starogardzie</span>
					</div>
					<div className="icons-1">
						<FaUserClock />
						<span>Otrzymasz zamówienie do 45 minut</span>
					</div>
					<div className="icons-1">
						<FaCreditCard />
						<span>Płatność gotówką oraz kartą</span>
					</div>
				</div>
				<span className="opinion">
					Nie jesteś pewien co zamówić? Zadzwoń, powiedz nam co lubisz, a doradzimy co w naszej opinii byłoby
					dla Ciebie najlepsze!
				</span>
				<CustomButton>Zobacz Nasze Menu</CustomButton>
			</div>
		</section>
	);
};

export default Shipment;
