import React, { useState, useEffect } from 'react';
import { Button, Space } from 'antd';

const UseEffectExample = () => {
	const [resourceType, setResourceType] = useState('Posts');
	const [items, setItems] = useState([]);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	};

	useEffect(() => {
		// Side Effect
		window.addEventListener('resize', handleResize);
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then((res) => res.json())
			.then((json) => setItems(json));
		console.log('Resource changed');

		// Cleaning Up
		return () => {
			console.log('Return from resource change');
		};
	}, [resourceType]);

	return (
		<>
			<Space>
				<Button onClick={() => setResourceType('Posts')}>Posts</Button>
				<Button onClick={() => setResourceType('Users')}>Users</Button>
				<Button onClick={() => setResourceType('Comments')}>
					Comments
				</Button>
			</Space>
			<h2>{resourceType}</h2>
			<h2>
				Width: {windowWidth}, Height: {windowHeight}
			</h2>
			{items.map((item) => {
				return <pre key={item.id}>{JSON.stringify(item)}</pre>;
			})}
		</>
	);
};

export default UseEffectExample;
