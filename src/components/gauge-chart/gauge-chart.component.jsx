import React from 'react';
import { Gauge } from '@ant-design/charts';

const GaugeChart = () => {
	// const config = {
	// 	width: 400,
	// 	height: 400,
	// 	value: 75,
	// 	min: 0,
	// 	max: 100,
	// 	range: [0, 75],
	// 	color: ['l(0) 0:#5d7cef 1:#e35767'],
	// 	axis: {
	// 		offset: -15,
	// 		tickLine: {
	// 			visible: true,
	// 			length: 10,
	// 		},
	// 		label: { visible: false },
	// 	},
	// 	pivot: {
	// 		visible: true,
	// 		thickness: 10,
	// 		pointer: {
	// 			visible: true,
	// 			style: { fill: '#e25869' },
	// 		},
	// 		pin: {
	// 			visible: true,
	// 			style: { fill: '#e8e6ea' },
	// 		},
	// 	},
	// 	statistic: {
	// 		visible: true,
	// 		position: ['50%', '100%'],
	// 		text: '26/48',
	// 		color: '#2e3033',
	// 		size: 40,
	// 	},
	// };

	const config = {
		width: 400,
		height: 400,
		value: 64,
		min: 0,
		max: 100,
		range: [0, 25, 50, 75, 100],
		color: ['#ff4d4f', '#faad14', '#52c41a', '#1890ff'],
		statistic: {
			visible: true,
			text: 'KPI Score',
		},
	};

	return <Gauge {...config} />;
};

export default GaugeChart;
