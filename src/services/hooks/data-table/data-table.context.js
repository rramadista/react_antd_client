import React, { createContext, useReducer } from 'react';
import { addItem, deleteItem, editItem } from './data-table.action';
import { dataTableReducer, INITIAL_STATE } from './data-table.reducer';

export const DataTableContext = createContext(INITIAL_STATE);

const DataTableProvider = ({ children }) => {
	const [state, dispatch] = useReducer(dataTableReducer, INITIAL_STATE);

	const addItemToData = (item) => {
		dispatch(addItem(item));
	};

	const updateDataItem = (item) => {
		dispatch(editItem(item));
	};

	const deleteItemFromData = (id) => {
		dispatch(deleteItem(id));
	};

	return (
		<DataTableContext.Provider
			value={{
				loading: state.loading,
				data: state.data,
				addItemToData,
				updateDataItem,
				deleteItemFromData,
			}}
		>
			{children}
		</DataTableContext.Provider>
	);
};

export default DataTableProvider;
