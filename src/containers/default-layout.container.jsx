import React, { useState } from 'react';
import { Layout } from 'antd';

import {
	DefaultLeftSider,
	DefaultHeader,
	DefaultContent,
	DefaultFooter,
} from './index';

const DefaultLayout = () => {
	const [siderCollapsed, setSiderCollapsed] = useState(true);

	const onToggleChange = () => {
		setSiderCollapsed(!siderCollapsed);
	};

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<DefaultLeftSider siderCollapsed={siderCollapsed} />
			<Layout>
				<DefaultHeader
					siderCollapsed={siderCollapsed}
					onToggleChange={onToggleChange}
				/>
				<DefaultContent />
				<DefaultFooter />
			</Layout>
		</Layout>
	);
};

export default DefaultLayout;
