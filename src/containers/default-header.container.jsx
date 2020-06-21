import React from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import UserDropdown from '../components/user-dropdown/user-dropdown.component';

const { Header } = Layout;

const DefaultHeader = ({ siderCollapsed, onToggleChange }) => {
	return (
		<Header style={{ position: 'sticky', background: 'white' }}>
			<Button
				className='trigger'
				ghost
				onClick={onToggleChange}
				type='primary'
			>
				{siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
			<UserDropdown />
		</Header>
	);
};

export default DefaultHeader;
