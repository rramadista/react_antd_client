import React, { useState, useEffect } from 'react';
import OrganizationChart from '@dabeng/react-orgchart';

import CustomNode from './custom-node.component';
// import data from './_data';

const OrgChart = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		fetch('http://localhost:5000/org-chart')
			.then((res) => res.json())
			.then((d) => {
				setData(d.results[0]);
			})
			.catch((error) => console.log('Fetching error: ', error));
	};
	return (
		<>
			<OrganizationChart
				datasource={data}
				pan={true}
				zoom={true}
				chartClass='myChart'
				NodeTemplate={CustomNode}
			/>
		</>
	);
};

export default OrgChart;
