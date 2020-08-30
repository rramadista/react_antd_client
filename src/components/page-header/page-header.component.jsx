import React from 'react';
import { PageHeader as PageHeaderAntd, Button } from 'antd';
import { Switch, Route } from 'react-router-dom';
import sections from '../../utils/routes';

const routes = [
	{
		path: 'index',
		breadcrumbName: 'First-level Menu',
	},
	{
		path: 'first',
		breadcrumbName: 'Second-level Menu',
	},
	{
		path: 'second',
		breadcrumbName: 'Third-level Menu',
	},
];

const PageHeader = () => {
	return (
		<Switch>
			{sections.map((route, index) => (
				<Route key={index} path={route.path} exact={route.exact}>
					<PageHeaderAntd
						className='site-page-header'
						onBack={() => null}
						title={route.title}
						subTitle='This is a subtitle'
						breadcrumb={{ routes }}
						extra={[
							<Button key='3'>Dummy</Button>,
							<Button key='2'>Dummy</Button>,
							<Button key='1' type='primary'>
								Primary
							</Button>,
						]}
						style={{ padding: '24px 0' }}
					/>
				</Route>
			))}
		</Switch>
	);
};

export default PageHeader;
