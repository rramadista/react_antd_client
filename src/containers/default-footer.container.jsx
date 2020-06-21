import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const DefaultFooter = () => {
	return (
		<Footer style={{ textAlign: 'center' }}>
			Copyright © 2020 Raden Ramadista
		</Footer>
	);
};

export default DefaultFooter;
