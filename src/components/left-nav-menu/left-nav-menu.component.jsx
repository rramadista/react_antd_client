import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
	HomeOutlined,
	ApartmentOutlined,
	ProfileOutlined,
	TrophyOutlined,
	SisternodeOutlined,
	TeamOutlined,
	SettingOutlined,
	PoweroffOutlined,
	DashboardOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const LeftNavMenu = () => (
	<Menu
		defaultSelectedKeys={['1']}
		defaultOpenKeys={[]}
		mode='inline'
		theme='dark'
		inlineCollapsed={false}
	>
		<Menu.Item key='home' icon={<HomeOutlined />}>
			<Link to='/'>Home</Link>
		</Menu.Item>
		<SubMenu key='0' icon={<DashboardOutlined />} title='Analytics'>
			<Menu.Item key='dashboard'>
				<Link to='/dashboard'>Dashboard</Link>
			</Menu.Item>
			<Menu.Item key='reporting'>Reporting</Menu.Item>
		</SubMenu>
		<SubMenu key='1' icon={<ApartmentOutlined />} title='Organization'>
			<Menu.Item key='office'>
				<Link to='/office'>Office</Link>
			</Menu.Item>
			<Menu.Item key='branch'>
				<Link to='/branch'>Branch</Link>
			</Menu.Item>
			<Menu.Item key='organization'>
				<Link to='/organization'>Organization</Link>
			</Menu.Item>
			<Menu.Item key='postitle'>
				<Link to='/postitle'>Position Title</Link>
			</Menu.Item>
			<Menu.Item key='position'>
				<Link to='/position'>Position</Link>
			</Menu.Item>
		</SubMenu>
		<SubMenu key='2' icon={<ProfileOutlined />} title='Job'>
			<Menu.Item key='jprofile'>Job Profile</Menu.Item>
			<Menu.Item key='jgrade'>Job Grading</Menu.Item>
		</SubMenu>
		<SubMenu key='3' icon={<TeamOutlined />} title='Workforce Planning'>
			<Menu.Item key='hcp'>Headcount Planning</Menu.Item>
			<Menu.Item key='proj'>Headcount Projection</Menu.Item>
			<Menu.Item key='wla'>Workload Analysis</Menu.Item>
		</SubMenu>
		<SubMenu key='4' icon={<TrophyOutlined />} title='Performance'>
			<Menu.Item key='kpi'>
				<Link to='/performance/kpi'>Key Performance Indicators</Link>
			</Menu.Item>
			<Menu.Item key='rating'>
				<Link to='/performance/rating'>Performance Rating</Link>
			</Menu.Item>
		</SubMenu>
		<SubMenu key='5' icon={<SisternodeOutlined />} title='Business Process'>
			<Menu.Item key='403'>
				<Link to='/403'>Status 403</Link>
			</Menu.Item>
			<Menu.Item key='404'>
				<Link to='/404'>Status 404</Link>
			</Menu.Item>
			<Menu.Item key='500'>
				<Link to='/500'>Status 500</Link>
			</Menu.Item>
		</SubMenu>
		<SubMenu key='6' icon={<SettingOutlined />} title='Settings'>
			<Menu.Item key='profile'>
				<Link to='/profile'>Profile</Link>
			</Menu.Item>
			<Menu.Item key='user'>
				<Link to='/user'>User</Link>
			</Menu.Item>
			<Menu.Item key='group'>
				<Link to='/group'>Change Group</Link>
			</Menu.Item>
			<Menu.Item key='password'>
				<Link to='/password'>Change Password</Link>
			</Menu.Item>
		</SubMenu>
		<Menu.Item key='logout' icon={<PoweroffOutlined />}>
			Log Out
		</Menu.Item>
	</Menu>
);

export default LeftNavMenu;
