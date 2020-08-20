import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import DefaultLayout from './containers/default-layout.container';

const App = () => {
	return (
		<>
			<Switch>
				<Route path='/' name='Home' component={DefaultLayout} />
			</Switch>
		</>
	);
};

export default App;
