import React from 'react';
import { GroupedColumn } from '@ant-design/charts';

import data from './_data';

const BasicChart = () => {
	const config = {
		padding: 'auto',
		forceFit: true,
		data,
		xField: 'date',
		yField: 'value',
		yAxis: {
			label: {
				formatter: (v) =>
					`${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
			},
		},
		legend: { position: 'bottom' },
		groupField: 'type',
		color: ['#1ca9e6', '#f88c24'],
		responsive: true,
	};

	return <GroupedColumn {...config} />;
};
export default BasicChart;
