import React, { useState } from 'react';
import { Button, Space } from 'antd';

const UseStateExample = () => {
	const initialState = 0;
	const [count, setCount] = useState(initialState);
	const [color, setColor] = useState('Blue');

	const decrementCount = () => {
		setCount((prevCount) => prevCount - 1);
		setColor('Red');
	};

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
		setColor('Green');
	};

	const resetCount = () => {
		setCount(initialState);
		setColor('Blue');
	};

	return (
		<>
			<Space>
				<Button onClick={decrementCount}>-</Button>
				{count}
				{color}
				<Button onClick={incrementCount}>+</Button>
				<Button onClick={resetCount}>Reset</Button>
			</Space>
		</>
	);
};

export default UseStateExample;
