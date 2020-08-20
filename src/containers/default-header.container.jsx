import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import UserMenuDropdown from '../components/user-menu-dropdown/user-menu-dropdown.component';
import InlineLoginForm from '../components/inline-login/inline-login.component';

const { Header } = Layout;

const DefaultHeader = ({ siderCollapsed, onToggleChange }) => {
	const [route, setRoute] = useState('signout');
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [user, setUser] = useState({
		id: '',
		name: '',
		email: '',
	});

	const loadUser = (data) => {
		setUser({
			id: data.id,
			name: data.name,
			email: data.email,
		});
	};

	const onRouteChange = (route) => {
		if (route === 'signout') {
			setIsSignedIn(false);
		} else if (route === 'signin') {
			setIsSignedIn(true);
		}
		setRoute(route);
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
			{route === 'signin' ? (
				<UserMenuDropdown
					email={user.email}
					onRouteChange={onRouteChange}
					isSignedIn={isSignedIn}
				/>
			) : (
				<InlineLoginForm
					loadUser={loadUser}
					onRouteChange={onRouteChange}
					isSignedIn={isSignedIn}
				/>
			)}
		</Header>
	);
};

export default DefaultHeader;
