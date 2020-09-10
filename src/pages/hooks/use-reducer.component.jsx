import React, { useState, useReducer } from 'react';
import { Button, Space, Form, Input } from 'antd';
import Todo from './todo.component';

const COUNT_ACTIONS = {
	INCREMENT: 'increment',
	DECREMENT: 'decrement',
};

export const TODO_ACTIONS = {
	ADD_TODO: 'add-todo',
	TOGGLE_TODO: 'toggle-todo',
	DELETE_TODO: 'delete-todo',
};

const countReducer = (state, action) => {
	switch (action.type) {
		case COUNT_ACTIONS.INCREMENT:
			return { count: state.count + 1 };
		case COUNT_ACTIONS.DECREMENT:
			return { count: state.count - 1 };
		default:
			return state;
	}
};

const todoReducer = (state, action) => {
	switch (action.type) {
		case TODO_ACTIONS.ADD_TODO:
			return [...state, newItem(action.payload.name)];
		case TODO_ACTIONS.TOGGLE_TODO:
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});
		case TODO_ACTIONS.DELETE_TODO:
			return state.filter((todo) => todo.id !== action.payload.id);
		default:
			return state;
	}
};

const newItem = (name) => {
	return { id: Date.now(), name: name, complete: false };
};

const UseReducerExample = () => {
	const [state, dispatch] = useReducer(countReducer, { count: 0 });
	const [todos, dispatchTodos] = useReducer(todoReducer, []);
	const [name, setName] = useState('');

	const decrementCount = () => {
		dispatch({ type: COUNT_ACTIONS.DECREMENT });
	};

	const incrementCount = () => {
		dispatch({ type: COUNT_ACTIONS.INCREMENT });
	};

	const handleSubmit = () => {
		dispatchTodos({ type: TODO_ACTIONS.ADD_TODO, payload: { name: name } });
		setName('');
	};

	console.log(name);
	console.log(todos);

	return (
		<>
			<Space>
				<Button onClick={decrementCount}>-</Button>
				{state.count}
				<Button onClick={incrementCount}>+</Button>
				<Form layout='inline' onFinish={handleSubmit}>
					<Input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form>
			</Space>
			{todos.map((todo) => {
				return (
					<Todo key={todo.id} todo={todo} dispatch={dispatchTodos} />
				);
			})}
		</>
	);
};

export default UseReducerExample;
