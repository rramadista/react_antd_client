import React, { useState, useReducer } from 'react';
import { Button, Space, Form, Input } from 'antd';

import Todo from './todo.component';

import todoReducer from './todo.reducer';
import { incrementCount, decrementCount, addItem } from './todo.actions';

const UseReducerExample = () => {
	const [state, dispatch] = useReducer(todoReducer, {
		count: 0,
		todoItems: [],
	});

	const [name, setName] = useState('');

	const handleSubmit = () => {
		dispatch(addItem(name));
		setName('');
	};

	console.log(name);
	console.log(state);

	return (
		<>
			<Space>
				<Button onClick={() => dispatch(decrementCount())}>-</Button>
				{state.count}
				<Button onClick={() => dispatch(incrementCount())}>+</Button>
				<Button>Reset</Button>
				<Form layout='inline' onFinish={handleSubmit}>
					<Input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form>
			</Space>
			{state.todoItems.map((item) => {
				return <Todo key={item.id} item={item} dispatch={dispatch} />;
			})}
		</>
	);
};

export default UseReducerExample;
