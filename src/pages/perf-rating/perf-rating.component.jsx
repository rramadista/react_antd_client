import React from 'react';
import { Table } from 'antd';

import useGetColumns from './_columns';
import useFetchTable from '../../utils/function/use-fetch.effect';

const PerfRatingList = () => {
	const columns = useGetColumns();
	const { data, loading, pagination, handleTableChange } = useFetchTable(
		`http://localhost:5000/perf-rating`
	);

	return (
		<>
			<Table
				dataSource={data}
				columns={columns}
				rowKey={(record) => record.id}
				pagination={pagination}
				loading={loading}
				onChange={handleTableChange}
				size='small'
			/>
		</>
	);
};

export default PerfRatingList;
