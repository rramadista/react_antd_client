import React, { createContext, useReducer } from 'react';
// import {
// 	addItem,
// 	addMultipleItems,
// 	deleteItem,
// 	deleteSelectedItems,
// 	deleteAll,
// 	editItem,
// 	getItemsSuccess,
// 	selectRows,
// 	getItems,
// 	getItemsFailure,
// } from './data-table.action';
import { dataTableReducer, INITIAL_STATE } from './data-table.reducer';

export const DataTableContext = createContext(INITIAL_STATE);

const DataTableProvider = ({ children }) => {
	const [state, dispatch] = useReducer(dataTableReducer, INITIAL_STATE);

	const addItemToData = (item) => {
		// dispatch(addItem(item));
		dispatch({ type: 'add-item', payload: item });
	};

	const addMultipleItemsToData = (items) => {
		// dispatch(addMultipleItems(items));
		dispatch({ type: 'add-multiple-items', payload: items });
	};

	const updateDataItem = (item) => {
		// dispatch(editItem(item));
		dispatch({ type: 'edit-item', payload: item });
	};

	const deleteItemFromData = (id) => {
		// dispatch(deleteItem(id));
		dispatch({ type: 'delete-item', payload: id });
	};

	const deleteMultipleItemsFromData = (ids) => {
		// dispatch(deleteSelectedItems(ids));
		dispatch({ type: 'delete-selected-items', payload: ids });
	};

	const deleteAllItems = () => {
		// dispatch(deleteAll());
		dispatch({ type: 'delete-all-items' });
	};

	const getData = () => {
		// dispatch(getItems());
		dispatch({ type: 'fetch-items' });
	};

	const getDataSuccess = (data) => {
		// dispatch(getItemsSuccess(data));
		dispatch({ type: 'fetch-items-success', payload: data.results.items });
	};

	const getDataFailure = () => {
		// dispatch(getItemsFailure());
		dispatch({ type: 'fetch-items-failure' });
	};

	const onSelectRowChange = (keys) => {
		// dispatch(selectRows(keys));
		dispatch({ type: 'select-rows', payload: keys });
	};

	return (
		<DataTableContext.Provider
			value={{
				loading: state.loading,
				data: state.data,
				selectedRowKeys: state.selectedRowKeys,
				pagination: state.pagination,
				addItemToData,
				addMultipleItemsToData,
				updateDataItem,
				deleteItemFromData,
				deleteMultipleItemsFromData,
				deleteAllItems,
				getData,
				getDataSuccess,
				getDataFailure,
				onSelectRowChange,
			}}
		>
			{children}
		</DataTableContext.Provider>
	);
};

export default DataTableProvider;
