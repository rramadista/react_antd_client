import React from 'react';
import { Table, Button } from 'antd';
import { CSVLink } from 'react-csv';

import useGetColumns from './_columns';
import useFetchTable from '../../utils/function/use-fetch.effect';

const OfficeList = () => {
	const columns = useGetColumns();
	const { data, loading, pagination, handleTableChange } = useFetchTable(
		`http://localhost:5000/office`
	);

	return (
		<>
			<Button type='primary' style={{ marginBottom: 16 }}>
				<CSVLink data={data} filename={'office.csv'}>
					Download
				</CSVLink>
			</Button>
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

export default OfficeList;
