import React from 'react';
import { Table, Button, message } from 'antd';

import useGetColumns from './_columns';
import useFetchTable from '../../utils/function/use-fetch.effect';

const UserList = () => {
	const columns = useGetColumns();
	const { data, loading, pagination, handleTableChange } = useFetchTable(
		`http://localhost:5000/user/all`
	);

	const info = () => {
		message.info('This should be success message');
	};

	return (
		<>
			<Button type='primary' onClick={info} style={{ marginBottom: 16 }}>
				Add
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

export default UserList;
