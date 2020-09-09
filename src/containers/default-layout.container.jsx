import React from 'react';
import { Layout } from 'antd';

import {
	DefaultLeftSider,
	DefaultHeader,
	DefaultContent,
	DefaultFooter,
} from './index';

import LayoutProvider from '../services/hooks/layout.context';

const DefaultLayout = () => {
	return (
		<LayoutProvider>
			<Layout style={{ minHeight: '100vh' }}>
				<DefaultLeftSider />
				<Layout>
					<DefaultHeader />
					<DefaultContent />
					<DefaultFooter />
				</Layout>
			</Layout>
		</LayoutProvider>
	);
};

export default DefaultLayout;
