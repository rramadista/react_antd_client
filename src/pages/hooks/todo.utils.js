export const newItem = (name) => {
	return { id: Date.now(), name: name, complete: false };
};
