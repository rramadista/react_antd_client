import React, { useState, createContext } from 'react';

export const LayoutContext = createContext({
	siderCollapsed: true,
	setSiderCollapsed: () => {},
});

const LayoutProvider = ({ children }) => {
	const [siderCollapsed, setSiderCollapsed] = useState(true);

	const onToggleChange = () => {
		setSiderCollapsed((prev) => !siderCollapsed);
	};

	return (
		<LayoutContext.Provider value={{ siderCollapsed, onToggleChange }}>
			{children}
		</LayoutContext.Provider>
	);
};

export default LayoutProvider;
