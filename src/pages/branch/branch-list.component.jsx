import React, { useState } from 'react';
import { Table, Button } from 'antd';

import useGetColumns from './_columns';
import useFetchTable from '../../utils/function/use-fetch.effect';

import CreateFormModal from '../../components/create-form-modal/create-form-modal.component';

const BranchList = () => {
	const columns = useGetColumns();
	const { data, loading, pagination, handleTableChange } = useFetchTable(
		`http://localhost:5000/branch`
	);

	const [visible, setVisible] = useState(false);

	const onCreate = (values) => {
		console.log('Received values of form: ', values);
		setVisible(false);
	};

	return (
		<>
			<Button
				type='primary'
				onClick={() => {
					setVisible(true);
				}}
				style={{ marginBottom: 16 }}
			>
				Add
			</Button>
			<CreateFormModal
				visible={visible}
				onCreate={onCreate}
				onCancel={() => {
					setVisible(false);
				}}
			/>
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

export default BranchList;
