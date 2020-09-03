import React from 'react';
import { Table, Button, message, Space } from 'antd';

import useGetColumns from './_columns';
import useFetchTable from '../../utils/function/use-fetch.effect';
import AddFormModal from '../../components/add-form-modal/add-form-modal.component';

const OrgGroupList = () => {
	const columns = useGetColumns();

	const { data, loading, pagination, handleTableChange } = useFetchTable(
		`http://localhost:5000/org-group`
	);
	console.log(data);

	return (
		<>
			<Space>
				<Button
					type='primary'
					onClick={() =>
						message.info('This should be success message')
					}
					style={{ marginBottom: 16 }}
				>
					Message
				</Button>
				<AddFormModal />
			</Space>
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

export default OrgGroupList;
