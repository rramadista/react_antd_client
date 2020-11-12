import TodoActionTypes from './todo.types';
import { newItem } from './todo.utils';

export const INITIAL_STATE = {
	count: 0,
	todoItems: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TodoActionTypes.ADD_TODO:
			return {
				...state,
				todoItems: [...state.todoItems, newItem(action.payload)],
				count: state.count + 1,
			};
		case TodoActionTypes.TOGGLE_TODO:
			return {
				...state,
				todoItems: state.todoItems.map((item) => {
					if (item.id === action.payload.id) {
						return { ...item, complete: !item.complete };
					}
					return item;
				}),
			};
		case TodoActionTypes.DELETE_TODO:
			return {
				...state,
				todoItems: state.todoItems.filter(
					(item) => item.id !== action.payload.id
				),
				count: state.count - 1,
			};

		case TodoActionTypes.INCREMENT:
			return { ...state, count: state.count + 1 };
		case TodoActionTypes.DECREMENT:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

export default todoReducer;
