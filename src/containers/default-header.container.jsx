import React, { useState, useContext } from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import UserMenuDropdown from '../components/user-menu-dropdown/user-menu-dropdown.component';
import InlineLoginForm from '../components/inline-login/inline-login.component';

import UserContext from '../services/user.context';

const { Header } = Layout;

const DefaultHeader = ({ siderCollapsed, onToggleChange }) => {
	const { userData, setUserData } = useContext(UserContext);

	const [route, setRoute] = useState('signout');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
					isLoggedIn={isLoggedIn}
					onSubmitLogout={onSubmitLogout}
				/>
			) : (
				<InlineLoginForm isLoggedIn={isLoggedIn} />
			)}
		</Header>
	);
};

export default DefaultHeader;
