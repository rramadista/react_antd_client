import DataTableActionTypes from './data-table.types';

export const INITIAL_STATE = {
	loading: false,
	data: [],
	pagination: {
		current: 1,
		ageSize: 10,
		showTotal: (total, range) =>
			`${range[0]}-${range[1]} of ${total} items`,
		hideOnSinglePage: true,
	},
};

export const dataTableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case DataTableActionTypes.ADD_ITEM:
			return {
				...state,
				data: [...state.data, action.payload],
			};
		case DataTableActionTypes.EDIT_ITEM:
			const itemIndex = state.data.findIndex(
				(item) => item.id === action.payload.id
			);
			return {
				...state,
				data: [
					...state.data.slice(0, itemIndex),
					action.payload,
					...state.data.slice(itemIndex + 1),
				],
			};
		case DataTableActionTypes.DELETE_ITEM:
			return {
				...state,
				data: state.data.filter(
					(item) => item.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};
