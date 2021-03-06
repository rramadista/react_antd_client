import React, { useContext } from 'react';
import { Layout } from 'antd';

import { LayoutContext } from '../services/hooks/layout.context';

import Brand from '../components/brand/brand.component';
import LeftNavMenu from '../components/left-nav-menu/left-nav-menu.component';

const { Sider } = Layout;

const DefaultLeftSider = () => {
	const { siderCollapsed } = useContext(LayoutContext);

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
