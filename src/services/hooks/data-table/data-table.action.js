export const addItem = (item) => ({
	type: 'add-item',
	payload: item,
});

export const editItem = (item) => ({
	type: 'edit-item',
	payload: item,
});

export const deleteItem = (item) => ({
	type: 'delete-item',
	payload: item,
});
