import React from 'react';
import { Table, Button } from 'antd';
import { CSVLink } from 'react-csv';

import useGetColumns from './_columns';
import useFetchTable from '../../utils/function/use-fetch.effect';

const EmployeeList = () => {
	const columns = useGetColumns();
	const { data, loading, pagination, handleTableChange } = useFetchTable(
		`http://localhost:5000/employee`
	);

	return (
		<>
			<Button type='primary'>
				<CSVLink data={data} filename={'employee.csv'} target='_blank'>
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

export default EmployeeList;
