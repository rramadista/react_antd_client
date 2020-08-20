import React from 'react';
import Home from '../pages/home/home.component';
import Dashboard from '../pages/dashboard/dashboard.component';
import OfficeList from '../pages/office/office-list.component';
import BranchList from '../pages/branch/branch-list.component';
import PosTitleList from '../pages/pos-title/pos-title-list.component';
import PerfRatingList from '../pages/perf-rating/perf-rating.component';
import Page403 from '../pages/status/page-403/page-403.component';
import Page404 from '../pages/status/page-404/page-404.component';
import Page500 from '../pages/status/page-500/page-500.component';
import Profile from '../pages/profile/profile.component';
import OrgChart from '../pages/org-chart/org-chart.component';
import UserList from '../pages/user/user.component';

const sections = [
	{
		path: '/',
		exact: true,
		sidebar: () => <div>Home</div>,
		main: () => <Home />,
	},
	{
		path: '/dashboard',
		exact: true,
		sidebar: () => <div>Dashboard</div>,
		main: () => <Dashboard />,
	},
	{
		path: '/office',
		exact: true,
		sidebar: () => <div>Office</div>,
		main: () => <OfficeList />,
	},
	{
		path: '/branch',
		exact: true,
		sidebar: () => <div>Branch</div>,
		main: () => <BranchList />,
	},
	{
		path: '/organization',
		exact: true,
		sidebar: () => <div>Organization</div>,
		main: () => <OrgChart />,
	},
	{
		path: '/postitle',
		exact: true,
		sidebar: () => <div>Position Title</div>,
		main: () => <PosTitleList />,
	},
	{
		path: '/position',
		exact: true,
		sidebar: () => <div>Position</div>,
		main: () => <h2>Position Content</h2>,
	},
	{
		path: '/performance/kpi',
		exact: true,
		sidebar: () => <div>KPI Library</div>,
		main: () => <h2>KPI Content</h2>,
	},
	{
		path: '/performance/rating',
		exact: true,
		sidebar: () => <div>Performance Rating</div>,
		main: () => <PerfRatingList />,
	},
	{
		path: '/profile',
		exact: true,
		sidebar: () => <div>Profile</div>,
		main: () => <Profile />,
	},
	{
		path: '/user',
		exact: true,
		sidebar: () => <div>User</div>,
		main: () => <UserList />,
	},
	{
		path: '/403',
		exact: true,
		sidebar: () => <div>Page 403</div>,
		main: () => <Page403 />,
	},
	{
		path: '/404',
		exact: true,
		sidebar: () => <div>Page 404</div>,
		main: () => <Page404 />,
	},
	{
		path: '/500',
		exact: true,
		sidebar: () => <div>Page 500</div>,
		main: () => <Page500 />,
	},
];

export default sections;
