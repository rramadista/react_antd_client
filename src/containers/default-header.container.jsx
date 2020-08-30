import React, { useContext } from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import UserMenuDropdown from '../components/user-menu-dropdown/user-menu-dropdown.component';
import InlineLoginForm from '../components/inline-login/inline-login.component';

import UserContext from '../services/user.context';

const { Header } = Layout;

const DefaultHeader = ({ siderCollapsed, onToggleChange }) => {
	const { userData, setUserData } = useContext(UserContext);

	const onSubmitLogout = () => {
		setUserData({
			token: undefined,
			user: undefined,
		});
		localStorage.setItem('auth-token', '');
	};

	return (
		<Header style={{ background: 'white' }}>
			<Button
				className='trigger'
				ghost
				onClick={onToggleChange}
				type='primary'
			>
				{siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
			{userData.user ? (
				<UserMenuDropdown
					displayName={userData.user.displayName}
					onSubmitLogout={onSubmitLogout}
				/>
			) : (
				<InlineLoginForm />
			)}
		</Header>
	);
};

export default DefaultHeader;
