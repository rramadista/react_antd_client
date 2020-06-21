import React from 'react';
import { Menu } from 'antd';
import {
	UserSwitchOutlined,
	LockOutlined,
	PoweroffOutlined,
} from '@ant-design/icons';

const UserMenu = () => (
	<Menu>
		<Menu.Item key='0' icon={<UserSwitchOutlined />}>
			Change Group
		</Menu.Item>
		<Menu.Item key='1' icon={<LockOutlined />}>
			Change Password
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key='3' icon={<PoweroffOutlined />}>
			Log Out
		</Menu.Item>
	</Menu>
);

export default UserMenu;
