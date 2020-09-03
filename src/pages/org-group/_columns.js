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
		message.success('Success deleted record');
	};

	// const onDeleteConfirm = (e) => {
	// 	console.log(e);
	// 	fetch(`http://localhost:5000/org-group/${e}`, {
	// 		method: 'delete',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({ e }),
	// 	})
	// 		.then((res) => res.json())
	// 		.catch((err) => console.log(err));
	// 	message.success('Success deleted record');
	// };

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
			...getColumnSearchProps('code'),
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
