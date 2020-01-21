import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

import UpperNav from './components/upper-nav/upper-nav.component';
import Navigation from './components/navigation/navigation.cpmponent';

import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<UpperNav />
			<Navigation />
			<Switch>
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
