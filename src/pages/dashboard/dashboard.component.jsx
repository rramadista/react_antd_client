import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import {
	ArrowUpOutlined,
	ArrowDownOutlined,
	LikeOutlined,
} from '@ant-design/icons';

// import data from '../../components/basic-chart/_data';

import BasicChart from '../../components/basic-chart/basic-chart.component';
import FunnelChart from '../../components/funnel-chart/funnel-chart.component';
import GaugeChart from '../../components/gauge-chart/gauge-chart.component';

const Dashboard = () => {
	const { Meta } = Card;

	return (
		<>
			<Row gutter={[16, 16]}>
				<Col span={6}>
					<Card hoverable>
						<Statistic
							title='Active'
							value={11.28}
							precision={2}
							valueStyle={{ color: '#3f8600' }}
							prefix={<ArrowUpOutlined />}
							suffix='%'
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card hoverable>
						<Statistic
							title='Idle'
							value={9.3}
							precision={2}
							valueStyle={{ color: '#cf1322' }}
							prefix={<ArrowDownOutlined />}
							suffix='%'
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card hoverable>
						<Statistic
							title='Feedback'
							value={1128}
							prefix={<LikeOutlined />}
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card hoverable>
						<Statistic title='Unmerged' value={93} suffix='/ 100' />
					</Card>
				</Col>
			</Row>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Card
						hoverable
						title='Headcount'
						extra={<a href='#'>More</a>}
					>
						<Meta title='Bank Mega' description='as per May 2020' />
						<BasicChart />
					</Card>
				</Col>
			</Row>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<Card
						hoverable
						title='Recruitment Pipeline'
						extra={<a href='#'>More</a>}
					>
						<FunnelChart />
					</Card>
				</Col>
				<Col span={6}>
					<Card hoverable title='KPI #1' extra={<a href='#'>More</a>}>
						<GaugeChart />
					</Card>
				</Col>
				<Col span={6}>
					<Card hoverable title='KPI #2' extra={<a href='#'>More</a>}>
						<GaugeChart />
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Dashboard;
