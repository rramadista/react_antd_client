import React, { useState, useEffect, useRef } from 'react';
import { Input, Typography, Button } from 'antd';

const { Text, Title } = Typography;

const UseRefExample = () => {
	const [name, setName] = useState('');
	const inputRef = useRef();
	const prevName = useRef();

	const focus = () => {
		inputRef.current.focus();
		inputRef.current.value = 'Some value';
	};

	useEffect(() => {
		prevName.current = name;
	}, [name]);

	return (
		<>
			<Input
				placeholder='Name'
				ref={inputRef}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Button onClick={focus}>Focus</Button>
			<Title level={5}>My name is {name}</Title>
			<Text>And my previous name used to be {prevName.current}</Text>
		</>
	);
};

export default UseRefExample;
