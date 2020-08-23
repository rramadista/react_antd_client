import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import {
	UserSwitchOutlined,
	LockOutlined,
	PoweroffOutlined,
} from '@ant-design/icons';

const UserMenuDropdown = ({ displayName, onSubmitLogout }) => {
	const userMenu = () => (
		<Menu>
			<Menu.Item>{displayName}</Menu.Item>
			<Menu.Divider />
			<Menu.Item key='0' icon={<UserSwitchOutlined />}>
				Change Group
			</Menu.Item>
			<Menu.Item key='1' icon={<LockOutlined />}>
				Change Password
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item
				key='3'
				icon={<PoweroffOutlined />}
				onClick={onSubmitLogout}
			>
				Log Out
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown overlay={userMenu} trigger={['click']}>
			<Button
				type='primary'
				shape='circle'
				style={{ float: 'right', margin: 10 }}
				size='large'
			>
				RR
			</Button>
		</Dropdown>
	);
};

export default UserMenuDropdown;
