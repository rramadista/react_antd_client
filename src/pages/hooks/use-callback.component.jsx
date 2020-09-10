import React, { useState, useEffect, useCallback } from 'react';
import { Input, Button } from 'antd';

const List = ({ getItems }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems(5));
		console.log('Items Updated');
	}, [getItems]);

	return items.map((item) => (
		<div key={item}>
			<h2>{item}</h2>
		</div>
	));
};

const UseCallbackExample = () => {
	const [number, setNumber] = useState(1);
	const [darkTheme, setDarkTheme] = useState(false);

	const getItems = useCallback(
		(incrementor) => {
			return [
				number + incrementor,
				number + incrementor + 1,
				number + incrementor + 2,
			];
		},
		[number]
	);

	const theme = {
		backgroundColor: darkTheme ? 'gold' : 'silver',
		color: darkTheme ? 'silver' : 'gold',
	};
	return (
		<div style={theme}>
			<Input
				type='number'
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>
			<Button
				onClick={() => setDarkTheme((prevDarkTheme) => !prevDarkTheme)}
			>
				Toggle Theme
			</Button>
			<List getItems={getItems} />
		</div>
	);
};

export default UseCallbackExample;
