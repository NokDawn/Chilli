import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import KoszykPage from './pages/koszyk/koszyk.component';
import PizzaPage from './pages/pizza-page/pizza-page.component';

import UpperNav from './components/upper-nav/upper-nav.component';
import Navigation from './components/navigation/navigation.cpmponent';

import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<UpperNav />
			<Navigation />
			<Switch>
				<Route exact path="/koszyk" component={KoszykPage} />
				<Route exact path="/pizza" component={PizzaPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
