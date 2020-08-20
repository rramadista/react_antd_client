import React from 'react';
import { Funnel } from '@ant-design/charts';

const FunnelChart = () => {
	const data = [
		{
			action: 'New Application',
			value: 500,
		},
		{
			action: 'Screening',
			value: 350,
		},
		{
			action: '1st Interview',
			value: 250,
		},
		{
			action: '2nd Interview',
			value: 150,
		},
		{
			action: 'Offer Letter',
			value: 85,
		},
		{
			action: 'Hired',
			value: 65,
		},
	];

	const config = {
		data,
		xField: 'action',
		yField: 'value',
		dynamicHeight: false,
		legend: { position: 'right' },
		percentage: { visible: false },
	};
	return <Funnel {...config} />;
};

export default FunnelChart;
