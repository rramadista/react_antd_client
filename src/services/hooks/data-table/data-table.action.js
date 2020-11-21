export const getItems = () => ({
	type: 'fetch-items',
});

export const getItemsSuccess = (state) => ({
	type: 'fetch-items-success',
	payload: state.results.items,
});

export const getItemsFailure = () => ({
	type: 'fetch-items-failure',
});

export const selectRows = (state) => ({
	type: 'select-rows',
	payload: state,
});

export const addItem = (state) => ({
	type: 'add-item',
	payload: state,
});

export const addMultipleItems = (state) => ({
	type: 'add-multiple-items',
	payload: state,
});

export const editItem = (state) => ({
	type: 'edit-item',
	payload: state,
});

export const deleteItem = (state) => ({
	type: 'delete-item',
	payload: state,
});

export const deleteSelectedItems = (state) => ({
	type: 'delete-selected-items',
	payload: state,
});

export const deleteAll = () => ({
	type: 'delete-all-items',
});
