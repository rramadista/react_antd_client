import React from 'react';
import TableActionButton from '../../components/table-action-button/table-action-button.component';
import useSearchColumn from '../../utils/function/use-search.state';
import { message } from 'antd';

const useGetColumns = () => {
	const { getColumnSearchProps } = useSearchColumn();

	const onDeleteConfirm = (id) => {
		console.log(id);
		fetch(`http://localhost:5000/org-group/${id}`, {
			method: 'DELETE',
		}).catch((err) => console.log(err));
		message.success(`Success deleted ${id} record`);
	};

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
				/>
			),
		},
	];

	return columns;
};

export default useGetColumns;
