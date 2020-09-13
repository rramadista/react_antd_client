import React, { useState, useEffect } from 'react';
import { Table, Button, message, Space } from 'antd';

// import useGetColumns from './_columns';
// import useFetchTable from '../../utils/function/use-fetch.effect';
import AddFormModal from '../../components/add-form-modal/add-form-modal.component';

import TableActionButton from '../../components/table-action-button/table-action-button.component';
import useSearchColumn from '../../utils/function/use-search.state';

const OrgGroupList = () => {
	// const columns = useGetColumns();

	// const { data, loading, pagination, handleTableChange } = useFetchTable(
	// 	`http://localhost:5000/org-group`
	// );

	// Test Use Fetch
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
		showTotal: (total, range) =>
			`${range[0]}-${range[1]} of ${total} items`,
		hideOnSinglePage: true, // hide pagination when single page or no data
	});
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		fetchData({ pagination });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleTableChange = (pagination, filters, sorter) => {
		fetchData({
			sortField: sorter.field,
			sortOrder: sorter.order,
			pagination,
			...filters,
		});
	};

	const fetchData = (params = {}) => {
		setLoading(true);
		fetch(`http://localhost:5000/org-group`)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setData(data.results);
				setPagination({
					...params.pagination,
					total: data.total,
				});
			})
			.catch((err) => console.log('Fetching error: ', err));
	};

	const onCreate = (values) => {
		setVisible(false);
		console.log('Received values of form: ', values);
		fetch(`http://localhost:5000/org-group`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values),
		})
			.then((res) => res.json())
			.then(() => fetchData({ pagination }))
			.catch((err) => console.log(err));
		message.success(`Success created ${values.id} record`);
	};

	const onUpdate = (id) => {
		setVisible(false);
		fetch(`http://localhost:5000/org-group/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
		});
	};

	const onDeleteConfirm = (id) => {
		console.log(id);
		fetch(`http://localhost:5000/org-group/${id}`, {
			method: 'DELETE',
		})
			.then(() => fetchData({ pagination }))
			.catch((err) => console.log(err));
		message.success(`Success deleted ${id} record`);
	};

	// Test Use Get Columns
	const { getColumnSearchProps } = useSearchColumn();

	const columns = [
		{
			title: 'Org Group ID',
			dataIndex: 'id',
			key: 'id',
			...getColumnSearchProps('id'),
			width: 150,
		},
		{
			title: 'Org Group Code',
			dataIndex: 'code',
			key: 'code',
			...getColumnSearchProps('code'),
			width: 150,
		},
		{
			title: 'Organization Group Name',
			dataIndex: 'name',
			key: 'name',
			...getColumnSearchProps('name'),
			width: 400,
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<TableActionButton
					onDeleteConfirm={() => onDeleteConfirm(record.id)}
					onUpdate={onUpdate}
					visible={visible}
					setVisible={setVisible}
				/>
			),
		},
	];

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
				<AddFormModal
					onCreate={onCreate}
					visible={visible}
					setVisible={setVisible}
					buttonLabel='Add'
				/>
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
