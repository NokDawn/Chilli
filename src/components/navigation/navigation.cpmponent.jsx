import React from 'react';

import './navigation.styles.scss';

import { Link } from 'react-router-dom';

import { FaPizzaSlice, FaHotjar, FaMugHot, FaBirthdayCake } from 'react-icons/fa';

const Navigation = () => {
	return (
		<nav className="navigation">
			<div className="nav-container">
				<ul className="left-block">
					<li>
						<Link to="/o-nas">
							<FaPizzaSlice />Pizza
						</Link>
					</li>
					<li>
						<Link to="/o-nas">
							<FaHotjar />Zupy
						</Link>
					</li>
					<li>
						<Link to="/o-nas">
							<FaBirthdayCake />Dodatki
						</Link>
					</li>
					<li>
						<Link to="/o-nas">
							<FaMugHot />Napoje
						</Link>
					</li>
				</ul>
				<ul className="right-block">
					<li>
						<Link to="/o-nas">O nas</Link>
					</li>
					<li>
						<Link to="/menu">Nasze menu</Link>
					</li>
					<li>
						<Link to="/promocje">Strefa promocji</Link>
					</li>
					<li>
						<Link to="/dowoz">Strefa dowozu</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
