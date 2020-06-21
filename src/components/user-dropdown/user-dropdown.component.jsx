import React from 'react';
import { Dropdown, Button } from 'antd';
import UserMenu from '../user-menu/user-menu.component';

const UserDropdown = () => (
	<Dropdown overlay={UserMenu} trigger={['click']}>
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
export default UserDropdown;
