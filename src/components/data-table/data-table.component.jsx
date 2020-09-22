import React, { useState, useEffect } from 'react';
import { Table, message } from 'antd';
import TableActionButton from '../table-action-button/table-action-button.component';
import useSearchColumn from '../../utils/function/use-search.state';

const DataTable = ({ data, setData, updateData, deleteItemFromData }) => {
	const [loading, setLoading] = useState(false);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
		showTotal: (total, range) =>
			`${range[0]}-${range[1]} of ${total} items`,
		hideOnSinglePage: true, // hide pagination when single page or no data
	});

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

	// Get Data
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

	const onDeleteConfirm = (id) => {
		console.log(id);
		fetch(`http://localhost:5000/org-group/${id}`, {
			method: 'DELETE',
		})
			.then(() => deleteItemFromData(id))
			.catch((err) => console.log(err));
		message.success(`Success deleted ${id} record`);
	};

	// Use Get Columns
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
					updateData={updateData}
					record={record}
				/>
			),
		},
	];

	return (
		<Table
			dataSource={data}
			columns={columns}
			rowKey={(record) => record.id}
			pagination={pagination}
			loading={loading}
			onChange={handleTableChange}
			size='small'
		/>
	);
};

export default DataTable;