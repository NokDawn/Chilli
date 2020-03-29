import React from 'react';
import './App.css';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import HomePage from './pages/homepage/homepage.component';
import KoszykPage from './pages/koszyk/koszyk.component';
import PizzaPage from './pages/pizza-page/pizza-page.component';
import ONasPage from './pages/o-nas/o-nas.component';
import PromocjePage from './pages/promocje/promocje.component';
import DowozPage from './pages/dowoz/dowoz.component';

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
				<Route exact path="/o-nas" component={ONasPage} />
				<Route exact path="/promocje" component={PromocjePage} />
				<Route exact path="/dowoz" component={DowozPage} />
				<Route path="/" component={HomePage} />
			</Switch>
			<Alert stack={{ limit: 3 }} html={true} />
		</div>
	);
}

export default App;
