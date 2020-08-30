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
import EmployeeList from '../pages/employee/employee.component';

const sections = [
	{ path: '/', exact: true, title: 'Home', component: () => <Home /> },
	{ path: '/dashboard', title: 'Dashboard', component: () => <Dashboard /> },
	{ path: '/office', title: 'Office', component: () => <OfficeList /> },
	{ path: '/branch', title: 'Branch', component: () => <BranchList /> },
	{
		path: '/org-chart',
		title: 'Organization Chart',
		component: () => <OrgChart />,
	},
	{
		path: '/postitle',
		title: 'Position Title',
		component: () => <PosTitleList />,
	},
	{ path: '/position', title: 'Position', component: <h2>Position</h2> },
	{
		path: '/performance/kpi',
		title: 'KPI Library',
		component: <h2>KPI Content</h2>,
	},
	{
		path: '/performance/rating',
		title: 'Performance Rating',
		component: () => <PerfRatingList />,
	},
	{ path: '/profile', title: 'Profile', component: () => <Profile /> },
	{ path: '/user', title: 'User', component: () => <UserList /> },
	{ path: '/employee', title: 'Employee', component: () => <EmployeeList /> },
	{
		path: '/talent/succession',
		title: 'Succession',
		component: <h2>Succession</h2>,
	},
	{ path: '/talent/career', title: 'Career', component: <h2>Career</h2> },
	{ path: '/403', title: 'Page 403', component: () => <Page403 /> },
	{ path: '/404', title: 'Page 404', component: () => <Page404 /> },
	{ path: '/500', title: 'Page 500', component: () => <Page500 /> },
];

export default sections;
