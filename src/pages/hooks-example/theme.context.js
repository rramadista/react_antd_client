import React, { useState, createContext } from 'react';

export const ThemeContext = createContext({
	darkTheme: true,
	toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = () => {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	};

	return (
		<ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
