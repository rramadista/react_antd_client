import React from 'react';
import { Layout } from 'antd';

import { useLayout } from '../services/hooks/layout.context';

import Brand from '../components/brand/brand.component';
import LeftNavMenu from '../components/left-nav-menu/left-nav-menu.component';

const { Sider } = Layout;

const DefaultLeftSider = () => {
	const siderCollapsed = useLayout();

	return (
		<Sider
			trigger={null}
			collapsed={siderCollapsed}
			collapsedWidth={80}
			collapsible
			width={256}
		>
			<Brand />
			<LeftNavMenu />
		</Sider>
	);
};

export default DefaultLeftSider;
