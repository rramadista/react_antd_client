import React from 'react';
import { useTheme, useThemeUpdate } from './theme.context';
import { Card, Button } from 'antd';

const { Meta } = Card;

const UseContextExample = () => {
	const darkTheme = useTheme();
	const toggleTheme = useThemeUpdate();
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
