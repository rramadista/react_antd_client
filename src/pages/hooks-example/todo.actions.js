export const addItem = (item) => ({
	type: 'add-todo',
	payload: item,
});

export const toggleItem = (state) => ({
	type: 'toggle-todo',
	payload: { id: state.id },
});

export const deleteItem = (state) => ({
	type: 'delete-todo',
	payload: { id: state.id },
});

export const incrementCount = () => ({
	type: 'increment',
});

export const decrementCount = () => ({
	type: 'decrement',
});
