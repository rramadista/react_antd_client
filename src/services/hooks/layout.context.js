import React, { useState, useContext, createContext } from 'react';

const LayoutContext = createContext();
const LayoutUpdateContext = createContext();

export const useLayout = () => {
	return useContext(LayoutContext);
};

export const useLayoutUpdate = () => {
	return useContext(LayoutUpdateContext);
};

const LayoutProvider = ({ children }) => {
	const [siderCollapsed, setSiderCollapsed] = useState(true);

	const onToggleChange = () => {
		setSiderCollapsed((prev) => !siderCollapsed);
	};

	return (
		<LayoutContext.Provider value={siderCollapsed}>
			<LayoutUpdateContext.Provider value={onToggleChange}>
				{children}
			</LayoutUpdateContext.Provider>
		</LayoutContext.Provider>
	);
};

export default LayoutProvider;
