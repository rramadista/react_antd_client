import DataTableActionTypes from './data-table.types';

export const INITIAL_STATE = {
	data: [],
	loading: false,
	pagination: {
		current: 1,
		pageSize: 10,
		showTotal: (total, range) =>
			`${range[0]}-${range[1]} of ${total} items`,
		hideOnSinglePage: true,
	},
	selectedRowKeys: [],
};

export const dataTableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case DataTableActionTypes.FETCH_ITEMS:
			return {
				...state,
				loading: true,
			};
		case DataTableActionTypes.FETCH_ITEMS_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
				pagination: { total: action.payload.total },
			};
		case DataTableActionTypes.FETCH_ITEMS_FAILURE:
			return {
				...state,
				loading: false,
			};
		case DataTableActionTypes.SELECT_ROWS:
			return {
				...state,
				selectedRowKeys: action.payload,
			};
		case DataTableActionTypes.ADD_ITEM:
			return {
				...state,
				data: [...state.data, action.payload],
			};
		case DataTableActionTypes.ADD_MULTIPLE_ITEMS:
			return {
				...state,
				data: state.data.concat(action.payload),
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
				data: state.data.filter((item) => item.id !== action.payload),
			};
		case DataTableActionTypes.DELETE_SELECTED_ITEMS:
			const updatedData = [...state.data];
			action.payload.forEach((id) => {
				updatedData = updatedData.filter((item) => item.id !== id);
			});
			return {
				...state,
				data: updatedData,
				selectedRowKeys: [],
			};
		case DataTableActionTypes.DELETE_ALL_ITEMS:
			return {
				...state,
				data: [],
				selectedRowKeys: [],
			};
		default:
			return state;
	}
};
