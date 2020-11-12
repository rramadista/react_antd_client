import React, { useContext } from 'react';
import { ThemeContext } from './theme.context';
import { Card, Button } from 'antd';

const { Meta } = Card;

const UseContextExample = () => {
	const { darkTheme, toggleTheme } = useContext(ThemeContext);

	const themeStyles = {
		backgroundColor: darkTheme ? 'gold' : 'white',
		width: 240,
	};

	return (
		<>
			<Button onClick={toggleTheme}>Toggle Theme</Button>
			<Card hoverable bordered={false} style={themeStyles}>
				<Meta title='Function Theme' description='Current Theme' />
			</Card>
		</>
	);
};

export default UseContextExample;
