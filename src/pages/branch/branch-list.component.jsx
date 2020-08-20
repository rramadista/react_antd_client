import React, { useState } from 'react';
import { Table, Button, Space, message } from 'antd';

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

	const success = () => message.success('This is a success message');
	const error = () => message.error('This is an error message');
	const warning = () => message.warning('This is a warning message');

	return (
		<>
			<Space>
				<Button onClick={success}>Success</Button>
				<Button onClick={error}>Error</Button>
				<Button onClick={warning}>Warning</Button>
				<Button
					type='primary'
					onClick={() => {
						setVisible(true);
					}}
				>
					Add
				</Button>
			</Space>
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
