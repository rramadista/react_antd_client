import React from 'react';
import { Layout, Card } from 'antd';
import { Switch, Route } from 'react-router-dom';

import routes from '../utils/routes';
import PageHeader from '../components/page-header/page-header.component';

const { Content } = Layout;

const DefaultContent = () => {
	return (
		<Content style={{ position: 'sticky', margin: '0 50px' }}>
			<PageHeader />
			<Card
				className='site-layout-background'
				style={{
					background: '#fff',
					padding: 24,
					minHeight: 500,
				}}
			>
				<Switch>
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							children={route.component}
						/>
					))}
				</Switch>
			</Card>
		</Content>
	);
};

export default DefaultContent;
