import React, { useState, useEffect, useContext, createContext } from 'react';

const UserContext = createContext();
const UserLogoutContext = createContext();

export const useUser = () => {
	return useContext(UserContext);
};

export const useUserLogout = () => {
	return useContext(UserLogoutContext);
};

const UserProvider = ({ children }) => {
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

	const onSubmitLogout = () => {
		setUserData({
			token: undefined,
			user: undefined,
		});
		localStorage.setItem('auth-token', '');
	};

	return (
		<UserContext.Provider value={(userData, onSubmitLogout)}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
