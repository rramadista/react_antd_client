import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import UserContext from './services/user.context';

import DefaultLayout from './containers/default-layout.container';
import ThemeProvider from './pages/hooks/theme.context';
import DataTableProvider from './services/hooks/data-table/data-table.context';

const App = () => {
	const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
	});

	useEffect(() => {
		const checkLoggedIn = async () => {
			let token = localStorage.getItem('auth-token');
			if (token === null) {
				localStorage.setItem('auth-token', '');
				token = '';
			}

			const tokenRes = await fetch(
				'http://localhost:5000/user/token-check',
				{
					method: 'POST',
					headers: { authorization: 'Bearer '.concat(token) },
				}
			).then((res) => res.json());
			console.log(tokenRes);

			if (tokenRes) {
				const userRes = await fetch('http://localhost:5000/user/', {
					method: 'GET',
					headers: { authorization: 'Bearer '.concat(token) },
				}).then((res) => res.json());
				console.log(userRes);
				setUserData({
					token,
					user: userRes,
				});
			}
		};
		checkLoggedIn();
	}, []);

	return (
		<>
			<DataTableProvider>
				<ThemeProvider>
					<UserContext.Provider value={{ userData, setUserData }}>
						<Switch>
							<Route
								path='/'
								name='Home'
								component={DefaultLayout}
							/>
						</Switch>
					</UserContext.Provider>
				</ThemeProvider>
			</DataTableProvider>
		</>
	);
};

export default App;
