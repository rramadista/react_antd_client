import React, { useState, useEffect, useMemo } from 'react';
import { Input, Button, Typography } from 'antd';

const { Title } = Typography;

const UseMemoExample = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);

	const themeStyles = useMemo(() => {
		return {
			backgroundColor: dark ? 'black' : 'white',
			color: dark ? 'white' : 'black',
		};
	}, [dark]);

	useEffect(() => {
		console.log('Theme Changed');
	}, [themeStyles]);

	return (
		<>
			<Input
				type='number'
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>
			<Title level={5} style={themeStyles}>
				{doubleNumber}
			</Title>
			<Button onClick={() => setDark((prevDark) => !prevDark)}>
				Change Theme
			</Button>
		</>
	);
};

const slowFunction = (num) => {
	console.log('Calling Slow Function');
	for (let i = 0; i <= 1000000000; i++) {}
	return num * num;
};

export default UseMemoExample;
