import React from 'react';
import Home from '../pages/home/home.component';
import OfficeList from '../pages/office/office-list.component';
import PosTitleList from '../pages/pos-title/pos-title-list.component';
import Page403 from '../pages/status/page-403/page-403.component';
import Page404 from '../pages/status/page-404/page-404.component';
import Page500 from '../pages/status/page-500/page-500.component';
import PerfRatingList from '../pages/perf-rating/perf-rating.component';

const sections = [
	{
		path: '/',
		exact: true,
		sidebar: () => <div>Home</div>,
		main: () => <Home />,
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
		main: () => <h2>Branch Content</h2>,
	},
	{
		path: '/organization',
		exact: true,
		sidebar: () => <div>Organization</div>,
		main: () => <h2>Organization Content</h2>,
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
		path: '/performance/ski',
		exact: true,
		sidebar: () => <div>Performance Rating</div>,
		main: () => <PerfRatingList />,
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
