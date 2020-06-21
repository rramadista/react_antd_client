import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Containers
import DefaultLayout from './containers/default-layout.container';

// Pages
// Login
// Register

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/' name='Home' component={DefaultLayout} />
			</Switch>
		</div>
	);
};

export default App;
